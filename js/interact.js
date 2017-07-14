$(document).ready(function(){

	Conway.Interact = ( function() {

    var $cell_btn = $('.cell');
		var $gamefield_clr = $('#clear_field');
		var $drop_down = $('#selector');
		var $drop_down_item = -1;


		$gamefield_clr.click(function(){
			Conway.Timer.stop_timer(true);
			Conway.Timer.reset_timer();
			Conway.GameField.clear_field();
		});

		var populate_drop_down = function() {
			var figureName;
			var $drop_down_item_pattern = $('<li id="' + figureName +'" role="presentation"><a tabindex="-1">' + figureName + '</a></li>');
			$drop_down_item = $drop_down_item_pattern.clone();

			
		};


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

  }());
});
