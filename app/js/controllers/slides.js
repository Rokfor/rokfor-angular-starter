/* Container Functions for all Slides */

function BooksCtrl($rootScope, $scope, api, AppSettings, $state, $stateParams, $sce) {
  "ngInject";
  const vm = this;
  vm.data = {};
  api.get('books').then(function(data){
    vm.Books = data.Books;
    console.log(vm.Books);
    $scope.$digest();
  })
}

export default {
  name: 'BooksCtrl',
  fn: BooksCtrl
};
