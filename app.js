var questions = [{
  question:'1. Yoga is a religion',
  answers:['True', 'False'],
  correctAnswer: 'False',
  incorrectFeedback:'False! Yoga is not a religion',
  correctFeedback: 'Correct! Yoga is not a religion'
}, 
{
	question: '2. You have to be flexible to do yoga',
	answers:['True', 'False'],
	correctAnswer:'False',
	incorrectFeedback: 'False! Thats like saying youre too weak to go to the gym',
	correctFeedback: 'Correct! Youre a yogi already'
},
{
	question: '3. What are the benefits of yoga?',
	answers: ['Its a great workout', 'It helps calm the mind', 'Both!'],
	correctAnswer: 'Both!',
	incorrectFeedback: 'False, youre almost there...',
	correctFeedback: 'Correct! Yoga has mind and body benefits'
},
{
	question: '4. What does Namaste mean?',
	answers: ['I bow to you', 'Thank you', 'Peace'],
	correctAnswer: 'I bow to you',
	incorrectFeedback: 'False! Translated directly, Namaste means I bow to you, its a sign of great respect',
	correctFeedback: 'Correct! Translated directly, Namaste means I bow to you, its a sign of great respect'
},
{
	question: '5. You have to learn Sanskrit to follow along in class',
	answers: ['True', 'False'],
	correctAnswer: 'False',
	incorrectFeedback: 'False! Your instructor will lead the class by calling the poses in both English and Sanskrit',
	correctFeedback: 'Correct! Your instructor will lead the class by calling the poses in both English and Sanskrit'
}];



$(document).ready(function(){
	$('#question').hide();
	$('#final-area').hide();
	
	//some to say 'hey we're at index 2' placeholder variable
	var currentQuestionIndex = 0;
	var currentQuestion = questions[currentQuestionIndex];
	var count = 0;
	
	$('#get_started').click(function(){
		$('#question').show();
		loadquestion(currentQuestion);
		$('.start-area').hide();
		// hide next button
		$('#next').hide();
	});
	// click event on the answer to give feedback
	$('#answers').click(function(event){
	  // console.log(event.target)
	  // $(event.target)
	  // check the answer
	  if ( $(event.target).text() === currentQuestion.correctAnswer){
	    // show feedback
	    $('#feedback').text(currentQuestion.correctFeedback);
	    count +=1
	    $('.count').text(count);
	  } else {
	    // show feedback
	    $('#feedback').text(currentQuestion.incorrectFeedback);
	  }
	  // set next question variables
	  currentQuestionIndex +=1; 
	  currentQuestion = questions[currentQuestionIndex];
	  // show next button
	  // $('#answers').attr("disabled", true);
	  $('#next').show();
	})

	//add a click event to #next button to increment element in question array
		$('#next').click(function(){
		if (currentQuestionIndex < questions.length){
		  loadquestion(currentQuestion);	
		} else { 
		  $('#question').hide();
		  $('#final-area').show();
		  
		}
	});

	//play again
	$('.playagain').click(function(){
		count = 0;
		currentQuestionIndex =0; 
	  	currentQuestion = questions[currentQuestionIndex];
		$('#final-area').hide();
		$('.start-area').show();
	})

  function loadquestion(question){
		//question argument
		// update h2
		$('h2').text(question.question);
		// update #answers
		$('#answers').text('');
	  for (i = 0; i < question.answers.length; i++){
			$('#answers').append('<li>' + question.answers[i]  +  '</li> ');
		}
		$('#answers').attr("disabled", true);
		// update #feedback to ''
		$('#feedback').text('');
		$('#next').hide();
		
	}

})


// jQuery
// Score
// Reset button
// Disabling function
// Next function
