$(document).ready(function(){

	// http://www.bitstorm.org/gameoflife/lexicon/#px
	Conway.Pattern = (function(){

		// taken from
		// http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
		var patterns = {
			// debug
			rotate:[
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 1]
			],

			// still lives
			block:[
				[1, 1],
				[1, 1]
			],
			beehive:[
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			loaf:[
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[0, 1, 0, 1],
				[0, 0, 1, 0]
			],
			boat:[
				[1, 1, 0],
				[1, 0, 1],
				[0, 1, 0]
			],
			// Oscillators
			blinker:[
				[0, 0, 0],
				[1, 1, 1],
				[0, 0, 0]
			],
			toad:[
				[0, 1, 1, 1],
				[1, 1, 1, 0]
			],
			beacon:[
				[1, 1, 0, 0],
				[1, 1, 0, 0],
				[0, 0, 1, 1],
				[0, 0, 1, 1]
			],
			pulsar:[
				[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			revolver: [
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1],
				[1,1,1,0,0,0,0,1,0,0,0,1,1,1],
				[0,0,0,1,0,1,0,1,0,0,1,0,0,0],
				[0,0,1,0,0,0,0,0,0,1,0,1,0,0],
				[0,0,1,0,1,0,0,0,0,0,0,1,0,0],
				[0,0,0,1,0,0,1,0,1,0,1,0,0,0],
				[1,1,1,0,0,0,1,0,0,0,0,1,1,1],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,1]
			],
			//Spaceships
			glider: [
				[0, 1, 0],
				[0, 0, 1],
				[1, 1, 1],
			],
			lightweight_spaceship:[
				[0, 1, 0, 0, 1],
				[1, 0, 0, 0, 0],
				[1, 0, 0, 0, 1],
				[1, 1, 1, 1, 0],
			],
			//Methuselahs
			r_pentomino: [
				[0, 1, 1],
				[1, 1, 0],
				[0, 1, 0],
			],
			diehard:[
				[0, 0, 0, 0, 0, 0, 1, 0],
				[1, 1, 0, 0, 0, 0, 0, 0],
				[0, 1, 0, 0, 0, 1, 1, 1],
			],
			acorn:[
				[0, 1, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[1, 1, 0, 0, 1, 1, 1],
			],
			gosper_glider_gun:[
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			],
			exhibit_infinite_growth_1:[
				[0, 0, 0, 0, 0, 0, 1, 0],
				[0, 0, 0, 0, 1, 0, 1, 1],
				[0, 0, 0, 0, 1, 0, 1, 0],
				[0, 0, 0, 0, 1, 0, 0, 0],
				[0, 0, 1, 0, 0, 0, 0, 0],
				[1, 0, 1, 0, 0, 0, 0, 0]
			],
			glider_eater: [
				[0,0,0,0,0,0,0,1,1],
				[0,0,0,1,0,0,0,1,1],
				[0,0,1,0,1,0,0,0,0],
				[0,1,0,1,0,0,0,0,0],
				[0,1,0,0,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0]
			],
			guns_and_eaters: [
				[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
				[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
				[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
			]
		};

		var get = function (name){

			if(patterns[name] === undefined){
				return false;
			}

			return patterns[name];

		};

		var get_all_names = function(){
			// diese funktion soll alle namen zurückgeben
		};

		var count;

		var return_length = function (object) {
			for(var i in object) {
				count+=1;
			}
			console.log(count);
		};

		return{
			get:get,
			return_length:return_length,
			get_all_names: get_all_names
		};

	})();



});
