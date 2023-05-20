const button = document.getElementById("button");
const text = document.getElementById("hexcode-input");
button.addEventListener("click", () => {
    const generateRandomColor = `#${(Math.floor(Math.random() * 0xffffff).toString(16)).padStart(6, '0')}`;
    document.body.style = `background-color: ${generateRandomColor}`;
    
    // Get the color components
    const red = parseInt(generateRandomColor.slice(1, 3), 16);
    const green = parseInt(generateRandomColor.slice(3, 5), 16);
    const blue = parseInt(generateRandomColor.slice(5, 7), 16);
    
    // Calculate the brightness using the YIQ formula
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    
    // Set the text color based on the brightness
    const textColor = brightness > 128 ? 'black' : 'white';
    text.style.color = textColor;
    button.style.color = textColor;
    button.style.border = "4px solid " + textColor
    button.style.backgroundColor = generateRandomColor
    text.textContent = generateRandomColor;
});
    // const generateRandomColor = `#${(Math.floor(Math.random() * 0xffffff).toString(16)).padStart(6, '0')}`;
    // document.body.style = `background-color: ${generateRandomColor}`;
    // text.textContent = generateRandomColor;
// });
