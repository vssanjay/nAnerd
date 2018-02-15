nAnerd.controller('editJobs',function($scope,userServices,$window,$http){

    var rowData = userServices.getRowData();
    var keyTerm = (Object.keys(rowData)[0]);
    var jobId = rowData[keyTerm];
    var employerName = userServices.getUserName();

    $scope.submitJob = function(){
        $http.post("php/editJobs.php",
            {
                'jobId': jobId,
                'employerName' : employerName,
                'jobName': $scope.jobName,
                'jobDescription': $scope.jobDescription,
                'skills': $scope.skills,
                'startDate': $scope.startDate,
                'endDate': $scope.endDate,
                'salary': $scope.salary,
                'viewable':$scope.viewable
            }
        )
            .then(function () {
                    $window.location="#!/modifyJobs"
            });


    }


});