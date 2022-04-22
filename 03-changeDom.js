function setAttributes(color, fontSize, backgroundColor){
    this.style.color = color;
    this.style.backgroundColor = backgroundColor;
    this.style.fontSize = fontSize;
}


element = document.getElementById('example')


//First way to use it
element.setAttributes = setAttributes;
element.setAttributes('red', '30px', 'black')

// // Second Way to use it
// setAttributes.call(element, 'red', '30px', 'black');