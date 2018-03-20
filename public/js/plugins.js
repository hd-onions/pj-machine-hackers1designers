(function ( $ ) {
 
  $.fn.zoom = function( zoom, transform ) {
    return this.css({
      'transform': 'scale('+zoom+')',
      'transform-origin': transform,
    });
  };

  $.fn.move = function( posX, posY ) {
    return this.css({
      'left': posX+'cm',
      'top':posY+'cm'
    });
  };

  $.fn.wordSpacing = function( space ) {
    return this.css('letter-spacing', ''+space +'px');
  };

  $.fn.blockSize = function( size) {
    return this.css({
      'width': size + 'cm',
    });
  };

  $.fn.changeFont = function( font) {
    return this.children().css({
      'font-family': font + ", sans-serif",
    });
  };

  $.fn.changeColor = function( color) {
    console.log(color);
    return this.children().css({
      'color': color,
    });
  };

  $.fn.rotateBlock = function( rotation) {
    console.log(rotation);
    return this.children().css({
      'transform': 'rotate('+rotation+'deg)',
    });
  };

  $.fn.textStrokeWidth = function( strokeWidth) {
    console.log(strokeWidth);
    return this.children().css({
      '-webkit-text-stroke-width': strokeWidth + "px",
    });
  };

  $.fn.changeOpacity = function( opacity) {
    console.log(opacity);
    return this.css({
      'opacity': opacity,
    });
  };
 
}( jQuery ));


