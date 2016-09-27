(function() {
  'use strict';

  angular
    .module('app')
    .filter('toAge', toAge);

  function toAge() {
    return function calculateAge(birthday) {
        var birthYear = new Date(birthday).getYear();
        var thisYear = new Date().getYear();
        return thisYear - birthYear;
    }
  }
})();
