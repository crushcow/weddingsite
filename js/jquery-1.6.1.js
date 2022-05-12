
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
        question: "How many years have Janet & Luke been together?",
        answer: "6",
        questionImage: "./images/game/years.jpg",
        info: "6 years was how long Luke made Janet wait",
        infoImage: "./images/game/years_i.jpg",
    }, 
	{
        question: "Where did they travel to on their third date?",
        answer: "Atlantic City",
        questionImage: "./images/game/ac.jpg",
        info: "After going to dinner and watching a movie, Luke and Janet decided to make a spontaneous trip down to AC",
        infoImage: "./images/game/ac_i.jpg",
    }, 
	{
        question: "What is Janet's favorite temperature?",
        answer: "Lukewarm",
        questionImage: "./images/game/warm.jpg",
        info: "That real comfortable feeling after refreshingly cool and before soothingly hot",
        infoImage: "./images/game/warm_i.jpg",
    }, 
	{
        question: "Who was Janet's favorite Star wars character?",
        answer: "Anakin",
        questionImage: "./images/game/starwars.jpg",
        info: "Janet really likes sand",
        infoImage: "./images/game/starwars_i.jpg",
    }, 
	{
        question: "What is their pet's name? (hint: previous question)",
        answer: "Leia",
        questionImage: "./images/game/pet.jpg",
        info: "Leia is the goodest girl in the whole world",
        infoImage: "./images/game/pet_i.jpg",
    },
	{
        question: "Where did Luke propose to Janet?",
        answer: "Hawaii",
        questionImage: "./images/game/proposal.jpg",
        info: "Fun factoid: Luke tried to propose at the beach at sunrise, but Janet got scared and ran away",
        infoImage: "./images/game/proposal_i.jpg",
    },
	
]





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