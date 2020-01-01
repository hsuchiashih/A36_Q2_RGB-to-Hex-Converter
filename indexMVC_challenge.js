
const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");
const valueRed = document.getElementById('value-red-block');
const valueGreen= document.getElementById('value-green-block');
const valueBlue = document.getElementById('value-blue-block');
const sliders = document.getElementById("sliders");
const hexResult = document.getElementById("hex-result");
const bgColor = document.getElementById('bg-color');


const model={
  rgbToHex(index) {
    let hex = Number(index).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  },

  fullColorHex(r, g, b) {
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return red + green + blue;
  },
  
}

const view = {
  displayrgb(r, g, b) {
    let red = Number(r)
    let green = Number(g)
    let blue = Number(b)
    valueRed.innerHTML =`<div><span>${red}</span></div> `
    valueGreen.innerHTML =`<div><span>${green}</span></div>`
    valueBlue.innerHTML =`<div><span>${blue}</span></div>`
  },

  displayhex(hex) {
    const hexUpperCase = hex.toUpperCase()
    const hexText = `#${hexUpperCase}`
    hexResult.innerHTML =
    `<div class="hexnumber">${hexUpperCase}</div>`;
    bgColor.style.backgroundColor=`${hexText}`
  }

}


const controller ={
  getRGBValue(){
    const [r, g, b] = 
    [redElement.value, greenElement.value, blueElement.value]
        view.displayrgb(r, g, b);
        const hex = model.fullColorHex(r, g, b);
        view.displayhex(hex)
      }
  }


sliders.addEventListener('change', event => {
  controller.getRGBValue()
})


