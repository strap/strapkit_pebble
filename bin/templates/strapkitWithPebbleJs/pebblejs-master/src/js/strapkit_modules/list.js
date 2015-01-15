var View = require('./view.js');
var PebbleUI = require('../ui');

var ListView = function(config){
  View.call(this,config);
  this._config = config || {};
  this._onItemClick = config._onItemClick || '';
  if(config.sections){
    this._items = config.sections.items || [{}];
  }else if(config.items){
    this._items = config.items || [{}];
  }
  this._sections = config.sections || [{ items: this._items }];
  this._pebbleMenu = new PebbleUI.Menu({ sections: this._sections });  
  this.pebbleView = this._pebbleMenu;
};

ListView.prototype.show = function(){
  this._pebbleMenu.show();
};

ListView.prototype.hide = function(){
  this._pebbleMenu.hide();
};

ListView.prototype.setItems = function(items) {
  if(config.sections){
    this._items = config.sections.items || [{}];
  }else if(config.items){
    this._items = config.items || [{}];
  }
  this._sections = config.sections || [{ items: this._items }];
  this._pebbleMenu = new PebbleUI.Menu({ sections: this._sections });  
  return this._items;
};

ListView.prototype.getItems = function() {
  return this._items;
};

ListView.prototype.setOnItemClick = function(e) {
  this._onItemClick = e;
  this._pebbleMenu.on('select',e);
};

ListView.prototype.getJSON = function() {
  var itemClickString;
  if (_onItemClick) {
    itemClickString = _onItemClick.toString();
  }
  return {
    items: this.items,
    _onItemClick: itemClickString,
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