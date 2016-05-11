
var currentQuestion = 0;
var score = 0;

$(document).ready(function(){

	$('.startHere, .newGame').click(function(){
		startGame();
		currentQuestion();
	})

	function startGame(){
		$('.startHere').fadeOut();
		$('.question-page').fadeOut();
		$('[data-question=1]').fadeIn(); //brackets find elements with this attribute name
		$('[data-answer]').hide();

		currentQuestion();
	}

	//Event delegation - so you don't need a listener on each answer button
	$('.question-page').on('click', 'label', function(event){
		var questionId = $(event.delegateTarget).attr('data-question') //tells us the current question that we are on
		$('[data-answer='+ questionId + ']').show();
	})

	// var item1 = document.getElementById('.question-page');
	var totalQuestions = $('.question-page').size;
	$questions = $('.question-page');
	$questions.hide();
	$($questions.get(currentQuestion)).fadeIn();
	$('.nextQuestion').click(function(){
		$($questions.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion +1;
			if(currentQuestion == totalQuestions){
				var result = sum_values()
				alert(result);
			}
			else{
				$($questions.get(currentQuestion)).fadeIn();
			}
		});
		$('[data-answer]').hide();
	});

	//RESULTS: 
	
	if('[data-question=1]' == '#q1b'){
		document.getElementById('question-page').innerHTML = "1 out of 5 Correct!"
	}
	else if('[data-question=1]' =='#q1a'){
		document.getElementById('question-page').innerHTML = "0 out of 5 Correct"
	} 
	else if('[data-question=1]' =='#q1c'){
		document.getElementById('question-page').innerHTML = "0 out of 5 Correct"
	} 
	else if('[data-question=1]' =='#q1d'){
		document.getElementById('question-page').innerHTML = "0 out of 5 Correct"
	} 




	

}) //document.ready

//BUGS: 
//newGame button does not flow through questions on second click
//Need to get a "result" at end of quiz
//first question shows under 'click to begin'