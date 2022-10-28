const lastFive = localStorage.getItem("lastFive");
const lastFive2 = lastFive;
const lastFiveArray = lastFive2.split(",");

// for Loop to print recent words pulled from local storage
lastFiveArray.forEach(word => {
    //Removes "" from words pull from LS
    word = word.replaceAll('"', '');
    let recentList = document.getElementById("recentList");
    let listItem = document.createElement("li");
    listItem.textContent = word;
    recentList.appendChild(listItem);
})

document.getElementById("translateBtn").addEventListener("click", function() {
    const language = document.getElementById("langSelector").value;
    var word = document.getElementById("wordSearch").value;
    url = "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definition";
    fetchUrl(url);
    translate(word, language);
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
    
    fetch (url, options)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            wordDis.textContent = data.word;
            wordDef.textContent = data.definition;
        });
};

//fetch translation and print
function translate(input, language) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': "287257e633mshd41c1d94590619dp1e2d05jsnd9dc792f435b",
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: `[{"Text":"${input}"}]`
    };
    
    fetch (`https://microsoft-translator-text.p.rapidapi.com/translate?to=${language}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
        .then(function (response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
};

