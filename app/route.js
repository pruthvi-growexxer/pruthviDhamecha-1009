//Routing
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: './app/pages/login.html',
            controller: 'loginController'
        }).when('/dashboard', {
            templateUrl: './app/pages/dashboard.html',
            controller: 'employeeController'
        }).when('/employees', {
            templateUrl: './app/pages/employees.html',
            controller: 'employeeController'
        }).when('/add_employee', {
            templateUrl: './app/pages/add_employee.html',
            controller: 'employeeController'
        }).otherwise({
            redirectTo: '/home'
        });
});

