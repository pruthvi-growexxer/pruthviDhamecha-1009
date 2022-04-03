//services
app.service('employeeServices', function ($http) {
    this.employees = [];
    this.getEmployees = function (cb) {
        if (this.employees.length == 0) {
            $http.get("app/data.json").then(function (response) {
                this.employees = response.data;
                cb();
            }.bind(this));
        } else {
            cb();
        }
    };
    this.addEmployee = function (cb, user) {
        this.employees.push(user);
        cb();
    }
});