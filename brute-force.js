// well if it doesn't care about misclicks...
var mouseOver = new MouseEvent( 'mouseover', {
	view: window,
  bubbles: true,
  cancelable: true 
});
for (let foundElement of document.querySelectorAll('.leaflet-overlay-pane button')) {
  foundElement.dispatchEvent(mouseOver);
  foundElement.click();
}
