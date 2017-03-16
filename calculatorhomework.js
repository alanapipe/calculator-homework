	//declare variables
	var num1; //= parseFloat($("#first").val());
	var num2; //= parseFloat($("#second").val());

	var sum; //= addNum(first, second);
	var difference; //= subtractNum(first, second);
	var product; //= multiplyNum(first, second);
	var quotient; //= divideNum(first, second);


	$(document).ready(function () { //on DOM ready, bind clicks
		$("#button_magic").on("click", function (e) {
			e.preventDefault(); //disable the button's default behavior


			//store the input value of the first number
			num1 = parseFloat($("#first").val());
			//store input value of second number
			num2 = parseFloat($("#second").val());

			//call the math function
			runMath();

			showMath();
		});
	});


	//spell out runMath
	function runMath() {
		sum = num1 + num2;
		difference = num2 - num1;
		product = num1 * num2;
		quotient = num1 / num2;
	}


	function showMath() {
		$("#first").text(num1);
		$("#second").text(num2);
		$("#show-sum").text(sum);
		$("#show-difference").text(difference);
		$("#show-product").text(product);
		$("#show-quotient").text(quotient);
		$("#final-results").addClass('results-show'); //shows the hidden class
	};





	/*$("#sum").val(sum);
		$("#difference").val(difference);
		$("#product").val(product);
		$("#quotient").val(quotient);

		$("#show_results").addClass("active");

		});
	});


//defining the functions outside of document.ready
		function addNum(first, second) {
			return first + second;
		};

		function subtractNum(first, second) {
			return first - second;
		};

		function multiplyNum(first, second) {
			return = first * second;
		};

		function divideNum(first, second) {
			return = first / second;
		};

		/*function show_results() {
			$("#sum").val(sum);
			$("#difference").val(difference);
			$("#product").val(product);
			$("#quotient").val(quotient);
		}
		*/
