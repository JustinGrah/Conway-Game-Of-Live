$(document).ready(function(){

	Conway.GameField = (function(){

		var $field = $('#field');
		var cell_matrix = [];

		var get_cell_status = function(row, col){
			if(!((cell_matrix[row] === undefined)||(cell_matrix[row][col] === undefined))) {
				return cell_matrix[row][col].hasClass('alive');
			} else {

				if(row < 0 && col < 0) {
					row = ~((~row) - Conway.Config.rows);
					col = ~((~col) - Conway.Config.cols);
					return cell_matrix[row][col].hasClass('alive');
				}

				if(row >= Conway.Config.rows && col >= Conway.Config.cols) {
					row = row - Conway.Config.rows;
					col = col - Conway.Config.cols;
					return cell_matrix[row][col].hasClass('alive');
				}

				if(row >= Conway.Config.rows && col < 0) {
					row = row - Conway.Config.rows;
					col = ~((~col) - Conway.Config.cols)
					return cell_matrix[row][col].hasClass('alive');
				}

				if(row < 0 && col >= Conway.Config.cols) {
					row = ~((~row) - Conway.Config.rows);
					col = col - Conway.Config.cols
					return cell_matrix[row][col].hasClass('alive');
				}

				if(row < 0) {
					row = ~((~row) - Conway.Config.rows)
					return cell_matrix[row][col].hasClass('alive');
				}

				if(row >= Conway.Config.rows) {
					row = row - Conway.Config.rows
					return cell_matrix[row][col].hasClass('alive');
				}

				if(col < 0) {
					col = ~((~col) - Conway.Config.cols)
					return cell_matrix[row][col].hasClass('alive');
				}

				if(col >= Conway.Config.cols) {
					col = col - Conway.Config.cols
					return cell_matrix[row][col].hasClass('alive');
				}

			}

			return false;
		};

		var set_cell_status = function(row, col, alive){
			if(!((cell_matrix[row] === undefined)||(cell_matrix[row][col] === undefined))) {
				if(alive === true){
					cell_matrix[row][col].addClass('alive');
				} else {
					cell_matrix[row][col].removeClass('alive');
				}
			} else {

				if(alive === true) {

					if(row < 0 && col < 0) {
						row = ~((~row) - Conway.Config.rows);
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(row > Conway.Config.rows && col > Conway.Config.cols) {
						row = row - Conway.Config.rows;
						col = col - Conway.Config.cols;
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(row > Conway.Config.rows && col < 0) {
						row = row - Conway.Config.rows;
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(row < 0 && col > Conway.Config.cols) {
						row = ~((~row) - Conway.Config.rows);
						col = col - Conway.Config.cols;
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(row < 0) {
						row = ~((~row) - Conway.Config.rows);
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(row > Conway.Config.rows) {
						row = row - Conway.Config.rows;
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(col < 0) {
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].addClass('alive');
						return true;
					}

					if(col > Conway.Config.cols) {
						col = col - Conway.Config.cols;
						cell_matrix[row][col].addClass('alive');
						return true;
					}
				} else {

					if(row < 0 && col < 0) {
						row = ~((~row) - Conway.Config.rows);
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(row > Conway.Config.rows && col > Conway.Config.cols) {
						row = row - Conway.Config.rows;
						col = col - Conway.Config.cols;
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(row > Conway.Config.rows && col < 0) {
						row = row - Conway.Config.rows;
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(row < 0 && col > Conway.Config.cols) {
						row = ~((~row) - Conway.Config.rows);
						col = col - Conway.Config.cols;
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(row < 0) {
						row = ~((~row) - Conway.Config.rows);
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(row > Conway.Config.rows) {
						row = row - Conway.Config.rows;
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(col < 0) {
						col = ~((~col) - Conway.Config.cols);
						cell_matrix[row][col].removeClass('alive');
						return true;
					}

					if(col > Conway.Config.cols) {
						col = col - Conway.Config.cols;
						return true;
					}
				}
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

		create_field();

		return{
			get_cell_status: get_cell_status,
			set_cell_status: set_cell_status,
			clear_field:clear_field
		};
	}());

});
