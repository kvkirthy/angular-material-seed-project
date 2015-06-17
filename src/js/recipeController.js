module.exports = function ($scope, $mdBottomSheet){
    $scope.recipeList = [{
        title: 'Burger',
        description:'Delicious Burger King burger with veg pattie',
        image: 'images/burger.png'
    },{
        title: 'Pizza',
        description:'Delicious Domino\'s Pizza with 8 options of toppings',
        image: 'images/pizza.png'
    },{
        title: 'Burrito',
        description:'Mixicans arrived',
        image: 'images/burrito.png'
    },{
        title: 'Ice Cream',
        description:'Taste buds can\'t resist.',
        image: 'images/icecream.png'
    },{
        title: 'Salad',
        description:'Health is wealth',
        image: 'images/salad.gif'
    },{
        title: 'More',
        description:'Checkout more menu options',
        image: 'images/more.png'
    }];

    $scope.openBottomSheet = function() {
        $mdBottomSheet.show({
            templateUrl: 'src/templates/bottomSheet.html'
        });
    };
};