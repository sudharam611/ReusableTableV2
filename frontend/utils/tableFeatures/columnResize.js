import { createResizableColumn } from "./createResizableColumn.js";

export function columnResize(instance) {
  const table = instance.table;
  const columns = instance.columns;
  const initialColumnWidths = instance.initialColumnWidths;

  const cols = table.querySelectorAll('th');
  const tableWidth = table.offsetWidth;
  table.style.tableLayout = 'fixed';

  cols.forEach((col, index) => {
    const configWidth = columns?.[index]?.width;
    const widthPercent = configWidth
      ? `${configWidth}%`
      : `${(col.offsetWidth / tableWidth) * 100}%`;

    initialColumnWidths[index] = configWidth || (col.offsetWidth / tableWidth) * 100;
    col.style.width = widthPercent;
    const resizer = document.createElement('div');
    resizer.classList.add('resizer');
    resizer.style.height = `${table.offsetHeight}px`;
    col.style.position = 'relative';
    col.appendChild(resizer);
    createResizableColumn(table, col, resizer, index, columns, initialColumnWidths);
  });
  }
  


  