nAnerd.controller('dashboardStudentController',function($scope,userServices,$window){

    var vm=this;
    vm.firstName= userServices.getFirstName();
    vm.lastName = userServices.getLastName();
    vm.userName = userServices.getUserName();



});
