<?php
$numOfCorrectAnswers = 0;

// Question 1
if (!empty($_POST["question1"])) {
	if ($_POST["question1"] == "Lincoln") {
		$numOfCorrectAnswers++;
	}
	echo "<p>Question 1: What is the Capital of Nebraska?</p>";
	echo "<p>You answered: ". $_POST["question1"] . "</p>";
	echo "<p>Correct answer: Lincoln</p>";
	echo "<br>";
}
// Question 2
if (!empty($_POST["question2"])) {
	if ($_POST["question2"] == "Topeka") {
		$numOfCorrectAnswers++;
	}
	echo "<p>Question 2: What is the Capital of Kansas?</p>";
	echo "<p>You answered: ". $_POST["question2"] . "</p>";
	echo "<p>Correct answer: Topeka</p>";
	echo "<br>";
}

// Question 3
if (!empty($_POST["question3"])) {
	if ($_POST["question3"] == "Jefferson City") {
		$numOfCorrectAnswers++;
	}
	echo "<p>Question 3: What is the Capital of Missouri?</p>";
	echo "<p>You answered: ". $_POST["question3"] . "</p>";
	echo "<p>Correct answer: Jefferson City</p>";
	echo "<br>";
}

// Question 4
if (!empty($_POST["question4"])) {
	if ($_POST["question4"] == "Oklahoma City") {
		$numOfCorrectAnswers++;
	}
	echo "<p>Question 4: What is the Capital of Oklahoma?</p>";
	echo "<p>You answered: ". $_POST["question4"] . "</p>";
	echo "<p>Correct answer: Oklahoma City</p>";
	echo "<br>";
}

// Question 5
if (!empty($_POST["question5"])) {
	if ($_POST["question5"] == "Austin") {
		$numOfCorrectAnswers++;
	}
	echo "<p>Question 5: What is the Capital of Texas?</p>";
	echo "<p>You answered: ". $_POST["question5"] . "</p>";
	echo "<p>Correct answer: Austin</p>";
	echo "<br>";
}



if (!empty($_POST["question1"]) && !empty($_POST["question2"]) && !empty($_POST["question3"])
	&& !empty($_POST["question4"]) && !empty($_POST["question5"])) {

		echo "You got " . $numOfCorrectAnswers . " answers correct which is ";

	if ($numOfCorrectAnswers == 0) {
		echo "0%";
	} else if ($numOfCorrectAnswers == 1) {
		echo "20%";
	} else if ($numOfCorrectAnswers == 2) {
		echo "40%";
	} else if ($numOfCorrectAnswers == 3) {
		echo "60%";
	} else if ($numOfCorrectAnswers == 4) {
		echo "80%";
	} else if ($numOfCorrectAnswers == 5) {
		echo "100%";
	}
}

?>
