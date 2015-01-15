var PebbleUI = require('../ui');
var View = require('./view.js');

var Card = function(config){
	View.call(this,config);
	this._config = config || {};
	this._title = config.title || '';
	this._body = config.body || '';
	this._onClick = config.onClick || '';
	this._pebbleCard = new PebbleUI.Card({
		title: this._title,
		body: this._body,
		scrollable: true
	});
	this.pebbleView = this._pebbleCard;
	this.isCard = true;
};

Card.prototype.show = function(){
	this._pebbleCard.show();
};

Card.prototype.hide = function(){
	this._pebbleCard.hide();
};

Card.prototype.setOnClick = function(evt) {
	this._onClick = evt;
	this._pebbleCard.on('click','select',evt);
};

Card.prototype.getJSON = function(){
	var clickString;
	if (this._onClick) {
		clickString = this._onClick.toString();
	}
	return {
		type: 'card',
		onClick: clickString,
		title: this._title,
		body: this._body
	};
};

module.exports = Card;