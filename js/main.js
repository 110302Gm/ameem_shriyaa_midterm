document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = 'viewpoint';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
  angular.module('starter', ['ionic', 'ionic.contrib.ui.cards'])
  .directive('noScroll', function($document) {
  
    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {
  
        $document.on('touchmove', function(e) {
          e.preventDefault();
        });
      }
    }
  })
  
      
  
  .controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
    var cardTypes = [{ title: 'Swipe down to clear the card', image: 'https://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
      { title: 'Where is this?', image: 'https://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
      { title: 'What kind of grass is this?', image: 'https://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png' },
      { title: 'What beach is this?', image: 'https://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png' },
      { title: 'What kind of clouds are these?', image: 'https://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png' }];
  
    $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);
  
    $scope.cardSwiped = function(index) {
      $scope.addCard();
    };
  
    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };
  
    $scope.addCard = function() {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
    }
  })
  
  .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
    $scope.goAway = function() {
      var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
      card.swipe();
    };
  });