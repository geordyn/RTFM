angular.module('rtfmApp').controller('threadsCtrl', function($scope, threadService, $firebaseArray){

$scope.message = 'hello from THREADS controller';

$scope.threads = threadService.getThreads();

$scope.createNewThread = function(newThread){
  threadService.addThread(newThread);
};

});
