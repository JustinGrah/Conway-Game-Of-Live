$(document).ready(function(){

	Conway.Timer = (function(){
		var is_paused = false;

		var $play_pause_button = $('#play_pause');
		var $counter = $('#counter span.badge');

		var timer = function(){
			if(is_paused === false){
				Conway.Generation.next();
				$counter.html(Conway.Generation.get_number());
			}
		};

		window.setInterval(timer, 250);

		$play_pause_button.click(function(){
			var switch_to_pause = $(this).find('span').hasClass('glyphicon-pause');

			if(switch_to_pause === true){
				$(this).find('span').removeClass('glyphicon-pause');
				$(this).find('span').addClass('glyphicon-play');
				is_paused = true;
			}
			else{
				$(this).find('span').removeClass('glyphicon-play');
				$(this).find('span').addClass('glyphicon-pause');
				is_paused = false;
			}
		});

		var stop_timer = function(switch_to_pause) {
			if(switch_to_pause === true){
				$play_pause_button.find('span').removeClass('glyphicon-pause');
				$play_pause_button.find('span').addClass('glyphicon-play');
				$counter.html(0);
				is_paused = true;
			}
			else{
				$play_pause_button.find('span').removeClass('glyphicon-play');
				$play_pause_button.find('span').addClass('glyphicon-pause');
				is_paused = false;
			}
		};

		var reset_timer = function() {
			Conway.Generation.set_number(0);
		}

		return{
			stop_timer: stop_timer,
			reset_timer: reset_timer
		};

	}());
	Conway.Pattern.drp_dwn();
	Conway.GameField.set_cell_status(2, 5, true);
	Conway.GameField.set_cell_status(3, 4, true);
	Conway.GameField.set_cell_status(3, 6, true);
	Conway.GameField.set_cell_status(4, 4, true);
	Conway.GameField.set_cell_status(4, 6, true);
	Conway.GameField.set_cell_status(5, 5, true);

	// add a blinker
	Conway.GameField.set_cell_status(5, 12, true);
	Conway.GameField.set_cell_status(5, 13, true);
	Conway.GameField.set_cell_status(5, 14, true);

	// Conway.Pattern.get_all_names();

});
