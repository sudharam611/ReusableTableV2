import { displayColumnSearch } from "./displayColumnSearch.js";
import { displaySortArrow } from "./displaySortArrow.js";
import { displayColumnFilter } from "./displayColumnFilter.js";
import { constants } from "../utils/constants.js";

export function renderTableHeaders(thead, columns,  instance) {
    const tr = document.createElement("tr");
    columns.forEach((col) => {
      const th = document.createElement("th");
      th.setAttribute("data-key", col.key);
      th.textContent = col.label;
      if (col.width) {
        th.style.width = col.width || constants.defaultColumnWidth;
      }
      if (col.sortable !== false) {
        th.classList.add("sortable");
        displaySortArrow(col.key, th);
      }
      if (col.columnLevelFiltering) {
        displayColumnFilter(col.key, col.columnLevelFiltering, th);
      }
      if (col.searchable) {
        displayColumnSearch(th, col.key, instance)
      }
     
      tr.appendChild(th);
    });
    thead.appendChild(tr);
}