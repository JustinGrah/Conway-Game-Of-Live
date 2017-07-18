$(document).ready(function() {

  Conway.Algo = (function() {

    var living_cells = [];

    var decide_if_living = function(zeile, spalte) {

      living_cells = [];

      var cells = 0

      for (var i = 0; i < Conway.Config.rows; i++) {
        for (var j = 0; j < Conway.Config.cols; j++) {

          cells = get_active_neighbours(i, j);

          if (Conway.GameField.get_cell_status(i, j)) {
            if ([2, 3].includes(cells)) {
              living_cells.push({
                row: i,
                col: j
              });
            }
          } else {
            if (cells === 3) {
              living_cells.push({
                row: i,
                col: j
              });
            }
          }
        }
      }
      Conway.GameField.clear_field();
      sort_out();
    };

    var get_active_neighbours = function(zeile, spalte) {

      var cells = 0;

      //TOP
      cells += Conway.GameField.get_cell_status(zeile - 1, spalte - 1); //TL
      cells += Conway.GameField.get_cell_status(zeile - 1, spalte); //TM
      cells += Conway.GameField.get_cell_status(zeile - 1, spalte + 1); //TR

      // MIDDLE
      cells += Conway.GameField.get_cell_status(zeile, spalte - 1); //ML
      cells += Conway.GameField.get_cell_status(zeile, spalte + 1); //MR

      //BOTTOM
      cells += Conway.GameField.get_cell_status(zeile + 1, spalte - 1); //BL
      cells += Conway.GameField.get_cell_status(zeile + 1, spalte); //BM
      cells += Conway.GameField.get_cell_status(zeile + 1, spalte + 1); //BR

      return cells;
    };

    var sort_out = function() {
      for (var i = 0; i < living_cells.length; i++) {
        Conway.GameField.set_cell_status(living_cells[i].row, living_cells[i].col, true);
      }
    };

    return {
      decide_if_living: decide_if_living,
      get_active_neighbours: get_active_neighbours,
      sort_out: sort_out
    };

  }());
});
