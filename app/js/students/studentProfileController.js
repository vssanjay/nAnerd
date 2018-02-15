nAnerd.controller('studentProfileController',function($scope,userServices,$window,$http){

    var vm=this;
    vm.firstName= userServices.getFirstName();
    vm.lastName = userServices.getLastName();
    vm.studentId = userServices.getStudentId();

    $http.post("php/studentProfileGet.php",{

        'studentId': vm.studentId

    }).then(function(result){

        if (result.data.studentId===undefined){

            $scope.updateMessage = " UPDATE NECESSARY . "

        }
        else{

            vm.aboutMe = result.data.aboutMe;
            vm.skills = result.data.skills;
            vm.major = result.data.major;
            vm.dateOfBirth = result.data.dateOfBirth;

        }

    });



    $scope.editProfile = function(){

        $window.location="#!/editStudentProfile";
    };


});