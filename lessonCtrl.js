angular.module('directivePractice')
.controller('lessonCtrl', function($scope, lessonService){
    // $scope.test = "can you hear me now???";
    $scope.lessons = lessonService.lessons;
    $scope.test = "two way binding";

})
