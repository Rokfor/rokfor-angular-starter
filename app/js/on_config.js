function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $sceProvider) {
  'ngInject';
  
  $compileProvider.debugInfoEnabled(false);
  $locationProvider.html5Mode(global.html5Mode);
  
  global.html5Mode = $locationProvider.html5Mode().enabled === true;
  
  $sceProvider.enabled(false);
  
  $stateProvider
  .state('Slide', {
    url: '/',
    controller: 'BooksCtrl as data',
    templateUrl: 'slides/main.html',
    title: 'Slide'
  })
  .state('Book', {
    url: '/Book/:id',
    controller: 'BookCtrl as data',
    templateUrl: 'slides/book.html',
    title: 'Books'    
  });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
