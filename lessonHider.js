angular.module('directivePractice')
.directive('lessonHider', function() {

  return {
    templateUrl: 'lessonHider.html',
    restrict: 'E',
    controller: function(),
    scope: {
        lesson: '='

    },


    link: function( scope, element, attributes ) {

    }
  }

});
