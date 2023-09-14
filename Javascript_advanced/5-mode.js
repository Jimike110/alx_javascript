// Create a function named changeMode:
//     It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
//     Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
// Write a function named main:
//     Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
//     Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
//     Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
//     Add a paragraph to the body of the page with the text Welcome Holberton!
//     Add a button to the body with the text Spooky
//     Add a button to the body with the text Dark mode
//     Add a button to the body with the text Scream mode
//     When clicking on each button, the page CSS should change to the different themes you created previously
// Call the main function

function changeMode(size=Number, weight=String, transform=String, background=String, color=String) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    var spooky = changeMode('9px', 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode('12px', 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode('12px', 'normal', 'lowercase', 'white', 'black');

    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton";
    document.body.appendChild(paragraph);

    let buttonSpooky = document.createElement("button");
    buttonSpooky.textContent = "Spooky";
    buttonSpooky.onclick = spooky;
    document.body.appendChild(buttonSpooky);

    let buttonDark = document.createElement("button");
    buttonDark.textContent = "Dark mode";
    buttonDark.onclick = darkMode;
    document.body.appendChild(buttonDark);

    let buttonScream = document.createElement("button");
    buttonScream.textContent = "Scream mode";
    buttonScream.onclick = screamMode;
    document.body.appendChild(buttonScream);
}

// Call the main function to initialize the page
main();
