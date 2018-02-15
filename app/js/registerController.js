nAnerd.controller('registerController',function($scope,$window,$http) {
    $scope.registerStudents = function () {
        alert("Thanks for Registering with Need A Nerd !");
        $http.post("php/registerStudents.php",
            {
                'firstName': $scope.firstName,
                'lastName': $scope.lastName,
                'Email': $scope.Email,
                'username': $scope.username,
                'password': $scope.password,
                'department': $scope.department
            }
        )
            .then(function () {
                $window.location="#/login";
            });

    };
    $scope.registerEmployees = function() {
        alert("Thanks for Registering with Need A Nerd !");
        $http.post("php/registerEmployee.php",
            {
                'firstName': $scope.firstName,
                'lastName': $scope.lastName,
                'Email': $scope.Email,
                'Organization': $scope.Organization,
                'username': $scope.username,
                'password': $scope.password
            }
        )
            .then(function () {
                $window.location="#/login";
            });

    };
    $scope.registerOffCampusEmployees = function() {
        alert("Thanks for Registering ! Admin Approval Request has been sent!");
        $http.post("php/offCampus/registerOffCampusEmployer.php",
            {
                'firstName': $scope.firstName,
                'lastName': $scope.lastName,
                'Email': $scope.Email,
                'Organization': $scope.Organization,
                'username': $scope.username,
                'password': $scope.password
            }
        )
            .then(function () {
                $window.location="#/login";
            });

    }



    }



);


