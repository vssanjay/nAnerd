nAnerd.controller('notificationsController',function($scope,userServices,$window,$http){

    var employerName = userServices.getUserName();
    $http.post("php/notifyNewApplications.php",{

        'employerName': employerName

    }).then(function (result) {
        $scope.newApplicationList = result.data;

        $http.post("php/notifyApplications.php",{

            'employerName': employerName

        }).then(function (result) {
            $scope.applicationList = result.data;
        });

    });


    $scope.profileView = function(v){
        $scope.rowData= v;
        userServices.setRowData($scope.rowData);
        $window.location="#!/employerStudentProfileView";
    };


});
