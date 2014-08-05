angular.module('ngMadLibsApp', [])
.controller('madLibsController', function($scope) {
    $scope.gender = 'female';
    $scope.keywords = [
        {ph: $scope.gender == 'female' ? 'Female Name' : 'Male Name',
         type:'text',
         name:'gender_name',
         value: '' },
        {ph: 'Job Title',
         type:'text',
         name:'job_title',
         value: '' },
        {ph: 'Tedious Task',
         type:'text',
         name:'tedious_task',
         value: '' },
        {ph: 'Dirty Task',
         type:'text',
         name:'dirty_task',
         value: '' },
        {ph: 'Celebrity',
         type:'text',
         name:'celebrity',
         value: '' },
        {ph: 'Useless Skill',
         type:'text',
         name:'useless_skill',
         value: '' },
        {ph: 'Adjective',
         type:'text',
         name:'adjective',
         value: '' },
        {ph: 'Obnoxiuous Celebrity',
         type:'text',
         name:'obnoxiuous_celebrity',
         value: '' },
        {ph: 'Huge Number',
         type:'number',
         name:'huge_number',
         value: '' }
    ];

    $scope.toggleGender = function() {
        $scope.gender = ($scope.gender == 'female') ? 'male' : 'female';
        $scope.keywords[0].ph = ($scope.gender == 'female') ? 'Female Name' : 'Male Name';
    };

    $scope.showText = false;
    $scope.$on('showText', function(event, data) {
        $scope.showText = true;
    });
    $scope.showKeywordsView = function() {
        var keyword;
        for (keyword in $scope.keywords) {
            $scope.keywords[keyword]['value'] = '';
        }
        $scope.$broadcast('resetForm', true);
        $scope.showText = false;
        //$scope.submitted = false;
    }
})
.controller('FormCtrl', function($scope) {
    $scope.submitted = false;
    $scope.error = 'none';
    $scope.submit = function() {
        if($scope.keywordForm.$valid) {
            $scope.$emit('showText', true);
        } else {
            if ($scope.keywordForm.$error.required) {
                $scope.error = 'required';
                console.log('The Form is not completely filled in');
            } 
            if ($scope.keywordForm.$error.number) {
                $scope.error = 'number';
                console.log('The Form element "Huge Number" is not a number');
                $scope.keywords[8]['value'] = '';
            }
        }
        $scope.submitted = true;
    }
    $scope.$on('resetForm', function(event, data) {
        $scope.keywordForm.$setPristine();
        $scope.submitted = false;
    });
});
