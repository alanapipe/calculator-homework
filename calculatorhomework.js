//The first step is to declare the counters for equation totals and set them to zero.
var sum = 0,
	difference = 0,
	product = 0,
	quotient = 0;


$(document).ready(function () { //on DOM ready, bind clicks
	$("#compute").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior


	$(".inputs").each(function () { 

			var inputs = $(this), 
				value = parseInt(inputs.val());
				 
			update_sum(first + second);

			update_difference(first - second);

			update_product(first * second);

			update_quotient(first / second)
		}); 

		show_results();
	});
});

//defining the functions outside of document.ready
		function update_sum(first + second) {
			var sum = first + second;
		}

		function update_difference(first - second) {
			var difference = first - second;
		}

		function update_product(first * second) {
			var product = quantity * value;
		}

		function update_quotient(first / second) {
			var quotient = first / second;
		}

		function show_results() {
			$("#sum").val(sum);
			$("#difference").val(difference);
			$("product").val(product);
			$("quotient").val(quotient);
		}

