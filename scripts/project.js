/*Project. Week 6. Jose Adrian Lopez Sosa*/

/*Date at the bottom*/
var today = new Date();

var year;

year = today.getFullYear();

document.querySelector('#year').innerHTML = year;


/*Create quote object*/
let quote = {};

/*Create output function to create the tags that will be appended to the div*/
const output = (quote) => {
        let quoteBody = document.createElement("div");
        
        let quoteText = document.createElement("p");
        quoteText.setAttribute('class','text'); 
        quoteText.textContent = quote.quoteText;

        let quoteAuthor = document.createElement("p");
        quoteAuthor.setAttribute('class','auth');
        
        if(quote.quoteAuthor == ''){
            quoteAuthor.textContent = 'Anonymous';
        } else {
            quoteAuthor.textContent = quote.quoteAuthor;
        };

        quoteBody.appendChild(quoteText);
        quoteBody.appendChild(quoteAuthor);

        document.querySelector('#quote').appendChild(quoteBody);
    };

/*Create an async function that will fetch the quote and assign it to our quote object*/
const getQuote = async() =>{
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const api = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
        const response = await fetch(cors + api);
        const quote = await response.json();

/*Call the output function to create the text in the HTML*/
    output(quote);
};

/*Reset div function*/
function reset() {
    return document.querySelector('#quote').textContent = '';
};

/*Function that will start the search with a click*/
function finalQuote(){
    reset();
    getQuote();
};

/*Call the functions*/
document.querySelector('#search').addEventListener("click", finalQuote);
