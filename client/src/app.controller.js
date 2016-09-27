(function() {
  'use strict';

  angular
    .module('app')
    .controller('PeopleController', PeopleController)

  function PeopleController(PeopleAPI) {
    var vm = this;
    vm.peoples = [];
    vm.isFetching = false

    vm.getPeoples = getPeoples;

    function activate() {
    	getPeoples();
    }

    activate();

    function getPeoples() {
      vm.isFetching = true;
    	return PeopleAPI.getPeoples(vm.query, vm.currentPage).then(function(data) {
        vm.isFetching = false;
    		vm.peoples = data.hits;
        vm.total = data.total;
        vm.currentPage = data.currentPage;
    	})
    }
  }

})();
