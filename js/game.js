
let currentQuestion = 0;
let $questionTitle = $("#questionTitle");
let $questionText = $("#questionText");
let $questionImage = $("#questionImage");
let $submitButton = $("#submitButton");
let $answerInput = $("#answerInput");
let $feedbackCorrect = $("#feedbackCorrect");
let $feedbackIncorrect = $("#feedbackIncorrect");
let $infoQuestion = $("#infoQuestion");
let $infoImage = $("#infoImage");
let $infoText = $("#infoText");
let $nextButton = $("#nextButton");
let $endCode = $("#endCode");

localStorage.clear();


const questions = [
	{
        question: "What is the name of Luke's beutiful cat?",
        answer: "Leia",
        questionImage: "./images/pet.jpg",
        info: "Leia is the goodest girl in the whole world",
        infoImage: "./images/pet_i.jpg",
		z: -5
    },
	{
        question: "How many years have Janet & Luke been together?",
        answer: "6",
        questionImage: "./images/years.jpg",
        info: "This is a test",
        infoImage: "./images/years_i.jpg",
		z: -5
    }, 
]



function start() {

    if (localStorage.progress) {
        currentQuestion = parseInt(localStorage.progress);
    } else {
        currentQuestion = 0;
    }

    var $target = $(".intro");
    $target.fadeOut('slow').promise().done(function() {
        showQuestion();
    });
}

function showQuestion() {
    $questionTitle.text('Trial ' + (currentQuestion + 1) + '/' + questions.length);
    $questionTitle.show();

    $questionText.text(questions[currentQuestion].question);
    $questionText.show();

    if (questions[currentQuestion].questionImage) {
        $questionImage.attr('src', questions[currentQuestion].questionImage)
        $questionImage.show();
    }


    $answerInput.val('');
    $answerInput.show();

    $submitButton.show();
}

function showEnd() {
    $endCode.text(code);
    var $target = $(".end");
    $target.show();
    localStorage.clear();
}

var $bool = false
function answer() {
    var answer = $answerInput.val().toLowerCase();
	console.log(answer + "::" + questions[currentQuestion].answer);

	if (answer == questions_list[currentQuestion].answer.toLowerCase() && currentQuestion >= 1) {
		$bool = true;
		var $target = $(".question");

        $target.fadeOut('fast').promise().done(function() {
            $feedbackCorrect.show();

            $infoQuestion.text(questions[currentQuestion].question);
            $infoQuestion.show();

            $infoText.text(questions[currentQuestion].info);
            $infoText.show();

            if (questions[currentQuestion].infoImage) {
                $infoImage.attr('src', questions[currentQuestion].infoImage)
                $infoImage.show();
            }

            $nextButton.show();
        });
    }
    else if (answer == questions[currentQuestion].answer.toLowerCase()) {
        var $target = $(".question");

        $target.fadeOut('fast').promise().done(function() {
            $feedbackCorrect.show();

            $infoQuestion.text(questions[currentQuestion].question);
            $infoQuestion.show();

            $infoText.text(questions[currentQuestion].info);
            $infoText.show();

            if (questions[currentQuestion].infoImage) {
                $infoImage.attr('src', questions[currentQuestion].infoImage)
                $infoImage.show();
            }

            $nextButton.show();
        });
    }
    // Incorrect
    else {
        $answerInput.val('');
        $feedbackIncorrect.show('fast').delay(500).hide('fast');

    }
}

function next() {
    var $target = $(".info");
    //End
    if (currentQuestion >= questions.length - 1) {
        $target.fadeOut('fast').promise().done(function() {
			if($bool){
				showEnd();
			}else{
				showTrueEnd();
			}
        });
    } else {
        currentQuestion++;
        localStorage.progress = currentQuestion;

        $target.fadeOut('fast').promise().done(function() {
            showQuestion();
        });
    }


}
const finisher = "simcity200"
function showTrueEnd() {
    $endCode.text(finisher);
    var $target = $(".end");
    $target.show();
    localStorage.clear();
}

function getValue(str) {
	amount = 7;
	var output = "";
	for (var i = 0; i < str.length; i++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if (code >= 65 && code <= 90) {
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			}
			else if (code >= 97 && code <= 122) {
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
			}
		}
		output += c;
	}
	console.log(output)
	return output;
};