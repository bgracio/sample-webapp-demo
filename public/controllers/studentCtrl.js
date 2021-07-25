var app = angular.module("StudentCtrl", []);

app.controller('StudentController', function($scope, $http, $routeParams, $window, TranslationsService) {
    $scope.getTitle = () => TranslationsService.getTranslation('student');

    $scope.saveStudent = () => {
        if($routeParams.student_id == 0) {
            $http.post('/api/student', JSON.stringify($scope.student)).then((response) => {
                $window.location.href = "#!students";
            });
        } else {
            $http.put('/api/student', JSON.stringify($scope.student)).then((response) => {
                $window.location.href = "#!students";
            });
        }
    }

    if($routeParams.student_id == "0"){
        $scope.student = {};
        return;
    }

    $http.get('/api/student/' + $routeParams.student_id).then((response) => {
		$scope.student = response.data;
	});
});

app.directive("selectNgFiles", function() {
    return {
      require: "ngModel",
      link: function postLink(scope,elem,attrs,ngModel) {
        elem.on("change", function(e) {
          var files = elem[0].files;
          ngModel.$setViewValue(files);
        })
      }
    }
});