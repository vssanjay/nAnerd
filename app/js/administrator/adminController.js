nAnerd.controller("adminController",function($scope,$http,$window,userServices,$rootScope){

    var vm=this;
    vm.userName = $scope.username;
    vm.pass = $scope.password;

    $scope.loginToDashboard = function() {
        $http.post("php/admin/adminLogin.php", {

            'username': $scope.username,
            'password': $scope.password



        }).then(function (result) {
                $scope.firstTime = result.data.firstTime;
                $scope.uname = result.data.adminUserName;
                if($scope.firstTime==="1"){

                    $http.post("php/admin/aft.php",{
                        'username' : $scope.uname

                    }).then(function(){
                        $window.location ="#!/adminChangePrompt";
                    });



                }
                else{

                    $http.post("php/admin/adminDashboard.php",{

                        'username':$scope.username,
                        'password':$scope.password

                    }).then(function(result){

                        $scope.adminUserName = result.data.adminUserName;
                        if($scope.adminUserName===undefined){
                            alert("Wrong Username or Password, Please try again!");
                            $window.location="#!/adminLogin";
                        }
                        else{
                            $rootScope.loggedIn = true;
                            $window.location="#!/adminDashboard";

                        }


                    })
                }},
            function(error){
                console.error(error);
            });



    }});


