nAnerd.controller("adminOffCampusProfileView",function($scope,userServices,$http,$window){

    $scope.employerProfileData = userServices.getRowData();
    var keyTermForId = (Object.keys($scope.employerProfileData)[0]);
    var keyTermForFirstName = (Object.keys($scope.employerProfileData)[1]);
    var keyTermForLastName = (Object.keys($scope.employerProfileData)[2]);
    var keyTermForEmail = (Object.keys($scope.employerProfileData)[3]);
    var keyTermForOrganization = (Object.keys($scope.employerProfileData)[4]);
    var keyTermForUsername = (Object.keys($scope.employerProfileData)[5]);
    var keyTermForVerification = (Object.keys($scope.employerProfileData)[6]);
    $scope.employerID = $scope.employerProfileData[keyTermForId];
    $scope.employerFirstName = $scope.employerProfileData[keyTermForFirstName];
    $scope.employerLastName = $scope.employerProfileData[keyTermForLastName];
    $scope.employerEmail = $scope.employerProfileData[keyTermForEmail];
    $scope.employerOrganization = $scope.employerProfileData[keyTermForOrganization];
    $scope.employerUsername = $scope.employerProfileData[keyTermForUsername];
    $scope.employerVerification = $scope.employerProfileData[keyTermForVerification];

$scope.acceptOffCampusEmployer = function(){

    $http.post("php/admin/acceptOffCampus.php",{

        'id' :$scope.employerID
    }).then(function(){
    $http.post("php/admin/addOffCampusEmployer.php",{

        'id': $scope.employerID

    }).then(function(){
        $window.location = "#!/approvalOffCampus";
    });

});

}



});