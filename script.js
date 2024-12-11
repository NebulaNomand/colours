document.body.addEventListener('click', function () {
    // Generate random RGB color values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Set the background color to the generated random color
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});