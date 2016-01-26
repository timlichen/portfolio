portfolio_app.config(function ($routeProvider) {
  $routeProvider
    .when('/about',{
        templateUrl: 'partials/about.html'
    })
    .when('/projects',{
        templateUrl: 'partials/projects.html'
    })
    .when('/hearthstone',{
        templateUrl: 'partials/hearthstone.html'
    })
    .when('/prodDash',{
        templateUrl: 'partials/prodDash.html'
    })
    .when('/miniGames',{
        templateUrl: 'partials/miniGames.html'
    })
    .when('/nameAPI',{
        templateUrl: 'partials/nameAPI.html'
    })
    .otherwise({
      redirectTo: '/projects'
    });
});