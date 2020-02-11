
function loadBar(html_id) {
  return new ProgressBar.Line(html_id, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#EB5D0B',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
}

window.onload = function onLoad() {
  
  loadBar("#ruby").animate(0.7);
  loadBar("#html").animate(0.8);
  loadBar("#json").animate(0.4);
  loadBar("#sql").animate(0.6);

};
