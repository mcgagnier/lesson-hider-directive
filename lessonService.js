angular.module('directivePractice').service('lessonService', function() {

    this.lessons = [
      {
        "weekday": "Monday",
        "lesson": "Routing"
      },
      {
        "weekday": "Tuesday",
        "lesson": "Directives"
      },
      {
        "weekday": "Wednesday",
        "lesson": "Review"
      },
      {
        "weekday": "Thursday",
        "lesson": "Firebase"
      },
      {
        "weekday": "Friday",
        "lesson": "No server project"
      }
    ];

})
