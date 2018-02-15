nAnerd.controller('employerStudentProfileView',function($scope,$http,userServices,$window){


    $scope.studentProfileData = userServices.getRowData();

    var keyTermForJobId = (Object.keys($scope.studentProfileData)[0]);
    var keyTermForEmployerName = (Object.keys($scope.studentProfileData)[1]);
    var keyTermForStudentUserName = (Object.keys($scope.studentProfileData)[2]);
    $scope.jobId = $scope.studentProfileData[keyTermForJobId];
    $scope.employerName = $scope.studentProfileData[keyTermForEmployerName];
    $scope.studentUserName = $scope.studentProfileData[keyTermForStudentUserName];
    var vm = this;
    vm.employerOrganization = userServices.getOrganization();

    $http.post("php/employerStudentProfileView.php",{

        'studentUserName': $scope.studentUserName

    }).then(function(result){

        vm.studentId = result.data.studentId;
        vm.studentFirstName = result.data.studentFirstName;
        vm.studentLastName = result.data.studentLastName;
        vm.aboutMe = result.data.aboutMe;
        vm.skills = result.data.skills;
        vm.major = result.data.major;
        vm.dateOfBirth = result.data.dateOfBirth

    });

    $scope.notifyStudent = function(){

        $http.post("php/jobInformationGet.php",{

            'jobId' : $scope.jobId

        }).then(function(result){
            vm.jobName = result.data.jobName;
            console.log(vm.jobName);
            $http.post("php/notifyStudent.php",{
                'studentUserName' : $scope.studentUserName,
                'jobId' : $scope.jobId,
                'jobName' : vm.jobName,
                'employerOrganization' : vm.employerOrganization

            }).then(function(){

                $window.location = "#!/notifications";

            });
        });



    };

});