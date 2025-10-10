import './maincontent.css';

function MainContent() {
  return (
<div class='main-content'>
			<h3>CONTROL CENTER</h3>
				<div id='buttons'>
					<button id="minustwobutton">-2</button>
					<button id="minusonebutton">-1</button>
					<button id="resetbutton">Reset</button>
					<button id="plusonebutton">+1</button>
					<button id="plustwobutton">+2</button>
				</div>
				<div id='colored-button'>
					<button id="clearallbutton">Clear History & Results</button>
				</div>
		</div>
  );
}

var total = 0;
	let history = [];
	let operationCount = { additions: 0, subtractions: 0 };

function updateHistory() {
  	let historyContent = "";

    for (let i = 0; i < history.length; i++) {
    	historyContent += "<li onclick='removeHistoryItem(" + i + ")'>" + history[i] + "</li>";
  	}

  	console.log(historyContent)
  	document.querySelector("#historyList").innerHTML = historyContent;
	}

	function removeHistoryItem(index) {
    history.splice(index, 1); // Remove the selected item from the history array
    updateHistory(); // Update the displayed history after the removal
	}

	function updateSummary() {
    document.querySelector("#summary").innerHTML = `Total additions: ${operationCount.additions}, <br> Total subtractions: ${operationCount.subtractions}`;
	}

	function checkTotal() {
    if (total > 0) {
        document.querySelector("#totalMessage").innerHTML = "The total is positive.";
    } else if (total < 0) {
        document.querySelector("#totalMessage").innerHTML = "The total is negative.";
    } else {
        document.querySelector("#totalMessage").innerHTML = "The total is zero.";
    }
	}

	function updateResults() {
    document.querySelector("#resultId").innerHTML = total;
  }

//minustwobutton
	document
    .getElementById("minustwobutton")
    .addEventListener("click", function() {
    	console.log("button clicked")

    	total = total - 2;

      history.push("-2")
      	console.log(history)

			operationCount.subtractions = operationCount.subtractions + 1;
      	console.log(operationCount)
		});

	document
    .getElementById("minustwobutton")
    .addEventListener("click", updateHistory);

	document
    .getElementById("minustwobutton")
    .addEventListener("click", updateResults);
  
  document
    .getElementById("minustwobutton")
    .addEventListener("click", updateSummary);

  document
    .getElementById("minustwobutton")
    .addEventListener("click", checkTotal);

//minusonebutton
	document
    .getElementById("minusonebutton")
    .addEventListener("click", function() {
    	console.log("button clicked")

    	total = total - 1;

      history.push("-1")
      	console.log(history)

			operationCount.subtractions = operationCount.subtractions + 1;
      	console.log(operationCount)
		});

	document
    .getElementById("minusonebutton")
    .addEventListener("click", updateHistory);

	document
    .getElementById("minusonebutton")
    .addEventListener("click", updateResults);
  
  document
    .getElementById("minusonebutton")
    .addEventListener("click", updateSummary);

  document
    .getElementById("minusonebutton")
    .addEventListener("click", checkTotal);

//resetbutton
  document
    .getElementById("resetbutton")
    .addEventListener("click", function() {
			console.log("button clicked")

			total = 0;

      history.push("RESET")
        console.log(history)
		});

	document
    .getElementById("resetbutton")
    .addEventListener("click", updateHistory);

	document
    .getElementById("resetbutton")
    .addEventListener("click", updateResults);

  document
    .getElementById("resetbutton")
    .addEventListener("click", checkTotal);

//plusonebutton
	document
    .getElementById("plusonebutton")
    .addEventListener("click", function() {
    	console.log("button clicked")

    	total = total + 1;

      history.push("+1")
      	console.log(history)

			operationCount.additions = operationCount.additions + 1;
      	console.log(operationCount)
		});

	document
    .getElementById("plusonebutton")
    .addEventListener("click", updateHistory);

	document
    .getElementById("plusonebutton")
    .addEventListener("click", updateResults);
  
  document
    .getElementById("plusonebutton")
    .addEventListener("click", updateSummary);

  document
    .getElementById("plusonebutton")
    .addEventListener("click", checkTotal);

//plustwobutton
	document
    .getElementById("plustwobutton")
    .addEventListener("click", function() {
    	console.log("button clicked")

    	total = total + 2;

      history.push("+2")
      	console.log(history)

			operationCount.additions = operationCount.additions + 1;
      	console.log(operationCount)
		});

	document
    .getElementById("plustwobutton")
    .addEventListener("click", updateHistory);

	document
    .getElementById("plustwobutton")
    .addEventListener("click", updateResults);
  
  document
    .getElementById("plustwobutton")
    .addEventListener("click", updateSummary);

  document
    .getElementById("plustwobutton")
    .addEventListener("click", checkTotal);

//clearallbutton
  document
    .getElementById("clearallbutton")
    .addEventListener("click", function() {
    	console.log("button clicked")

    	total = 0;
    	history = [];
    	operationCount.additions = 0;
    	operationCount.subtractions = 0;
    	updateResults();
    	updateHistory();
		});  

  document
    .getElementById("clearallbutton")
    .addEventListener("click", updateHistory);

  document
    .getElementById("clearallbutton")
    .addEventListener("click", updateSummary);

  document
    .getElementById("clearallbutton")
    .addEventListener("click", checkTotal);

export default MainContent;