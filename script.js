

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Get Quote From API
async function getQuote(){

    loading();

    try{ 
        
        var urlAndKey = "http://quotes.rest/quote/search.json?author=C.S.%20Lewis&api_key=" + encodeURIComponent("CpJr7t9MJ03F_ONxy_b6UgeF");
        var response = await fetch(urlAndKey,{cache: "reload"});
        var data = await response.json();
        
        console.log(data); 

        
        if (data.contents.quotes[0].author === ""){
            authorText.innerText="unknown";
        }  else {
            authorText.innerText=data.contents.quotes[0].author;
        }
        if (data.contents.quotes[0].quote.length > 65) {
            quoteText.classList.add('long-quote');
        }
        else {
            quoteText.classList.remove('long-quote');
        }
        

        quoteText.innerText=data.contents.quotes[0].quote;
        complete();  
    } 
    
    catch (error){
        console.log("whoops", error);
    } 
    

}

function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl,'_blank');
}

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete() {
    //if promise/response returned, hide loading
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }

    //else show loading
    else{
    loader.hidden = true;
    }

}


//Event Listeneers
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);
  
// On Load
getQuote();

    






    // JQUERY
    //Gonna try JQuery here after much to no availe with two commented procedures below
    /*
    $.getJSON('http://thingproxy.freeboard.io/fetch/http://quotes.rest/quote/search?minlength=100&author=Lewis&apikey=' + encodeURIComponent("CpJr7t9MJ03F_ONxy_b6UgeF") + '&callback=?', function(data){
    console.log(data.contents);
    

    
    //create the request
    var xhttp = new XMLHttpRequest();
    //set the stage
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    //run the request
    xhttp.open("GET", proxyUrl+apiUrl, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "CpJr7t9MJ03F_ONxy_b6UgeF");
    xhttp.send(); 
    */

    //credentials and addresses
    //var key = "CpJr7t9MJ03F_ONxy_b6UgeF";
    //var proxyUrl = "http://thingproxy.freeboard.io/fetch/";
    
    //var apiUrl = 'https://quotes.rest/quote/search?author=C.S.%20Lewis&minlength=100&maxlength=400&private=false&language=en&limit=1&sfw=false';
    //http://alloworigin.com/get?url=http://example.com
    
    //FREE
    //http://quotes.rest/qod/categories.json

    //proxy
    //http://alloworigin.com/get?url=
    


    /*
        , { 
            //https://forum.freecodecamp.org/t/fetch-api-with-api-key/317584
            method: "GET",
            headers: {
              "X-Theysaidso-Api-Secret": "CpJr7t9MJ03F_ONxy_b6UgeF",
              //"Target-URL": "https://quotes.rest/quote/search?author=C.S.%20Lewis&minlength=100&maxlength=400&private=false&language=en&limit=1&sfw=false"
            }
          })
        */






