/**
 * 	Renders the question containing the radio buttons for the choices.
 *
 *	NOTE: The requirement was a bit ambiguous where it said, "The quiz can
 *	show any number of questions and any number of choices". Does it mean
 *	there's a random number generated that will determine how many choices to 
 *	render? In any case, I decided to ignore parts of the requirement, 
 *	specifically the "any number of choices" part.
 */
function renderQuestion(listOfQuestions, theQuestion) {
	var html = '<p>' + listOfQuestions[theQuestion].question + '</p>';

	for (var index = 0; 
			index < listOfQuestions[theQuestion].choices.length; 
			index++) {
		html += '<input type="radio" name="choices" value="' 
			+ index + '" ' + (index === 0 ? 'checked' : ' ') + '/> ' 
			+ listOfQuestions[theQuestion].choices[index] + '<br>';
	}
	$('.question').html(html);
}


/**
 * load all the tings.
 */
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
		choices: ["8", "4", "0", "10", "900"],
		correctAnswer: 1
	}
	];

	var currentQuestion = 0;
	var numOfQuestions = Math.floor(Math.random() * allQuestions.length);
	var score = 0;

	$('.back').hide();
	$('.next').hide();
	$('.question').hide();
	$('.restart').hide();
	$('.start').show('slow');

	$('.start').on('click', function(event){
		event.preventDefault();
		$('.start').hide('slow');
		$('.next').show('slow', function(){

			$('.question').fadeOut("fast", function(){
				renderQuestion(allQuestions, currentQuestion);
				
			});
			$('.question').fadeIn("fast");
		});

		event.stopPropagation();
	});

	$('.next').on('click', function(event) {
		//get answer
		var userAnswer = Number($('.question').children('input[type="radio"]:checked')
									.val());
		
		if (userAnswer === allQuestions[currentQuestion].correctAnswer) {
			score++;
		}

		if ( ++currentQuestion > (allQuestions.length - 1) ) {
			//finished with the quiz
			//tally the score

			$('.next').hide();
			$('.score').text( 'You\'re finished! Your score is ' + score);
			$('.restart').show()

		} else {

			$('.question').fadeOut("fast", function(){
				renderQuestion(allQuestions, currentQuestion);
			});
			$('.question').fadeIn("fast");
			
		}

	});

	$('.restart').on('click', function() {
		score = 0;
		currentQuestion = 0;
		$('.score').empty();
		$('.start').trigger('click');
		$('.restart').hide();
	});

	$('.back').on('click', function(event){
		if (--currentQuestion < 0) {
			currentQuestion = allQuestions.length - 1;
		} else {
			renderQuestion(allQuestions, currentQuestion);
		}
	});

})