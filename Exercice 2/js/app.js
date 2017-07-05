
console.log('hello world');  

var text = document.createTextNode('Hello world');
var child = document.getElementById('addText');
child.appendChild(text);

var element = document.getElementById('remove');
element.parentNode.removeChild(element);

