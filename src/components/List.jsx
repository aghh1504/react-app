var React = require("react");
var ListItem= require("./ListItem.jsx");

var ingredients = [{'id':1, 'text':'ham'}, {'id':2, 'text':'chesse'}, {'id':3, 'text':'tomatoes'}];
var List = React.createClass({
  render: function(){
    var listItems = ingredients.map(function(x){ return <ListItem key={x.id} ingredient={x.text}/>;
  });
        return (<ul>{listItems}</ul>)
  }
});
module.exports = List;
