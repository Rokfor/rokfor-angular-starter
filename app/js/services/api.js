function api($http, AppSettings, $rootScope, $sce, $filter) {
  'ngInject';

  const service = {};
    
  var config = {
    headers: {
      'Authorization': 'Bearer ' + AppSettings.apiKey
    },
    params: {
      'status': AppSettings.domain.match(/localhost/g) !== null ? 'both' : 'published',
      'populate': 'true'
    }
  };

  service.get = function(apiPath) {
    return new Promise((resolve, reject) => {
      $http.get(AppSettings.apiEndpoint + '/' + apiPath, config).success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'api',
  fn: api
};
