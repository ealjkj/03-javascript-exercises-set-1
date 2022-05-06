function setAttributes(color='aquamarine', fontSize='16px', backgroundColor='#aaa'){
    this.style.color = color;
    this.style.backgroundColor = backgroundColor;
    this.style.fontSize = fontSize;
}


const element = document.getElementById('example')


//First way to use it
element.setAttributes = setAttributes;
// element.setAttributes('red', '30px', 'black');
element.setAttributes();

// // Second Way to use it
// setAttributes.call(element, 'red', '30px', 'black');