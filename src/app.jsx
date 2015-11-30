var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  test: 'Choose Me A Dessert',
  items: [
    'Apple Pie',
    'Peach Cobler',
    'Coconut Cream Pie'
  ]

};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
