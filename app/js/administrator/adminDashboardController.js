nAnerd.controller("adminDashboardController",function($scope,$http,$window,userServices){

$scope.adminViewAllStudents = function(){

    $scope.headers=[];

    $http({
        method: 'GET',
        url: 'php/viewAllStudents.php'
    }).then(function (result) {
        $scope.studentList = result.data;

        $scope.keyForStudentList = Object.keys($scope.studentList);

        $scope.variable = $scope.studentList[$scope.keyForStudentList]; //creation of temporary variables to get the keys for sorting.

        $scope.variable2 = Object.keys($scope.variable);

        $scope.variable3 = $scope.variable[$scope.variable2[0]];

        $scope.headers = Object.keys($scope.variable3);


    });


};
S
});