// Note: we can use click, but we do need to have a mouseover occur

var mouseDown = new MouseEvent( 'mousedown', {
	view: window, bubbles: true, cancelable: true });
var mouseOver = new MouseEvent( 'mouseover', {
	view: window, bubbles: true, cancelable: true });
var mouseUp = new MouseEvent( 'mouseup', {
	view: window, bubbles: true, cancelable: true });
var foundElement = [...document.querySelectorAll('.leaflet-overlay-pane button')].filter(element => element.dataset.id.includes('water'))[0]; 
foundElement.dispatchEvent(mouseOver);
foundElement.click();
var foundElement = [...document.querySelectorAll('.leaflet-overlay-pane button')].filter(element => element.dataset.id.includes('electric'))[0]; 
foundElement.dispatchEvent(mouseOver);
foundElement.click();
