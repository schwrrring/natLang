// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.v1beta2.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = 'In my puzzle column earlier today I set you the following conundrum, concerning an incident in which six men were arrested during the 1605 Gunpowder Plot. Each of the men were questioned in private about who was a traitor and who was loyal. They made the following remarks.';

// Prepares a document, representing the provided text
const document = {
    content: text,
    type: 'PLAIN_TEXT',
};

// Classifies text in the document
client
    .classifyText({document: document})
    .then(results => {
        const classification = results[0];

        console.log('Categories:');
        classification.categories.forEach(category => {
            console.log(
                `Name: ${category.name}, Confidence: ${category.confidence}`
            );
        });
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
