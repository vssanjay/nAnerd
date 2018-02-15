nAnerd.controller('employerProfileController',function($scope, userServices,$window,$http){

    var vm=this;
    vm.firstName= userServices.getFirstName();
    vm.lastName = userServices.getLastName();
    vm.userName = userServices.getUserName();
    vm.Organization = userServices.getOrganization();
    vm.employerId = userServices.getEmployerId();

    $http.post("php/employerProfileGet.php",{

        'employerId': vm.employerId

    }).then(function(result){

        if (result.data.employerId===undefined){

            $scope.updateMessage = " UPDATE NECESSARY . "

        }
        else{

            vm.aboutMe = result.data.aboutMe;
            vm.position = result.data.position;
            vm.department = result.data.department;
            vm.phoneNumber = result.data.phoneNumber;

        }

    });



    $scope.editProfile = function(){

        $window.location="#!/editEmployerProfile";
    };


});
