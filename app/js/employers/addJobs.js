nAnerd.controller('addJobs',function($scope,userServices,$window,$http){

    $scope.submitJob = function(){

        var userName = userServices.getUserName();

        var organization = userServices.getOrganization();


        $http.post("php/addJobs.php",
            {
                'jobName': $scope.jobName,
                'jobDescription': $scope.jobDescription,
                'skills': $scope.skills,
                'startDate': $scope.startDate,
                'endDate': $scope.endDate,
                'salary': $scope.salary,
                'employerUserName': userName,
                'employerOrganization' : organization,
                'viewable':$scope.viewable

            }
        )
            .then(function () {
                $window.location="#!/dashboardEmployer";
            });


    };


});