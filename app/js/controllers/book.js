/* Container Functions for all Slides */

function BookCtrl($scope, api, AppSettings, $state, $stateParams) {
  "ngInject";
  const vm = this;
  vm.data = {};
  api.get('books/' + $stateParams.id).then(function(data){
    vm.Book = data.Books[0];
    console.log(vm.Book);
    $scope.$digest();
  })
}

export default {
  name: 'BookCtrl',
  fn: BookCtrl
};
