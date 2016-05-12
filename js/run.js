//BUGS: 
//newGame button works sometimes but not all the time. Typically 2nd time clicking... 
//Need to get a "result" at end of quiz
//first question shows under 'click to begin'


var currentQuestion = 0;
var score = 0;

// var cA = ['#q1b', '#q2d', '#q3c', '#q4b', '#q5c']

$(document).ready(function(){

	$('.newGame').click(function(){
		startGame();
		
	})

	function startGame(){
		$('.question-page').fadeOut();
		$('[data-question=1]').fadeIn(); //brackets find elements with this attribute name
		$('.answer').hide();
		$('.result-page').hide();

		currentQuestion = 0; //starts the question back at q1
		score = 0;


	}

//Event delegation - so you don't need a listener on each answer button
	$('.question-page').on('click', 'label', function(event){
		var questionId = $(event.delegateTarget).attr('data-question'); //tells us the current question that we are on
		var $answer = $('.answer').show();

		var answer = $(event.delegateTarget).find('[data-answer]').text(); //gives us the text value of the answer
		$answer.find('.questionNumber').text(questionId);
		$answer.find('.value').text(answer + '!'); //inputs the "answer"

		var $selectedAnswer = $(event.target); //gives us the selected answer in that varible
		if($selectedAnswer.is('[data-answer]')){
			score ++; //OR you can write like: score = score +1
		}
	})

//ALLOWS QUESTIONS TO FLOW THROUGH ONE TIME
	// var item1 = document.getElementById('.question-page');
	var totalQuestions = $('.question-page').size();
	$questions = $('.question-page');
	$questions.hide();
	$($questions.get(currentQuestion)).fadeIn();  //This line is allowing q1 to show prior to clicking "click to begin"
	$('.nextQuestion').click(function(){
		$($questions.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion +1;

			if(currentQuestion == totalQuestions){
				showResult();
			}
			else{
				$($questions.get(currentQuestion)).fadeIn();
			}
		});
		$('.answer').hide();
	});

//RESULTS: 
	function showResult(){
		$('.question-page').hide();

		var output = ('You Got ' + score + 'Out Of ' + totalQuestions);
		$('.result-page').text(output).show();

	}
}) //document.ready

