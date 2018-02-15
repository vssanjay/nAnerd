nAnerd.controller("studentEmployerProfileView",function($scope,$http,userServices,$window){

    $scope.employerProfileData = userServices.getRowData();

    var keyTermForJobId = (Object.keys($scope.employerProfileData)[0]);
    var keyTermForJobName = (Object.keys($scope.employerProfileData)[1]);
    var keyTermForEmployerOrganization= (Object.keys($scope.employerProfileData)[2]);
    $scope.jobId = $scope.employerProfileData[keyTermForJobId];
    $scope.employerName = $scope.employerProfileData[keyTermForJobName];
    $scope.employerOrganization = $scope.employerProfileData[keyTermForEmployerOrganization];
    var vm = this;


    $http.post("php/employerSelect.php",{

        'jobId': $scope.jobId,
        'employerOrganization': $scope.employerOrganization

    }).then(function(result){

        vm.employerUserName=result.data.employerUserName;
        $http.post("php/studentEmployerProfileView.php",{

            'employerUserName' : vm.employerUserName

        }).then(function(result){

            vm.employerFirstName=result.data.employerFirstName;
            vm.employerLastName = result.data.employerLastName;
            vm.aboutMe = result.data.aboutMe;
            vm.position = result.data.position;
            vm.department = result.data.department;
            vm.phoneNumber = result.data.phoneNumber;



        });



    });







});