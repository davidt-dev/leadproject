var app = angular.module("quoteApp",[]);

app.controller('MainController',['$scope', function($scope){
   $scope.quotes = [
  {quote: "a",
   author: "a"
  },
  {quote: "b",
   author:"b"
  },
  {quote: "c",
   author:"c"
 }
];
  $scope.quotestwo = [
  {quotetwo: "david",
   authortwo:"david"
  },
  {quotetwo: "peter",
   authortwo:"peter"
  },
  {quotetwo: "john",
  authortwo: "john"
  },
  {quotetwo: "alan",
  authortwo: "alan"
  }
];
   $scope.content = $scope.quotes[0].quote;
   $scope.contenttwo = $scope.quotestwo[0].quotetwo;
   $scope.author = $scope.quotes[1].author;
   $scope.authortwo = $scope.quotestwo[1].authortwo;
   $scope.randomQuote = function(){
      var i = Math.round(Math.random() * 10) % $scope.quotes.length;
      $scope.content = $scope.quotes[i].quote;
      $scope.contenttwo = $scope.quotestwo[i].quotetwo;
      $scope.author = $scope.quotes[i].author;
      $scope.authortwo = $scope.quotestwo[i].authortwo;
   }
}]);
