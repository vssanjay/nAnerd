nAnerd.controller("applySpecificJob",function($scope,$http,$window,userServices){

    var rowData = userServices.getRowData();
    $scope.jobData = rowData;
    var keyTermForId = (Object.keys(rowData)[0]);
    var keyTermForName = (Object.keys(rowData)[1]);
    var keyTermForDesc = (Object.keys(rowData)[2]);
    var keyTermForSkills = (Object.keys(rowData)[3]);
    var keyTermForEndDate = (Object.keys(rowData)[4]);
    var keyTermForSalary = (Object.keys(rowData)[5]);
    var keyTermForOrg = (Object.keys(rowData)[6]);
    $scope.jobId = rowData[keyTermForId];
    $scope.jobName = rowData[keyTermForName];
    $scope.jobDesc = rowData[keyTermForDesc];
    $scope.skills = rowData[keyTermForSkills];
    $scope.endDate = rowData[keyTermForEndDate];
    $scope.salary = rowData[keyTermForSalary];
    $scope.jobOrg = rowData[keyTermForOrg];

    var studentName = userServices.getUserName();

    $scope.apply = function(){

        $http.post("php/applySpecificJob.php",
            {
                'studentName' : studentName,
                'jobId': $scope.jobId,
                'jobName': $scope.jobName,
                'jobOrg': $scope.jobOrg
            }
        ).then(function(){

            $http.post("php/notifyEmployer.php",{
                'jobId' : $scope.jobId
            }
            ).then(function(response) {
                $scope.temp = response.data;

                var keyTermForThisName = (Object.keys($scope.temp));
                $scope.name = $scope.temp[keyTermForThisName];
                $scope.notified = false;
                $http.post("php/notificationTable.php",{

                    'studentName' : studentName,
                    'jobId': $scope.jobId,
                    'employerName':$scope.name,
                    'notified' : $scope.notified


                }).then(function(){
                    $window.location = "#!/applyJobs";
                });
            });

        });

    };

    $scope.back = function(){
        $window.location="#!/applyJobs"
    };



});