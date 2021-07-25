var app = angular.module("ProfileCtrl", []);

app.controller('ProfileController', function($scope, TranslationsService) {
    $scope.getTitle = () => TranslationsService.getTranslation('profile');
});