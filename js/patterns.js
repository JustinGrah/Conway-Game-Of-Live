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

		//console.log(patterns.size());

		var get_pattern = function (name){

			if(patterns[name] === undefined){
				return false;
			}

			return patterns[name];

		};

		var get_all_names = function(){
			var name = [];
			for(var key in patterns) {
				name.push(key);
			}
			return name;
		};

		var drp_dwn = function() {
			for(var key in patterns) {
				populate_drop_down(key);
			}
		};

		var count;

		var $drop_down = $('#selector');

		function log (v, i, ar) {
    /* Die Variable i enthält den Index des Wertes v
       im Array ar. Diese drei Parameter werden an die
       Callback-Funktion bei forEach übergeben. */
    	if (console && console.dir) {
        // Ausgabe einer Objektstruktur auf die Konsole
        console.dir(v);
    	}
		}

		var get_obj = function (object) {
			object.foreach(log());
		};

		var populate_drop_down = function(figureName) {
			var $drop_down_item_pattern = $('<li><a>' + figureName + '</a></li>');
			$drop_down_item = $drop_down_item_pattern.clone();
			$drop_down_item.attr('title',figureName);
			$drop_down.append($drop_down_item);
		};


		return{
			get_pattern:get_pattern,
			get_all_names: get_all_names,
			drp_dwn:drp_dwn
		};

	})();

});
