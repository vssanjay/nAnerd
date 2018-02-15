nAnerd.controller('editEmployerProfile',function($scope,$http,userServices,$window){

    var vm=this;
    vm.employerUserName =userServices.getUserName();
    vm.employerId = userServices.getEmployerId();
    vm.employerFirstName = userServices.getFirstName();
    vm.employerLastName = userServices.getLastName();
    $scope.saveProfile = function(){
        $http.post("php/employerProfilePost.php",
            {
                'employerId': vm.employerId,
                'employerFirstName' : vm.employerFirstName,
                'employerLastName': vm.employerLastName,
                'aboutMe': $scope.aboutMe,
                'position': $scope.position,
                'department': $scope.department,
                'phoneNumber': $scope.phoneNumber,
                'employerUserName': vm.employerUserName
            }
        )
            .then(function () {
                $window.location="#!/employerProfile"
            });



    };


});