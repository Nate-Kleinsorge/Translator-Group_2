var url = "https://wordsapiv1.p.rapidapi.com/words/";
var key = {'X-RapidAPI-Key': '287257e633mshd41c1d94590619dp1e2d05jsnd9dc792f435b'};
var word = document.getElementById("word");
var wordDef = document.getElementById("wordDef");

//fetch definitions
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '287257e633mshd41c1d94590619dp1e2d05jsnd9dc792f435b',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

