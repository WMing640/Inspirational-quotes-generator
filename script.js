// get random number
function randomNumber(num) {
    return Math.floor(Math.random() * num)
};

// Store inspirational quotes in this array
let inspirationalQuotes = [];

// Store constant words for quotes
const quoteWords = {
    positive: ['impossible', 'too difficult', 'too little time'],
    process: ['Trust', 'Commit to', 'Have faith in'],
    commit: ['goals', 'dreams', 'self', 'future'],
    grit: ['courage', 'bravery', 'spirit', 'tenacity']
};

// For loop to iterate the object
for (let category in quoteWords) {
    let choice = randomNumber(quoteWords[category].length);

//use object properties to custom message for inspirationalQuotes(i) 
switch (category) {
    case 'positive': 
        inspirationalQuotes.push(`There is no such thing as ${quoteWords[category][choice]}.`)
        break;
    case 'process':
        inspirationalQuotes.push(`${quoteWords[category][choice]} the process. Be kinder to yourself.`)
        break;   
    case 'commit':
        inspirationalQuotes.push(`Commit to bettering your ${quoteWords[category][choice]}.`)
        break;
    case 'grit':
        inspirationalQuotes.push(`When things get tough, your ${quoteWords[category][choice]} will pull you through.`)
        break;

}
}
//join array elements into single string
let formatQuotes = inspirationalQuotes.join ('\n')

//prints inspirational quotes
console.log(formatQuotes);
