var PebbleUI = require('../ui');

var Page = function(views){
	this.pageOpen = false;
	this.views = [];
	if (views){
		if(typeof views === 'Array') {
			this.views = views;
		} else if (typeof views === 'object') {
			this.views.push(views);
		}
	}
};

Page.prototype.addView= function(view) {
	console.log(view);
	if(!view.show){
		var wind = new PebbleUI.Window();
		wind.add(view);
		view = wind;
	}
	this.views.push(view);
};

Page.prototype.getViews = function() {
	return this.views;
};

Page.prototype.show = function() {
	this.pageOpen = true;
	var topStackView = this.views.length - 1;
	var view = this.views[topStackView];
	if(view.show) { 
		view.show();
	}
};

Page.prototype.hide = function() {
	this.pageOpen = false;
	var topStackView = this.views.length - 1;
	var view = this.views[topStackView];
	if(view.hide) { 
		view.hide();
	}
};


module.exports = Page;