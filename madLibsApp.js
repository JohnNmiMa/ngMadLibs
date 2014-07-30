angular.module('ngMadLibsApp', []).
controller('madLibsController', function($scope) {
    $scope.keywords = [
        {id: 0,
         type: 'Female Name',
         value: ''
        },
        {id: 1,
         type: 'Job Title',
         value: ''
        },
        {id: 2,
         type: 'Tedious Task',
         value: ''
        },
        {id: 3,
         type: 'Dirty Task',
         value: ''
        },
        {id: 4,
         type: 'Celebrity',
         value: ''
        },
        {id: 5,
         type: 'Useless Skill',
         value: ''
        },
        {id: 6,
         type: 'Adjective',
         value: ''
        },
        {id: 7,
         type: 'Obnoxiuous Celebrity',
         value: ''
        },
        {id: 8,
         type: 'Huge Number',
         value: ''
        }
    ];
});
