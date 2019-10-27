// Note: we can use click, but we do need to have a mouseover occur
var mouseOver = new MouseEvent( 'mouseover', {
	view: window, bubbles: true, cancelable: true });
['water','electric'].map(word => {
	let foundElement = [...document.querySelectorAll('.leaflet-overlay-pane button')].filter(element => element.dataset.id.includes(word))[0];
	foundElement.dispatchEvent(mouseOver);
	foundElement.click();
});
// outcome: works, replace 'water' and 'electric', but have to have the right words as used in the data-ids
