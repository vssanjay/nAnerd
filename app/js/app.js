var nAnerd = angular.module("nAnerd",['ngRoute'])
nAnerd.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'Home',
                templateUrl: 'login.html'
            })
            .when('/signupStudent', {
                title: 'Signup Students',
                templateUrl: 'signupStudent.html',
                controllerAs:'registerController'
            })
            .when('/signupEmployers', {
                title: 'Signup Employers',
                templateUrl: 'signupEmployers.html'
            })
            .when('/login', {
                title: 'Login',
                templateUrl: 'login.html'
            })

            .when('/dashboardStudents',{
                resolve: {
                        "check" : function($location,$rootScope){
                            if(!$rootScope.loggedIn){
                                $location.path('/');

                            }
                        }
                },
                title: 'User Dashboard',
                templateUrl:'dashboardStudents.html'

            })
            .when('/dashboardEmployer',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'User Dashboard',
                templateUrl:'dashboardEmployers.html'
            })
            .when('/addJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Add Jobs',
                templateUrl:'addJobs.html'
            })
            .when('/listAllJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'All Jobs',
                templateUrl:'listAllJobs.html'
            })
            .when('/modifyJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Modify Jobs',
                templateUrl:'modifyJobs.html'
            })
            .when('/editJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'Edit Job ',
                templateUrl:'editJobs.html'
            })
            .when('/studentLogin',{
                title:'Student Login',
                templateUrl:'studentLogin.html'
            })
            .when('/onCampusLogin',{
                title:'OnCampus Login',
                templateUrl:'onCampusLogin.html'
            })
            .when('/offCampusLogin',{
                title:'OffCampus Login',
                templateUrl:'offCampusLogin.html'
            })
            .when('/signupOffCampusEmployers',{
                title:'OffCampus Register',
                templateUrl:'signupOffCampusEmployers.html'
            })
            .when('/offCampusProfileAccept',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'OffCampus Approval',
                templateUrl:'adminOffCampusProfileView.html'
            })
            .when('/adminLogin',{
                title:'adminLogin',
                templateUrl:'adminLogin.html'
            })
            .when('/approvalOffCampus',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'Approval Off Campus',
                templateUrl:'adminOffCampusList.html'
            })
            .when('/adminViewAllStudents',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'View All Students',
                templateUrl:'adminViewAllStudents.html'
            })
            .when('/adminViewAllEmployers',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'View All Employers',
                templateUrl:'adminViewAllEmployers.html'
            })
            .when('/adminViewAllJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'View All Jobs',
                templateUrl:'adminViewAllJobs.html'
            })


            .when('/adminChangePrompt',{
            title:'Change Password',
            templateUrl:'adminChangePrompt.html'
            })
            .when('/adminDashboard',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'Change Password',
                templateUrl:'adminDashboard.html'
            })

            .when('/employerProfile',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Employer Profile',
                templateUrl: 'employerProfile.html'
            })
            .when('/applyJobs',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
            title:'Apply Job ',
            templateUrl:'applyJobs.html'
            })
            .when('/studentProfile',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'Profile',
                templateUrl:'studentProfile.html'
            })
            .when('/notifications',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title:'Notifications and Updates',
                templateUrl:'notifications.html'
            })
            .when('/editStudentProfile',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Edit Student Profile',
                templateUrl: 'editStudentProfile.html'
            })
            .when('/employerStudentProfileView',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Employer Student View',
                templateUrl: 'employerStudentProfileView.html'

            })
            .when('/notificationStudent',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Notifications',
                templateUrl: 'notificationStudent.html'
            })
            .when('/viewAllStudents',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'View All Students',
                templateUrl: 'viewAllStudents.html'
            })
            .when('/editEmployerProfile',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'Edit Student Profile',
                templateUrl: 'editEmployerProfile.html'
            })
            .when('/studentEmployerProfileView',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
                title: 'View Employer Profile',
                templateUrl: 'studentEmployerProfileView.html'
            })
            .when('/applySpecificJob',{
                resolve: {
                    "check" : function($location,$rootScope){
                        if(!$rootScope.loggedIn){
                            $location.path('/');

                        }
                    }
                },
            title:'Job Details',
            templateUrl:'applySpecificJob.html'
            });


    }]);

nAnerd.service('userServices',function(){

    this.setFirstName=function(firstName){
        this.firstName = firstName;
    };

    this.getFirstName=function(){
        return this.firstName;
    };

    this.setLastName=function(lastName){
        this.lastName = lastName;
    };

    this.getLastName=function(){
        return this.lastName;
    };

    this.setUserName=function(userName){
        this.userName = userName;
    };

    this.getUserName=function(){
        return this.userName;
    };

    this.setOrganization=function(organization){
        this.organization = organization;
    };

    this.getOrganization=function(){
        return this.organization;
    };

    this.setRowData = function(rowData){
        this.rowData = rowData;
    };

    this.getRowData = function(){
        return  this.rowData;
    };
    this.setStudentId = function(studentId){
        this.studentIdNumber = studentId;
    };
    this.getStudentId= function(){
        return this.studentIdNumber;
    };
    this.setEmployerId = function(employerId){
        this.employerIdNumber = employerId;
    };
    this.getEmployerId= function(){
        return this.employerIdNumber;
    };
    this.setUserAuthentication = function(user){
        this.userAuthentication = user;
    };
    this.getUserAuthentication = function(){
        return this.userAuthentication
    };

});


