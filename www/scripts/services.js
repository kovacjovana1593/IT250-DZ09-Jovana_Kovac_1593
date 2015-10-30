angular.module('starter')

.factory('AppZanatlijaFactory', function($http, $localStorage) {
  //SETTINGS
  var url = 'js/data.json';
  var ZanatlijaFactory = {};
  //END - SETTINGS

  /*ZanatlijaFactory.getObject = function() {
      return $http.get(url, {
         headers: {}
         })
      .then(function(response) {
          return response.data;
      });
  };*/
  ZanatlijaFactory.getObject = function(className) {
    return $http.get('https://api.parse.com/1/classes/' + className + '/', {
      headers: {
        'X-Parse-Application-Id':'a4AoXutQ2mf95haI5DU3dJKTYZKX7YXxtzQOsXAS',
        'X-Parse-REST-API-Key':'RIMyGtbhV4qkw1q9oG3GboQYMUMOspXQIk2QFtLh'}
      })
      .then(function(response) {
        return response.data;
      });
  };
  /*
  ZanatlijaFactory.getNumOfAds = function(className, id) {
    var whereQuery = 'where=' + '{"' + 'podkategorijaID' + id +'}';
    return $http.get('https://api.parse.com/1/classes/' + className + '?' + whereQuery, {
      headers: {
        'X-Parse-Application-Id':'a4AoXutQ2mf95haI5DU3dJKTYZKX7YXxtzQOsXAS',
        'X-Parse-REST-API-Key':'RIMyGtbhV4qkw1q9oG3GboQYMUMOspXQIk2QFtLh'}
      })
      .then(function(response) {
        return response.data;
      });
  };
  */
  return ZanatlijaFactory;
})
