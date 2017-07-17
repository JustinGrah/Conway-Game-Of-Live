$(document).ready(function(){

	Conway.GameField = (function(){

		var $field = $('#field');
		var cell_matrix = [];

		var get_cell_status = function(row, col){
			if(!((cell_matrix[row] === undefined)||(cell_matrix[row][col] === undefined))) {
				return cell_matrix[row][col].hasClass('alive');
			}

			return false;
		};

		var set_cell_status = function(row, col, alive){
			if(alive === true){
				cell_matrix[row][col].addClass('alive');
			} else {
				cell_matrix[row][col].removeClass('alive');
			}
		};

		var create_field = function() {
			var width = $field.width();

			var cell_width = Math.floor(width / Conway.Config.cols);

			var $cell_pattern = $('<button type="button" class="btn cell"></button>');
			$cell_pattern.css({
				width: cell_width + 'px',
				height: cell_width + 'px'
			});

			for(var i = 0, x = Conway.Config.rows; i < x; i += 1){

				cell_matrix[i] = [];

				for(var j = 0, y = Conway.Config.cols; j < y; j += 1){

					var $cell = $cell_pattern.clone();

					$cell.attr('title', 'Zeile ' + i + ';Spalte ' + j );

					cell_matrix[i].push($cell);

					$field.append($cell);

				}
			}
		};

		var clear_field = function() {
			for(var i = 0; i < Conway.Config.rows; i++){
				for(var j = 0; j < Conway.Config.cols; j++){
					set_cell_status(i,j,false);
				}
			}
		};

		var print = function(letter,x,y) {
			switch (letter) {
				case A:
					set_cell_status(x,y,false);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,false);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,false);
					set_cell_status(x-4,y+2,false);

					set_cell_status(x-0,y+2,false);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case B:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case C:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,false);
					set_cell_status(x-4,y+2,true);
					break;
				case D:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,false);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,false);
					break;
				case E:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,false);
					set_cell_status(x-4,y+2,true);
					break;
				case F:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,false);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,false);
					set_cell_status(x-4,y+2,false);
					break;
				case G:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case H:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,false);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,false);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case I:
					set_cell_status(x,y,false);
					set_cell_status(x-1,y,false);
					set_cell_status(x-2,y,false);
					set_cell_status(x-3,y,false);
					set_cell_status(x-4,y,false);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,true);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,true);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case J:
					set_cell_status(x,y,false);
					set_cell_status(x-1,y,false);
					set_cell_status(x-2,y,false);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,false);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case K:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,false);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,true);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,false);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case L:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,false);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,false);
					set_cell_status(x-1,y+2,false);
					set_cell_status(x-2,y+2,false);
					set_cell_status(x-3,y+2,false);
					set_cell_status(x-4,y+2,true);
					break;
				case M:
					break;
				case N:
					break;
				case O:
					set_cell_status(x,y,true);
					set_cell_status(x-1,y,true);
					set_cell_status(x-2,y,true);
					set_cell_status(x-3,y,true);
					set_cell_status(x-4,y,true);

					set_cell_status(x-0,y+1,true);
					set_cell_status(x-1,y+1,false);
					set_cell_status(x-2,y+1,false);
					set_cell_status(x-3,y+1,false);
					set_cell_status(x-4,y+1,true);

					set_cell_status(x-0,y+2,true);
					set_cell_status(x-1,y+2,true);
					set_cell_status(x-2,y+2,true);
					set_cell_status(x-3,y+2,true);
					set_cell_status(x-4,y+2,true);
					break;
				case P:
					break;
				case Q:
					break;
				case R:
					break;
				case S:
					break;
				case T:
					break;
				case U:
					break;
				case V:
					break;
				case W:
					break;
				case X:
					break;
				case Y:
					break;
				case Z:
					break;
				default:
					return false;
			}
			set_cell_status();
		};

		create_field();

		return{
			get_cell_status: get_cell_status,
			set_cell_status: set_cell_status,
			clear_field:clear_field
		};
	}());

});
