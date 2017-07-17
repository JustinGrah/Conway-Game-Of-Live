$(document).ready(function(){

	Conway.Interact = ( function() {

    var $cell_btn = $('.cell');
		var $gamefield_clr = $('#clear_field');
		var $drop_down = $('#selector');
		var $figure_item = $('#selector li');
		var $drop_down_item = -1;

		// Functions
		$figure_item.click(function(){
			var figure = $(this).attr("title");
			var pattern = Conway.Pattern.get_pattern(figure);

			Conway.Timer.stop_timer(true);
			Conway.Timer.reset_timer();
			Conway.GameField.clear_field();

			if(!(Conway.Pattern.get_pattern(figure).length > Conway.Config.rows || pattern[0].length > Conway.Config.cols)) {

				var x = (Conway.Config.rows - Conway.Pattern.get_pattern(figure).length)/2;
				var y = (Conway.Config.cols - pattern[0].length)/2;


				for(var i = 0; i < Conway.Pattern.get_pattern(figure).length; i ++) {
					for(var j = 0; j < pattern[0].length; j++) {
						if(pattern[i][j] == 1) {
							Conway.GameField.set_cell_status(Math.round(x)+i,Math.round(y)+j,true);
						}
					}
				}
			}else {
				return false;
			}
		});

		// Listeners
		$gamefield_clr.click(function(){
			Conway.Timer.stop_timer(true);
			Conway.Timer.reset_timer();
			Conway.GameField.clear_field();
		});

    $cell_btn.click(function(){
			var attribute = $(this).attr("title");
			attribute = attribute.replace("Zeile ","");
			attribute = attribute.replace("Spalte ","");
			attribute = attribute.split(";");

			if(Conway.GameField.get_cell_status(attribute[0],attribute[1])) {
				Conway.GameField.set_cell_status(attribute[0],attribute[1],false);
			} else {
				Conway.GameField.set_cell_status(attribute[0],attribute[1],true);
			}
    });

		return{

		}

  }());
});
