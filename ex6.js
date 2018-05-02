function getContent(){
	// alert('jhg');
	var content = document.getElementById('myContent').value;
	document.getElementById('display').innerHTML = content;
}
function myLoad(){
	// alert('jhg');
	var content = document.getElementById('myContent');
	content.addEventListener('keyup',getContent);
}
document.addEventListener('DOMContentLoaded',myLoad);