var PebbleUI = require('../ui');
var View = require('./view.js');

var TextView = function(config){
	View.call(this,config);
	this._config = config || {};
	this._align = config.align || 'center';
	this._position = config.position || new Vector2(0, 50);
	this._size = config.size || new Vector2(144, 30);
	this._text = config.text || '';
	this._pebbleText = new UI.Text({
    	position: this._position,
    	size: this._size,
    	font: 'gothic-24-bold',
    	text: this._text,
    	textAlign: this._align
  	});
};


TextView.prototype.getJSON = function() {
	return {
		position: this._position,
		text: this._text,
		type: 'text'
	};
};

module.exports = TextView;