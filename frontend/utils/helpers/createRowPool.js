import { updateRows } from "../../components/updateRows.js";

export function createRowPool(instance) {
  const containerHeight = instance.container.clientHeight;
  const visibleRows = Math.ceil(containerHeight / instance.rowHeight);
  const buffer = 5;
  instance.bufferRows = visibleRows + buffer;

  for (let i = 0; i < instance.bufferRows; i++) {
    const tr = document.createElement("tr");
    instance.columns.forEach((col) => {
      const td = document.createElement("td");
      if (col.width) {
        td.style.width = col.width;
      }
      tr.appendChild(td);
    });

    instance.tbody.appendChild(tr);
    instance.rowPool.push(tr);
  }

  instance.tbody.style.position = "relative";
  updateRows(instance);
}



// export function createRowPool(instance) {
//   const containerHeight = instance.container.clientHeight;
//   const visibleRows = Math.ceil(containerHeight / instance.rowHeight);
//   const buffer = 5;
//   instance.bufferRows = visibleRows + buffer;

//   for (let i = 0; i < instance.bufferRows; i++) {
//     const tr = document.createElement("tr");
//     instance.columns.forEach((col) => {
//       const td = document.createElement("td");
//       if (col.width) {
//                 td.style.width = col.width;
//                }
//       tr.appendChild(td);
//     });
//     instance.tbody.appendChild(tr);
//     instance.rowPool.push(tr);
//   }

//   instance.tbody.style.position = "relative";

//   // ✅ Initialize page tracking after pool is created
//   instance.currentPage = 0;
//   instance.rowsPerPage = instance.rowPool.length;

//   updateRows(instance);
// }
