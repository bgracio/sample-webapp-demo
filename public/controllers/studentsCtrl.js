var app = angular.module("StudentsCtrl", []);

const total = 4;

app.controller('StudentsController', function($scope, $http, TranslationsService) {
   $http.get('/api/students').then((response) => {
		$scope.students = response.data;
      $scope.total = total;
      $scope.begin = 0;
	});

   $scope.getTitle = () => TranslationsService.getTranslation('students');

   $scope.deleteBtn = (studentId) => {
      $http.delete('/api/student/' + studentId).then((response) => {
         $scope.students = $scope.students.filter((value) => value._id != response.data._id);
      });
   }

   $scope.prev = () => {
      if($scope.begin > 0) {
         $scope.begin = $scope.begin - total
      }
   }

   $scope.next = () => {
      if($scope.begin + total < $scope.students.length) {
         $scope.begin = $scope.begin + total
      }
   }
});

