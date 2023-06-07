async function getSynonyms() {
    let query = document.getElementById('searchQuery').value;
    let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response = await fetch(url);
    let responseAsJson = await response.json();
    let synsets = responseAsJson['synsets'];
    renderSynsets(synsets);
}

function renderSynsets(synsets){
    let container = document.getElementById('container');

    container.innerHTML = `<div>We loaded <b>${synsets.length}</b> Synonym sets.</div>`;


    for (let i = 0; i < synsets.length; i++) {
        const synset = synsets[i];
        let terms = synset['terms']; //is an array
        container.innerHTML +=  `<h2>Synonym-Set With ID ${synset['id']}</h2>`;

        for (let j = 0; j < terms.length; j++) {
            const term = terms[j];
            container.innerHTML += `<div>${term['term']}</div>`;
     
        }
    }
}