nAnerd.controller('applyJobController',function($scope,userServices,$window,$http){

    $http({
        method: 'GET',
        url: 'php/listAllJobs.php'
    }).then(function (result) {
        $scope.jobList = result.data;
        $scope.keyForJobList = Object.keys($scope.jobList);

        $scope.variable = $scope.jobList[$scope.keyForJobList]; //creation of temporary variables to get the keys for sorting.

        $scope.variable2 = Object.keys($scope.variable);

        $scope.variable3 = $scope.variable[$scope.variable2[0]];

        $scope.headers = Object.keys($scope.variable3);



    });

    $scope.apply = function(v){
        $scope.rowData= v;
        userServices.setRowData($scope.rowData);
        $window.location="#!/applySpecificJob"
    };

});