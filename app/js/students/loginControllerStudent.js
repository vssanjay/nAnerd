nAnerd.controller('loginControllerStudent',function($scope,$window,$http,userServices,$rootScope){

    $scope.loginToDashboard = function() {
        $http.post("php/loginDashboardStudent.php", {

                'username': $scope.username,
                'password': $scope.password



            }).then(function (result) {
                        if(result.data.username===undefined){
                            alert("Wrong Username or Password, Please try again!");
                            $window.location="#!/login";
                        }
                        else{
                            userServices.setFirstName(result.data.firstName);
                            userServices.setLastName(result.data.lastName);
                            userServices.setUserName(result.data.username);
                            userServices.setStudentId(result.data.id);
                            $rootScope.loggedIn = true;
                            $window.location="#!/dashboardStudents";
                        }

                    },
                    function(error){
                        console.error(error);
                    });



        }});