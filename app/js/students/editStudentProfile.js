nAnerd.controller('editStudentProfile',function($scope,$http,userServices,$window){

    var vm=this;
    vm.studentUserName =userServices.getUserName();
    vm.studentId = userServices.getStudentId();
    vm.studentFirstName = userServices.getFirstName();
    vm.studentLastName = userServices.getLastName();
    $scope.saveProfile = function(){
        $http.post("php/studentProfilePost.php",
            {
                'studentId': vm.studentId,
                'studentFirstName' : vm.studentFirstName,
                'studentLastName': vm.studentLastName,
                'aboutMe': $scope.aboutMe,
                'skills': $scope.skills,
                'major': $scope.major,
                'dateOfBirth': $scope.dateOfBirth,
                'studentUserName':vm.studentUserName

            }
        )
            .then(function () {
                $window.location="#!/studentProfile"
            });



};


});