nAnerd.controller("adminChangeController",function($scope,$http,$window){


    $scope.changePass = function(){
        $http.post("php/admin/acp.php",{
            'password' :$scope.password
        }).then(function(){
            $window.location = "#!/adminLogin";
        });

    };

});