angular.module("tableColor", []).directive('colorCode', function() {
  return {
    restrict: 'A',
    scope: {
      tableData: '=',
      columnName: '@',
      value : '@'
    },
    link: function(scope, element, attrs) {
      var red, green, blue, rgb;
      var sorted = {};
      var maximumValue, minimumValue, averageValue, lessThanAverageValue, greaterThanAverageValue;
      sorted = _.sortBy(scope.tableData, function(data) {
        return data[scope.columnName];
      });
      maximumValue = sorted[sorted.length - 1][scope.columnName];
      minimumValue = sorted[0][scope.columnName];
      averageValue = ((maximumValue + minimumValue) * 0.5);
      range = maximumValue - minimumValue;
      if (range === 0) {
        red = 156;
        green = 40;
        blue = 0;
      } else {
        lessThanAverageValue = Math.ceil(255 -(255 *scope.value)/(maximumValue + minimumValue));
        greaterThanAverageValue = Math.ceil((156 * scope.value)/(maximumValue + minimumValue) );  
        
        if(scope.value < averageValue){
          red = lessThanAverageValue;
          green = 15;
          blue = 0;
        }
        else if (scope.value === averageValue){
          red = 156;
          green = 40;
          blue = 0;
        }
        else {
           red = 15;
           green = greaterThanAverageValue;
           blue = 15;
        }
      }
      rgb = "rgb(" + red + "," + green + "," + blue + ")";
      element.css({color: rgb});
    }
  };
});

