angular.module('madLibsApp', []).
controller('madLibsController', function($scope) {
    $scope.keywords = [
        {type: 'female name',
        value: ''
        },
        {type: 'job title',
        value: ''
        },
        {type: 'tedious task',
        value: ''
        },
        {type: 'dirty task',
        value: ''
        },
        {type: 'celebrity',
        value: ''
        },
        {type: 'useless skill',
        value: ''
        },
        {type: 'adjective',
        value: ''
        },
        {type: 'obnoxiuous celebrity',
        value: ''
        },
        {type: 'huge number',
        value: ''
        }
    ];
});
