const lastFive = [localStorage.getItem("lastFive")];
document.getElementById("translateBtn").addEventListener("click", function() {
    var word = document.getElementById("wordSearch").value;
    url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definition";
    fetchUrl(url);
    
    word = word.trim();
    return word;
});
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
    
    fetch(url, options)
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
	body: '[{"Text":"How are you? I am fine. What did you do today?"}]'
};

var options2 = document.getElementsByClassName("option_01");

for (var i = 0; i < options2.length; i++) {
    console.log(options2[i])
};

fetch('https://microsoft-translator-text.p.rapidapi.com/BreakSentence?api-version=3.0&to=', options)
	.then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
        
    var input = document.getElementById("searchForm");

    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("translateBtn").click();
      }
    });
