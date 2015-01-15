var View = require('./view.js');

var ListView = function(config){
  View.call(this,config);
  this.config = config || {};
  this.items = config.items || [];
  this.onItemClick = config.onItemClick || '';
}

ListView.prototype.setItems = function(items) {
  this.items = items;
  return this.items;
};

ListView.prototype.getItems = function() {
  return this.items;
};

ListView.prototype.setOnItemClick = function(e) {
  this.onItemClick = e;
};

ListView.prototype.getJSON = function() {
  var itemClickString;
  if (onItemClick) {
    itemClickString = onItemClick.toString();
  }
  return {
    items: this.items,
    onItemClick: itemClickString,
    type: 'listView'
  };
};

/*
  item: {
    title: 'Title',
    subtitle: 'subtitle',
    icon: 'path/to/icon'
  }
  */

module.exports = ListView;