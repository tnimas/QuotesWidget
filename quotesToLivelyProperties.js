const fs = require('fs');
const quotesTxt = fs.readFileSync('quotes.json', 'utf8');
const quotesJSON = JSON.parse(quotesTxt);

const propertiesTxt = fs.readFileSync('LivelyProperties.json', 'utf8');

const propertiesJSON = JSON.parse(propertiesTxt);
propertiesJSON.quoteData.value = quotesJSON.map(q => `${q.text}|${q.author}|`).join('')

fs.writeFileSync('LivelyProperties.json', JSON.stringify(propertiesJSON), 'utf8');
