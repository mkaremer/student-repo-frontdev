import { characters } from './02-data.js';

document.addEventListener('DOMContentLoaded', function() {
    //Get the elements from the DOM
    const searchButton = document.getElementById('searchButton');
    const userInput = document.getElementById('userInput');
    const characterContainer = document.getElementById('characterContainer');

    searchButton.addEventListener('click', function() {
        const searchText = userInput.value.toLowerCase();
        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(searchText)
        );

        characterContainer.innerHTML = ''; // Clear previous results
        if (filteredCharacters.length > 0) {
            filteredCharacters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'card m-2';
                card.style.width = '18rem';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = character.name;

                const cardText = document.createElement('p');
                cardText.className = 'card-text';
                cardText.textContent = `Height: ${character.height}, Birth Year: ${character.birth_year}`;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                card.appendChild(cardBody);
                characterContainer.appendChild(card);
            });
        } else {
            const noResults = document.createElement('div');
            noResults.textContent = 'No characters found that match your search criteria.';
            noResults.className = 'alert alert-warning';
            characterContainer.appendChild(noResults);
        }
    });
});
