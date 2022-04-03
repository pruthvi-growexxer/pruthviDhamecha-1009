//controllers
app.controller("loginController", function ($scope, $location, $window) {
    $scope.isAlert = true;

    if ($window.sessionStorage.getItem("isAuth") === "true") {
        $location.path("/dashboard");
    }
    
    $scope.login = function () {
        if ($scope.username == "admin" && $scope.password == "admin") {
            $window.sessionStorage.setItem("isAuth", true);
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