export function resetColumnWidths(table, initialColumnWidths, columns) {
    table.style.tableLayout = 'fixed';
    const cols = table.querySelectorAll('th');
    const rows = table.querySelectorAll('tr');
  
    cols.forEach(col => col.style.width = '');
    rows.forEach(row => {
      [...row.children].forEach(cell => cell.style.width = '');
    });
  
    cols.forEach((col, index) => {
      const width = initialColumnWidths?.[index];
      if (width != null) {
        col.style.width = width;
        if (columns[index]) {
          delete columns[index].width;
        }
  
        rows.forEach(row => {
          const cell = row.children[index];
          if (cell) {
            cell.style.width = width;
          }
        });
      }
    });
  }