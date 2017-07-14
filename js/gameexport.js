$(document).ready(function(){

	Conway.SaveGame = ( function() {

		var exportFile = {
			content:[]
		};

		var importFile = {

		};

		var json;

		var importJson;

		var $import_btn =  $('#import');
		var $export_btn =  $('#export');
		var $play_pause_button = $('#play_pause');

		$import_btn.click(function() {
			game_import_from_json();
		});

		$export_btn.click(function() {
			game_export_to_json();
		});

		var game_export_to_json = function() {

			Conway.Timer.stop_timer(true);

		 	for(var i = 0; i < Conway.Config.rows; i++) {
		 		for(var j = 0; j < Conway.Config.cols; j++) {
		 			if(Conway.GameField.get_cell_status(i,j)) {
		 				exportFile.content.push({row:i, col:j});
		 			}
		 		}
		 	}

		 	json = JSON.stringify(exportFile);

		 	window.alert(json);
		 };

		 var game_import_from_json = function() {
			Conway.Timer.stop_timer(true);

			try {

				importJson = prompt("Please enter your generated JSON code below:");

			 	importFile = JSON.parse(importJson);

				for(var i = 0; i < importFile.content.length; i++) {
					if(!((importFile.content[i].row > Conway.Config.rows)||(importFile.content[i].col > Conway.Config.cols))) {
						Conway.GameField.set_cell_status(importFile.content[i].row,importFile.content[i].col,true);
					}
				}
			} catch (e) {
				window.alert(e);
			}
		};



  	return{
			game_export_to_json:game_export_to_json,
			game_import_from_json:game_import_from_json
  	};

	}());
});
