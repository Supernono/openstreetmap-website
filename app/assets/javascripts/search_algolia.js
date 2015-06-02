
  $(document).ready(function() {
    var algolia = algoliasearch('6T5KV5WCMJ', '5427a3581f1844c982fe8474c1c42bb7');
    var index = algolia.initIndex('City');


   $('#user-search').typeahead({hint: false}, {
      source: index.ttAdapter({hitsPerPage: 5}),
      displayKey: 'cityName', // display the name of the city
      templates: {
        suggestion: function(hit) {
          // render the hit
          return '<div class="hit">' +
          '<img class="typeahead_photo" src="http://www.nttagic.com/Icons/SMALL/DARK/icon-s-generale-pinpoint-dark.png" />' +
            '<div class="name">' +
              hit._highlightResult.cityName.value + ' ' +
			 '<span class="typeahead_country">' + hit._highlightResult.country.value + ' ' + '</span>'
            '</div>' +
          '</div>';
        }
      }
    });
  });
