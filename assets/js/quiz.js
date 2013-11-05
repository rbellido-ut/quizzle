$(document).ready(function(){
	var allQuestions = [ 
	{
		question: "Who is Prime Minister of the United Kingdom?", 
		choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
		correctAnswer:0
	},
	{
		question: "What is the answer to life, universe, and everything?",
		choices: ["dogs", "money", "42", "being an astronaut", "A big house"],
		correctAnswer: 2
	}
	];

	var currentQuestion = 0;


	$('.back').hide();
	$('.next').hide();
	$('.start').show('slow');

	$('.start').on('click', function(event){
		event.preventDefault();
		$('.start').hide(700);
		$('.back').show(700);
		$('.next').show(700);
		event.stopPropagation();

		var html = "<p>" + allQuestions[currentQuestion].question + "</p>" 
				+ "<p>" + allQuestions[currentQuestion].choices + "</p>";

		$('.question').append(html);
	});

})