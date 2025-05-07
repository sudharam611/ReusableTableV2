export function updateRows(instance) {
  if (instance.filteredData.length === 0) {
    instance.removedRows = [...instance.rowPool];
    instance.rowPool.forEach(tr => tr.remove());
    return;
  }

  if (instance.removedRows.length > 0) {
    instance.removedRows.forEach(tr => {
      instance.tbody.appendChild(tr);
    });
    instance.removedRows = [];
  }

  const scrollTop = instance.container.scrollTop;
  const viewportHeight = instance.container.clientHeight;
  const visibleRowCount = Math.ceil(viewportHeight / instance.rowHeight) + 10;

  const start = Math.max(0, Math.floor(scrollTop / instance.rowHeight) - 2);
  const end = Math.min(instance.filteredData.length, start + visibleRowCount + 4);

  const offset = start * instance.rowHeight;
  instance.tbody.style.transform = `translateY(${offset}px)`;

  for (let i = 0; i < instance.rowPool.length; i++) {
    const dataIndex = start + i;
    const tr = instance.rowPool[i];

    if (dataIndex >= instance.filteredData.length) {
      tr.style.display = "none";
      continue;
    }

    const rowData = instance.filteredData[dataIndex];
    const tds = tr.children;
    
    tr.style.display = "";

    instance.columns.forEach((col, colIndex) => {
      const td = tds[colIndex];
      const newValue = rowData[col.key] ?? col.defaultValue ?? "N/A";
      const displayValue = typeof newValue === "boolean" ? (newValue ? "YES" : "NO") : newValue;

      if (col.custom) {
        col.custom(newValue, td);
      } else {
        td.textContent = displayValue;
      }

      td.setAttribute("data-label", col.label);
    });
  }
}


// export function updateRows(instance) {
//   const scrollTop = instance.container.scrollTop;
//   const maxScrollTop = instance.container.scrollHeight - instance.container.clientHeight;

//   const direction = scrollTop >= maxScrollTop ? "down" : scrollTop === 0 && instance.currentPage > 0 ? "up" : null;
// console.log(direction)
//   if (direction === "down") {
//     if ((instance.currentPage + 1) * instance.rowsPerPage < instance.filteredData.length) {
//       instance.currentPage++;
//       instance.container.scrollTop = 1; // avoid triggering 'up' logic immediately
//     }
//   } else if (direction === "up") {
//     instance.currentPage = Math.max(0, instance.currentPage - 1);
//     instance.container.scrollTop = 1; // avoid triggering 'down' immediately
//   }

//   const start = instance.currentPage * instance.rowsPerPage;
//   const end = start + instance.rowsPerPage;
//   const pageData = instance.filteredData.slice(start, end);
//   console.log(`Page: ${instance.currentPage}, Showing rows ${start} to ${end - 1}`);

//   for (let i = 0; i < instance.rowPool.length; i++) {
//     const tr = instance.rowPool[i];
//     const dataIndex = start + i;
//     if (i < pageData.length) {
//       const rowData = pageData[i];
//       const tds = tr.children;

//       // instance.columns.forEach((col, colIndex) => {
//       //   const td = tds[colIndex];
//       //   const newValue = rowData[col.key] ?? col.defaultValue ?? "N/A";
//       //   td.textContent = typeof newValue === "boolean" ? (newValue ? "YES" : "NO") : newValue;
//       // });
      
//       instance.columns.forEach((col, colIndex) => {
//         const td = tds[colIndex];
//         const newValue = rowData[col.key] ?? col.defaultValue ?? "N/A";
//         const displayValue = typeof newValue === "boolean" ? (newValue ? "YES" : "NO") : newValue;

//         if (col.custom) {
//           col.custom(newValue, td); 
//         } else {
//           td.textContent = displayValue;
//         }
//         td.setAttribute("data-label", col.label);
//       });

//       //tr.style.display = "table-row";
//     } else {
//       tr.style.display = "none";
//     }
//   }
// }

