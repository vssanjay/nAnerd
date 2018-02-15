nAnerd.controller('modifyJobs',function($scope,$window,$http,userServices){
    var vm=this;
    $scope.username = userServices.getUserName();
    $http.post("php/modifyJobs.php", {
            'username':$scope.username
        })

            .then(function(result){
                $scope.jobListEmployer=result.data;
                });


    $scope.modifySpecificJob = function(v){
        $scope.rowData= v;
        userServices.setRowData($scope.rowData);
        window.location="#!/editJobs";
        };



    });