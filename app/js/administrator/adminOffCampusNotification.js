nAnerd.controller("adminOffCampusNotification",function($scope,$http,userServices,$window){

    $http({
        method: 'GET',
        url: 'php/admin/needAdminApproval.php'
    }).then(function (result) {
        $scope.needApprovalList = result.data;

    });

    $http({
        method: 'GET',
        url: 'php/admin/allOffCampusList.php'
    }).then(function (result) {

        $scope.allList = result.data;

    });

    $scope.profileView = function(v){
        $scope.rowData= v;
        userServices.setRowData($scope.rowData);
        $window.location="#!/offCampusProfileAccept";
    };






});