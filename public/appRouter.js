var app = angular.module("myApp", ["ngRoute", 'StudentsCtrl', 'StudentCtrl', 'ProfileCtrl', 'TranslationsSrv']);

app.controller('MenuController', function($scope, TranslationsService) {
  $scope.changeLocale = (locale) => TranslationsService.changeLocale(locale);
});

app.config(($routeProvider) => {
  $routeProvider
    .when("/students", {
      templateUrl: 'views/students.html',
      controller: 'StudentsController'
    })
    .when("/student/:student_id", {
      templateUrl: 'views/student.html',
      controller: 'StudentController'
    })
    .when("/profile", {
      templateUrl: 'views/profile.html',
      controller: 'ProfileController'
    })
    .otherwise({
			redirectTo: '/students'
		});
});