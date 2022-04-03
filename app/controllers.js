//controllers
app.controller("loginController", function ($scope, $location, $window) {
    $scope.isAlert = true;

    if ($window.sessionStorage.getItem("isAuth") === "true") {
        $location.path("/dashboard");
    }
    
    $scope.login = function () {
        if ($scope.username == "admin" && $scope.password == "admin") {
            $window.sessionStorage.setItem("isAuth", true);
            // $scope.isAuth = true;
            // setTimeout(() => {
            //     $scope.isAlert = false;
            // }, 3000);
            $location.path("dashboard");
        } else {
            setTimeout(() => {
                $scope.isAlert = true;
                console.log($scope.isAlert);
            }, 2000);
            $scope.isAlert = false;
        }
    }
});

app.controller("employeeController", function ($scope, $location, $window, employeeServices) {
    if ($window.sessionStorage.getItem("isAuth") === "false") {
        $location.path("/home");
    }
    $scope.emptablecols = [
        {
            name: "",
            value: "image",
        },
        {
            name: "First Name",
            value: "firstName",
        },
        {
            name: "Last Name",
            value: "lastName",
        },
        {
            name: "Email",
            value: "email",
        },
        {
            name: "Date Of Birth",
            value: "dob",
        },
        {
            name: "Salary",
            value: "salary",
        },
    ];

    $scope.schema = {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string",
                "title": "First Name",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid First Name!"
            },
            "lastName": {
                "type": "string",
                "maxLength": "32",
                "pattern": "^[A-Za-z]+$",
                "validationMessage": "Enter Valid Last Name!"
            },
            "email": {
                "type": "string",
                "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
                "validationMessage": "Enter Valid Email!"
            },
            "dob": {
                "type": "object",
                "title": "Birthdate",
                "validationMessage": "Select Birthdate!"
            },
            "salary": {
                "type": "string",
                "pattern": "^[0-9]{1,8}$",
                "validationMessage": "Don't enter negative value!"
            },
        },
        "required": [
            "firstName",
            "lastName",
            "email",
            "dob",
            "salary"
        ]
    };
    $scope.form = [
        {
            "key": "firstName",
            "fieldHtmlClass": "form-control",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Pruthvi",
            "type": "text",
        },
        {
            "key": "lastName",
            "placeholder": "Enter Last Name",
            "fieldHtmlClass": "form-control",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Dhamecha",
            "type": "text",
        },
        {
            "key": "email",
            "fieldHtmlClass": "form-control",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "pruthvi.dhamecha@gmail.com",
            "type": "email",
        },
        {
            "key": "dob",
            "fieldHtmlClass": "form-control",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "Select Date",
            "type": "date",
        },
        {
            "key": "salary",
            "fieldHtmlClass": "form-control",
            "labelHtmlClass": "form-label pt-3",
            "placeholder": "50000",
            "type": "text",
        },

        {
            type: "submit",
            title: "Save",
            "fieldHtmlClass": "btn btn-primary mt-3",
        }
    ];

    $scope.model = {};

    $scope.callbackfunction = function () {
        $scope.employees = employeeServices.employees;
    };
    if ($scope.employees == undefined) {
        employeeServices.getEmployees($scope.callbackfunction);
    }


    $scope.onSubmit = function () {
        $scope.$broadcast('schemaFormValidate');
        employeeServices.addEmployee($scope.callbackfunction, $scope.model);
        $location.path("employees");
    }
});