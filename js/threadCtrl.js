angular.module('rtfmApp').controller('threadCtrl', function($scope, $stateParams, threadService){

$scope.message = 'hello from THREAD controller';

 var currentThreadId = $stateParams.threadId;

$scope.hideUserBox = !true;

$scope.createNewComment = function(comment){
  threadService.addComment(comment, currentThreadId);
  $scope.comment.text = null;
  $scope.hideUserBox = true;

};


$scope.comments = threadService.getComments(currentThreadId);




});
