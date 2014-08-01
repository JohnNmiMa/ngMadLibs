angular.module('ngMadLibsApp', [])
.controller('madLibsController', function($scope) {
    $scope.gender = 'female';
    $scope.keywords = [
        {type: $scope.gender == 'female' ? 'Female Name' : 'Male Name',
         value: '' },
        {type: 'Job Title',
         value: '' },
        {type: 'Tedious Task',
         value: '' },
        {type: 'Dirty Task',
         value: '' },
        {type: 'Celebrity',
         value: '' },
        {type: 'Useless Skill',
         value: '' },
        {type: 'Adjective',
         value: '' },
        {type: 'Obnoxiuous Celebrity',
         value: '' },
        {type: 'Huge Number',
         value: '' }
    ];

    $scope.toggleGender = function() {
        $scope.gender = ($scope.gender == 'female') ? 'male' : 'female';
        $scope.keywords[0].type = ($scope.gender == 'female') ? 'Female Name' : 'Male Name';
    };
});
