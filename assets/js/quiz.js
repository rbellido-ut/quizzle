function renderQuestion(listOfQuestions, currentQuestion) {
	var html = "<p>" + listOfQuestions[currentQuestion].question + "</p>" 
				+ "<p>" + listOfQuestions[currentQuestion].choices + "</p>";

	$('.question').empty();		
	$('.question').append(html); //TODO: is append a good one to call here?
}

$(document).ready(function(){
	var allQuestions = [ 
	{
		question: "Who is Prime Minister of the United Kingdom?", 
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", 
                "Tony Blair"], 
		correctAnswer:0
	},
	{
		question: "What is the answer to life, universe, and everything?",
		choices: ["dogs", "money", "42", "being an astronaut", "A big house"],
		correctAnswer: 2
	},
	{
		question: "2+2?",
		choices: ["4", "8", "0", "10", "900"],
		correctAnswer: 0
	}
	];

	var currentQuestion = 0;


	$('.back').hide();
	$('.next').hide();
	$('.start').show('slow');

	$('.start').on('click', function(event){
		event.preventDefault();
		$('.start').hide('slow');
		$('.back').show('slow');
		$('.next').show('slow', function(){

			renderQuestion(allQuestions, currentQuestion);
		});

		event.stopPropagation();
	});

	$('.next').on('click', function(event) {
		
		if ( ++currentQuestion > (allQuestions.length - 1) ) {
			currentQuestion = 0;
		}

		renderQuestion(allQuestions, currentQuestion);
	});

	$('.back').on('click', function(event){
		if (--currentQuestion < 0) {
			currentQuestion = allQuestions.length - 1;
		}

		renderQuestion(allQuestions, currentQuestion);
	});

})