export function createResizableColumn(table, col, resizer, index, columns, initialColumnWidths) {
    let startX, startWidthPercent, animationFrame;
  
    const mouseDownHandler = (e) => {
      startX = e.clientX;
      startWidthPercent = parseFloat(col.style.width);
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };
  
    const mouseMoveHandler = (e) => {
      const xAxisDiff = e.clientX - startX;
      if (animationFrame) return;
  
      animationFrame = requestAnimationFrame(() => {
        const newWidthPx = (startWidthPercent / 100) * table.offsetWidth + xAxisDiff;
        const newWidthPercent = (newWidthPx / table.offsetWidth) * 100;
        const finalWidth = Math.max(5, newWidthPercent); 
  
        col.style.width = `${finalWidth}%`;
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
          const cell = row.children[index];
          if (cell) {
            cell.style.width = `${finalWidth}%`;
          }
        });
  
        if (columns[index]) {
          columns[index].width = finalWidth;
        }
        const headers = table.querySelectorAll('th');
        headers.forEach((th, idx) => {
          const width = columns[idx]?.width || initialColumnWidths[idx];
          if (width != null) {
            th.style.width = `${width}%`;
          }
        });
  
        animationFrame = null;
      });
    };
  
    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  
    resizer.addEventListener('mousedown', mouseDownHandler);
  }
  