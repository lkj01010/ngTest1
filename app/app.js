'use strict';

// Declare app level module which depends on src, and components
angular.module('myApp', [
    'ui.router',
    'myApp.login',
    'myApp.main',
    'myApp.view2',
    'myApp.version'
])
.run(
    [   '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;


        }
    ]
)
.config(
    ['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                .when('', '/')
                //.when('/user/:id', '/contacts/:id')
                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');

            $stateProvider
                .state("defualt", {
                    url: "",
                    templateUrl: "src/login/login.html",
                    //template: "<div>helloworld</div>",
                    controller: "LoginCtrl"
                })
                .state("home", {
                    url: "/",
                    templateUrl: "src/login/login.html",
                    controller: "LoginCtrl"
                })
                .state("login", {
                    url: "/login",
                    templateUrl: "src/login/login.html",
                    controller: "LoginCtrl"
                })
                .state("main", {
                    url: "/main",
                    templateUrl: "src/main/main.html",
                    abstract: true,
                    controller: "MainCtrl"
                })
        }
    ]
);
