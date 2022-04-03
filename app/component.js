// components
app.component("headerComponent", {
    transclude: true,
    templateUrl: "app/component/includes/header.component.html",
    bindings: {

    },
    controller: function ($window, $scope, $location) {
        this.logout = function () {
            $window.sessionStorage.setItem("isAuth",false);
            $location.path("/home");
        };
    }
});

app.component("sidebarComponent", {
    templateUrl: "app/component/includes/sidebar.component.html",
    bindings: {

    },
    controller: function ($scope) {
        $scope.sidebarLinks = [
            {
                "title": "Dashboard",
                "link": "#!/dashboard",
                "icon": "bx bx-home-circle"
            },
            {
                "title": "Employees",
                "link": "#!/employees",
                "icon": "bx bx-user"
            },
            {
                "title": "Add Employee",
                "link": "#!/add_employee",
                "icon": "bx bx-user-plus"
            }
        ];
    }
});

app.component("footerComponent", {
    templateUrl: "app/component/includes/footer.component.html",
    bindings: {

    },
    controller: function () {
    }
});

app.component("customTable", {
    templateUrl: "app/component/table/table.component.html",
    bindings: {
        tablerows: '<',
        tablecols: '<',
        type: '@',
    },
    controller: function () {
        this.orderBy = function (ele) {
            this.orderByMe = ele;
        };
    }
});