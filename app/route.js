//Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './app/pages/login.html',
            controller: 'loginController'
        }).otherwise({
            redirectTo: '/home'
        });
});

