
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
        answer: ["6","six"],
        questionImage: "./images/game/years.jpg",
        info: "6 years was how long Luke made Janet wait",
        infoImage: "./images/game/years_i.jpg",
    }, 
	{
        question: "Where did they travel to on their third date?",
        answer: [getValue("Tmetgmbv Vbmr"), getValue("TV")],
        questionImage: "./images/game/ac.jpg",
        info: "After going to dinner and watching a movie, Luke and Janet decided to make a spontaneous trip down to AC",
        infoImage: "./images/game/ac_i.jpg",
    }, 
	{
        question: "What is Janet's favorite temperature?",
        answer: [getValue("Endxptkf")],
        questionImage: "./images/game/warm.jpg",
        info: "That real comfortable feeling after refreshingly cool and before soothingly hot. Cringing yet?",
        infoImage: "./images/game/warm_i.jpg",
    }, 
	{
		question: "Write in alphabetical order the first letters of the bride's wedding party excluding the bride. Follow this format: AAABC",
        answer: [getValue("TTCFL")],
        questionImage: "./images/game/order.jpg",
        info: "BROOKLYNETTES",
        infoImage: "./images/game/order_i.jpg",
	},
	{
        question: "Who was Janet's favorite Star wars character?",
        answer: [getValue("Tgtdbg"), getValue("Tgtdbg Ldrptedxk")],
        questionImage: "./images/game/starwars.jpg",
        info: "Janet really likes sand",
        infoImage: "./images/game/starwars_i.jpg",
    }, 
	{
        question: "What is their pet's name? (hint: previous question)",
        answer: [getValue("Exbt")],
        questionImage: "./images/game/pet.jpg",
        info: "Leia is the goodest girl in the whole world",
        infoImage: "./images/game/pet_i.jpg",
    },
	{
        question: "Where did Luke propose to Janet?",
        answer: [getValue("Atptbb")],
        questionImage: "./images/game/proposal.jpg",
        info: "Fun factoid: Luke tried to propose at the beach at sunrise, but Janet got scared and ran away",
        infoImage: "./images/game/proposal_i.jpg",
    },
	{
        question: "What are Janet and Luke's favorite colors? Answer format: black white",
        answer: [getValue("uenx ibgd"), getValue("ibgd uenx")],
        questionImage: "./images/game/color.jpg",
        info: "Luke thought Janet's favorite color was yellow until they started wedding planning",
        infoImage: "./images/game/color_i.jpg",
    },
	{
        question: "Who was the artist for Janet and Luke's first dance?",
        answer: [getValue("Dtgx Ukhpg")],
        questionImage: "./images/game/dance.jpg",
        info: "The first time Janet heard this song she thought this guy was a terrible singer.",
        infoImage: "./images/game/dance_i.jpg",
    }, 
	{
        question: "What can fill a room but takes up no space?",
        answer: [getValue("Ehox")],
        questionImage: "./images/game/riddle.jpg",
        info: "Luke is terrible at riddles, he still doesn't understand this. He thought it was the awkward elephant in the room.",
        infoImage: "./images/game/riddle_i.jpg",
    },
	{
		question: "Find any bridesmaid to find the clue to a scavenger hunt for the next answer",
        answer: [getValue("ftmva")],
        questionImage: "./images/game/bridesmaids.jpg",
        info: "Make sure to sign the guest book!",
        infoImage: "./images/game/bridesmaids_i.jpg",
	},
	{
		question: "Can you figure this out?",
        answer: [getValue("behoxrhn"), getValue("B Ehox Rhn")],
        questionImage: "./images/game/math.jpg",
        info: "I really do",
        infoImage: "./images/game/math_i.jpg",
	},
	{
		question: "Find any groomsmen and he will tell you hint to next question.",
        answer: [getValue("Ihixrxl")],
        questionImage: "./images/game/groomsmen.jpg",
        info: "Ask Luke about his homemade fried chicken and why he'll probably never make it again.",
        infoImage: "./images/game/groomsmen_i.jpg",
	},
	{
		question: "Tables: 2 3 4 5 6", 
        answer: [getValue("FHETK")],
        questionImage: "./images/game/final.jpg",
        info: "I can't believe you finished the game",
        infoImage: "./images/game/final_i.jpg",
	},
]





var $bool = false
function answer() {
    var answer = $answerInput.val().toLowerCase().trim();
	var answer_array = [];
	for (let i=0; i<questions[currentQuestion].answer.length; i++){
		answer_array[i] = questions[currentQuestion].answer[i].trim().toLowerCase();
	}
	if (answer_array.includes(answer)) {
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
    else if (answer == questions_list[currentQuestion].answer[0].toLowerCase() && currentQuestion >= 5) {
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
const finisher = "Luke<3Jan"
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
	return output;
};