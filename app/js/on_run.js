function OnRun($rootScope, AppSettings) {
  'ngInject';

  $rootScope.setTitle = function(appendix) {
    $rootScope.pageTitle = '';
    if ( appendix ) {
      $rootScope.pageTitle += appendix;
      $rootScope.pageTitle += ' \u2014 ';
    }
    $rootScope.pageTitle += AppSettings.appTitle;
  };

  $rootScope.setTitle();
}

export default OnRun;
