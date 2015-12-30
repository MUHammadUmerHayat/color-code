# color-code

This directive allows you to add colors to your various table data.

# Requirements

- [AngularJS](http://angularjs.org/)

- [Lodash](https://lodash.com/)

## Prerequisite

1. Install **Karma**, **Grunt** and **Bower**
  `$ npm install -g karma grunt-cli bower`
2. Install components
  `$ bower install`

## Installation

`$ bower install table-color-code`

If you use a `bower.json` file in your project, you can have Bower save table-color-code as a dependency by passing the `--save` or `--save-dev` flag with the above command.

This will copy the table-color-code files into your `bower_components` folder, along with its dependencies. Load the script files in your application:

<script type="text/javascript" src="bower_components/angular/angular.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js"></script>
<script type="text/javascript" src="bower_components/table-color-code/js/colorCode.js"></script>
```


```javascript
var myAppModule = angular.module('MyApp', ['tableColor']);
```

Apply the directive to your form elements:

```html
 <table>
    <thead>
      ...
    </thead>
    <tbody>
      <tr data-ng-repeat="data in $data">
        <td color-code column-name='title' value="{{data.title}}" table-data="$data"></td>
        </tr>
    </tbody>
</table>
```
