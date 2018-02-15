nAnerd.controller('loginControllerEmployer',function($scope,$window,$http,userServices,$rootScope){

    $scope.loginToDashboard = function() {
        $http.post("php/loginDashboardEmployee.php", {

            'username': $scope.username,
            'password': $scope.password


        })
            .then(function (result) {

                    if(result.data.username===undefined){
                        alert("Wrong Username or Password, Please try again!");
                        $window.location="#!/login";
                    }
                    else{
                        userServices.setFirstName(result.data.firstName);
                        userServices.setLastName(result.data.lastName);
                        userServices.setUserName(result.data.username);
                        userServices.setOrganization(result.data.Organization);
                        userServices.setEmployerId(result.data.id);
                        $rootScope.loggedIn = true;
                        $window.location="#!/dashboardEmployer";
                    }
                },
                function(error){
                    console.error(error);
                });

    }});


