nAnerd.controller('dashboardEmployerController',function($scope, userServices,$window){

    var vm=this;
    vm.firstName= userServices.getFirstName();
    vm.lastName = userServices.getLastName();
    vm.userName = userServices.getUserName();
    vm.Organization = userServices.getOrganization();




});
