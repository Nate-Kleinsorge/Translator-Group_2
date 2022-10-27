const lastFive = [];
document.getElementByI
("translateBtn").addEventListener("click", function() {
    var word = document.getElementById("wordSearch").value;
    lastFive.push(JSON.stringify(word));
    word = word.trim();
    url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definition";
    fetchUrl(url);
    localStorage.setItem("lastFive", lastFive);
    return word;
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

// for (let i = 0; i < array.length; i++) {
//     const lastFive = [];
//     lastFive.push(word);
//     localStorage.setItem("lastFive", lastFive);
// }