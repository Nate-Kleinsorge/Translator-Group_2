const lastFive = [localStorage.getItem("lastFive")];
document.getElementById("translateBtn").addEventListener("click", function() {
    var word = document.getElementById("wordSearch").value;
    url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definition";
    fetchUrl(url);
    word = word.trim();
    return word;
});

//get the laguage that the user wants to translate to
// document.getElementById("translateBtn").addEventListener("click", function() {
//     var options2 = document.getElementsByClassName("option_01");
//     var languageSelect = document.getElementById("langselector");
    
//     for (var i = 0; i < options2.length; i++) {
//         if (options2[i].value == languageSelect.value) {
            
//         };
// };
// });



document.getElementById("searchForm").addEventListener("submit",function(event){
    var word = document.getElementById("wordSearch").value;
    event.preventDefault()
    lastFive.unshift(JSON.stringify(word));
    localStorage.setItem("lastFive", lastFive);
console.log("Submit")   
})
var wordDis = document.getElementById("word");
var wordDef = document.getElementById("wordDef");
var url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definition";

//fetch definitions

function fetchUrl(url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '287257e633mshd41c1d94590619dp1e2d05jsnd9dc792f435b',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
    fetch (url, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            wordDis.textContent = data.word;
            wordDef.textContent = data.definition;
        });
};

//fetch translation and print

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': "287257e633mshd41c1d94590619dp1e2d05jsnd9dc792f435b",
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	},
	body: '[{"Text":"I would really like to drive your car around the block a few times."}]'
};

fetch ("https://microsoft-translator-text.p.rapidapi.com/translate?to=es&to=it&api-version=3.0&profanityAction=NoAction&textType=plain", options)
	.then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
        
