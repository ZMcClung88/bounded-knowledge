angular.module("App").controller('homeCtrl', function($scope, homeService) {


    $scope.getRandom = function() {
      homeService.getRandom().then(function(resp) {
        $scope.qod = resp;
      })
    }
    // $scope.getRandom();

    $scope.bookSearch = function(item) {
      homeService.bookSearch(item).then(function(resp) {
        $scope.books = resp;
      })
    }

    $scope.getQuote = function() {
      $scope.quotes = homeService.getQuote();
    }

    $scope.getQuote();

    $scope.deleteQuote = function(textToRemove) {
      homeService.removeQuote(textToRemove);
    }

    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor
      }
      if(mainService.addQuote(newQuote)) {
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
      }
    }

});
