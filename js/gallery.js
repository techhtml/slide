$.fn.Gallery = function(options) {

  var settings = $.extend({
    width : this.width(),
    height: this.height(),
    wrap: this.find(".slide-panel-wrap")
  }, options);

  this.css({
    width: settings.width,
    height: settings.height
  });

}

$("#slide").Gallery();
