angular.module('rtfmApp').controller('threadCtrl', function($scope, $stateParams, threadService){

$scope.message = 'hello from THREAD controller';

 var currentThreadId = $stateParams.threadId;


$scope.createNewComment = function(comment){
  threadService.addComment(comment, currentThreadId);
};


$scope.comments = threadService.getComments(currentThreadId);




});
