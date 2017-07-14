$(document).ready(function(){

	Conway.Generation = (function(){
		var number = 1;

		var get_number = function () {
			return number;
		};

		var set_number = function (newNumber) {
			number = newNumber;
		};

		var next = function(){
			number += 1;
			Conway.Algo.decide_if_living();
		};

		return{
			get_number: get_number,
			set_number: set_number,
			next: next
		};
	}());

});
