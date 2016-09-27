(function() {
  'use strict';

  angular
    .module('app')
    .factory('PeopleAPI', PeopleAPI);

  function PeopleAPI($http) {
    var url = '/peoples';

    var service = {
        getPeoples: getPeoples
    };

    return service;

    function getPeoples(query, page) {
    	return $http.get(url, {params: {'q': query, 'page': page}}).then(function(res) {
    		return res.data;
    	})
    }
  }
})();
