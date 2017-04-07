angular.module("App").controller('aboutCtrl', function($scope, homeService, $stateParams) {

  console.log("this is the state", $stateParams.id)


    var getBookDetails = function() {
      homeService.bookSearch().then(function(resp) {
        console.log("does this work", resp);
        for(var i = 0; i < resp.length; i++) {
          if(resp[i].id === $stateParams.id) {
            console.log(resp[i].id);
            console.log($stateParams.id);
            $scope.detail === resp[i];
            console.log($scope.detail);

          }
        }


      });
    }
    getBookDetails();

});
