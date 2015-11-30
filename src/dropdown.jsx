var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item')
// var List = require('./list');

module.exports = React.createClass({
  handleClick: function() {
    // console.log('this is state', this.state);
    this.setState({open: !this.state.open});
  },
  getInitialState: function() {
    console.log("this should be running");
    return { open: false }
  },
  testFunc: function() {
    console.log("this is test func");
  },
  handleItemClick: function(item) {
    console.log(item);
    this.setState({
      open: false,
      itemTitle: item
    });
  },
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem
                item={item}
                whenItemClicked={this.handleItemClick}
                className={this.state.itemTitle === item ? "active" : ""}
              />
    }.bind(this));

    return <div className="dropdown">
              <Button
                whenClicked={this.handleClick}
                className="btn-default"
                lukey={this.state.itemTitle || this.props.test}
                subTitleClassName="caret"
              />
            <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
              {list}
            </ul>
          </div>
  }
})
