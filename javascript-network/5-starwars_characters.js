// Write a script that prints all characters of a Star Wars movie:
// The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// Display one character name by line
// You must use the Star wars API
// You must use the module request

const request = require("request");

const movieID = process.argv[2];

const api_url = `https://swapi-api.alx-tools.com/api/films/${movieID}`

request(api_url, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }

    const data = JSON.parse(body);
    const characters = data.characters;

    characters.forEach(character => {
        request(character, (error, response, body) => {
            if (error) {
                console.log(error);
                return;
            }
            const characterData = JSON.parse(body);

            console.log(characterData.name);
        });
    });
});