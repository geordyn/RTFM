angular.module('rtfmApp', ['firebase', 'ui.router'])

.constant('fb', {
  url: 'https://rtfm-geordyn.firebaseio.com/'
})

.config(function($stateProvider, $urlRouterProvider){

$stateProvider
  .state('threads', {
    url: '/threads',
    templateUrl: '/js/threads.html',
    controller: 'threadsCtrl',

  })
  .state('thread', {
    url: '/threads/:threadId',
    templateUrl: '/js/thread.html',
    controller: 'threadCtrl'

  });


  $urlRouterProvider.otherwise('/threads');



});
