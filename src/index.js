(function(w){
  var name = 'WCAG 2.1 1.4.12 bookmarklet', style, sheet;

  if (typeof w[name] !== 'undefined') {
    document.head.removeChild(w[name].instance);
    delete w[name];
    return;
  }

  style = document.createElement('style'),
  w[name] = {};
  w[name].instance = style;
  document.head.appendChild(style);
  sheet = style.sheet;
  sheet.insertRule('*{line-height:1.5!important;}');
  sheet.insertRule('*{letter-spacing:0.12em!important;}');
  sheet.insertRule('*{word-spacing:0.16em!important;}');
  sheet.insertRule('p{margin-bottom:2em!important;}');
})(window);
