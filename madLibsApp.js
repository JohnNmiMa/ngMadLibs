angular.module('ngMadLibsApp', ['ngAnimate'])
.controller('madLibsController', function($scope) {
    $scope.shakeit = false;
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

    $scope.showKeywords = true;
    $scope.showText = false;
    $scope.$on('showText', function(event, data) {
        $scope.shakeit = !$scope.shakeit;
        $scope.showKeywords = false;
        setTimeout(function() {
            $scope.$apply(function () {
                $scope.showText = true;
            });
        }, 400);
    });
    $scope.showKeywordsView = function() {
        var keyword;
        for (keyword in $scope.keywords) {
            $scope.keywords[keyword]['value'] = '';
        }
        $scope.$broadcast('resetForm', true);
        $scope.showText = false;
        $scope.showKeywords = true;
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
        setTimeout(function() {
            $scope.$apply(function () {
                $scope.submitted = false;
                $scope.error = 'none';
            });
        }, 5000);
    }
    $scope.$on('resetForm', function(event, data) {
        $scope.keywordForm.$setPristine();
        $scope.submitted = false;
    });
})
.animation('.showError-animation', function() {
    return {
        enter : function(element, done) {
            element.css({"margin":"16px", "margin-left":"23px"});
            element.animate({"margin-left":"16px"}, 50, "linear", done)
            .animate({"margin-left":"23px"}, 50, "linear", done)
            .animate({"margin-left":"16px"}, 50, "linear", done)
            .animate({"margin-left":"23px"}, 50, "linear", done)
            .animate({"margin-left":"16px"}, 50, "linear", done);

            return function(cancelled) {
                if(cancelled) {
                    jQuery(element).stop();
                }
            }
        },

        leave : function(element, done) {
            element.css({"opacity":"1.0"});
            element.animate({"opacity":"0"}, 1000, "linear", done);

            return function(cancelled) {
                if(cancelled) {
                    jQuery(element).stop();
                }
            }
        }
    };
})
.animation('.navSmiley-shaker', function() {
    var doAnimation = function(element, className, done) {
            console.log("beforeAddClass navSmiley-animation" + element);
            var top = parseInt(jQuery(element).css('top'), 10),
                left = parseInt(jQuery(element).css('left'), 10);
            if(className == 'shakeit') {
                element.css({"left":(left-40)+"px", "top":(top-20)+"px"});
                element.animate({"left":(left+35)+"px", "top":(top+18)+"px"}, 60, "linear")
                .animate({"left":(left-30)+"px", "top":(top-15)+"px"}, 50, "linear")
                .animate({"left":(left+25)+"px", "top":(top+12)+"px"}, 40, "linear")
                .animate({"left":(left-20)+"px", "top":(top-10)+"px"}, 35, "linear")
                .animate({"left":(left+15)+"px", "top":(top+8)+"px"}, 30, "linear")
                .animate({"left":(left-10)+"px", "top":(top-4)+"px"}, 30, "linear")
                .animate({"left":(left+5)+"px", "top":(top+2)+"px"}, 30, "linear")
                .animate({"left":left+"px", "top":top+"px"}, 30, "linear", done);
            } else {
                done();
            }
    };

    return {
        beforeAddClass : doAnimation,
        beforeRemoveClass : doAnimation
    }
})
.animation('.navLogo-shaker', function() {
    var doAnimation = function(element, className, done) {
            console.log("beforeAddClass navSmiley-animation" + element);
            var top = parseInt(jQuery(element).css('top'), 10),
                left = parseInt(jQuery(element).css('left'), 10);
            if(className == 'shakeit') {
                element.css({"left":(left-40)+"px", "top":(top+20)+"px"});
                element.animate({"left":(left+35)+"px", "top":(top-18)+"px"}, 60, "linear")
                .animate({"left":(left-30)+"px", "top":(top+15)+"px"}, 50, "linear")
                .animate({"left":(left+25)+"px", "top":(top-12)+"px"}, 40, "linear")
                .animate({"left":(left-20)+"px", "top":(top+10)+"px"}, 35, "linear")
                .animate({"left":(left+15)+"px", "top":(top-8)+"px"}, 30, "linear")
                .animate({"left":(left-10)+"px", "top":(top+4)+"px"}, 30, "linear")
                .animate({"left":(left+5)+"px", "top":(top-2)+"px"}, 30, "linear")
                .animate({"left":left+"px", "top":top+"px"}, 30, "linear", done);
            } else {
                done();
            }
    };

    return {
        beforeAddClass : doAnimation,
        beforeRemoveClass : doAnimation
    }
})
.animation('.madlibskeywords-shaker', function() {
    return {
        beforeAddClass : function(element, className, done) {
            var top = parseInt(element.css('top'), 10),
                left = parseInt(element.css('left'), 10);
            if(className == 'ng-hide') {
                element.css({"left":(left+40)+"px", "top":(top+20)+"px"});
                element.animate({"left":(left-35)+"px", "top":(top-18)+"px"}, 60, "linear")
                .animate({"left":(left+30)+"px", "top":(top+15)+"px"}, 50, "linear")
                .animate({"left":(left-25)+"px", "top":(top-12)+"px"}, 40, "linear")
                .animate({"left":(left+20)+"px", "top":(top+10)+"px"}, 35, "linear")
                .animate({"left":(left-15)+"px", "top":(top-8)+"px"}, 30, "linear")
                .animate({"left":(left+10)+"px", "top":(top+4)+"px"}, 30, "linear")
                .animate({"left":(left-5)+"px", "top":(top-2)+"px"}, 30, "linear")
                .animate({"left":left+"px", "top":top+"px"}, 30, "linear", done);
            } else {
                done();
            }
        }
    }
});

