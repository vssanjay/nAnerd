nAnerd.controller("adminEmployerViewController",function($scope,$http){

    $scope.headers=[];

    $http({
        method: 'GET',
        url: 'php/admin/viewAllEmployers.php'
    }).then(function (result) {
        console.log(result.data);
        $scope.employerList = result.data;

        $scope.keyForEmployerList = Object.keys($scope.employerList);

        $scope.variable = $scope.employerList[$scope.keyForEmployerList]; //creation of temporary variables to get the keys for sorting.

        $scope.variable2 = Object.keys($scope.variable);

        $scope.variable3 = $scope.variable[$scope.variable2[0]];

        $scope.headers = Object.keys($scope.variable3);



    }  );




});

