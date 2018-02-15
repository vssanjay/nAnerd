nAnerd.controller("notifyStudentController", function($scope,$http,userServices,$window){

var vm = this;
vm.studentUserName = userServices.getUserName();
console.log(vm.studentUserName);

$http.post("php/notifyInterested.php",{

    'studentUserName' : vm.studentUserName

}).then(function(result){
    vm.interestedJobs = result.data;


});

$scope.employerDetails = function(v){

    $scope.rowData= v;
    userServices.setRowData($scope.rowData);
    $window.location="#!/studentEmployerProfileView";



};

});