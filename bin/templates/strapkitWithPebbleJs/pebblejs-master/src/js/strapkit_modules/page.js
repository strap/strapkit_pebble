var PebbleUI = require('../ui');

var Page = function(views){
	this._pageOpen = false;
	this._views = [];
	this._isCardOrList = false;
	this._PebbleWindow = new PebbleUI.Window();
	if (views){
		if(views.length) {
			this._views = views;
			for( var i in views ){
				this._PebbleWindow.add(views[i]);
			}
		} else if (typeof views === 'object') {
			this._views.push(views);
			if(views.show){
				this._isCardOrList = true;
				this._PebbleWindow = views.pebbleView;
			}
		}
	}
};

Page.prototype.addView= function(view) {
	if(view.show){
		this._isCardOrList = true;
		this._PebbleWindow = view.pebbleView;
	}else{
		this._PebbleWindow.add(view.pebbleView);
	}
	this._views.push(view);
};

Page.prototype.removeView= function(view) {
	if(this._isCardOrList){
		this._isCardOrList = false;
		this._PebbleWindow.hide();
	}else{
		if(view){
			this._PebbleWindow.remove(view.pebbleView);
		}
	}
	this._views.pop(view);
};

Page.prototype.getViews = function() {
	return this._views;
};

Page.prototype.show = function() {
	this._pageOpen = true;
	if(this._isCardOrList){
		this._views[0].show();
	}else{
		this._PebbleWindow.show();
	}
};

Page.prototype.hide = function() {
	this._pageOpen = false;
	if(this._isCardOrList){
		this._views[0].hide();
	}else{
		this._PebbleWindow.hide();
	}
};

Page.prototype.setOnClick = function(e){
	this._PebbleWindow.on('click', 'select', e);
};

module.exports = Page;