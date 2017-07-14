$(document).ready(function(){

	Conway.Interact = ( function() {

    var $cell_btn = $('.cell');
		var $gamefield_clr = $('#clear_field');

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

  }());
});
