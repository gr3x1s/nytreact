import axios from "axios";

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var helpers = {
  runQuery: function(searchTerm, startYear, endYear) {
    var queryURL = queryURLBase + searchTerm;

    return axios.get(queryURL);
  }

}

module.exports = helper;
