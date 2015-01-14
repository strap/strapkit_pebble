var View = function(config){
	this.config = config || {};
}

View.prototype.getConfig = function(){
	return this.config;
};

View.prototype.getJSON = function(){
	JSON.stringify(this.config);
};

module.exports = View;