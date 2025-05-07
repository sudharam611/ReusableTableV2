import { updateRows } from "../../components/updateRows.js";
import { updateSortArrow } from "../../components/updateSortArrow.js";

export function addSortListener(instance) {
    const sortArrows = instance.table.querySelectorAll(".sort-arrow");
    sortArrows.forEach((arrow) => {
      const key = arrow.getAttribute("data-key");
      const columnConfig = instance.columns.find((col) => col.key === key);
      if (columnConfig?.sortable !== false) {
        arrow.addEventListener("click", () => {
          instance.sortKey = key;
          sortColumn(instance);
        });
      }
    });
  }

  export function sortColumn(instance) {
    const key = instance.sortKey;
    const columnConfig = instance.columns.find((col) => col.key === key);
    if (columnConfig?.sortable === false) return;
  
    instance.sortAsc = instance.sortKey === key ? !instance.sortAsc : true;
    updateSortArrow(instance);
    sortData(instance);
    updateRows(instance); 
  }

  export function sortData(instance) {
    const key = instance.sortKey;
    instance.filteredData.sort((a, b) => {
      let value1 = a[key];
      let value2 = b[key];
      if (value1 == null && value2 == null) return 0;
      if (value1 == null) return instance.sortAsc ? 1 : -1;
      if (value2 == null) return instance.sortAsc ? -1 : 1;
      if (typeof value1 === "boolean") value1 = value1 ? 1 : 0;
      if (typeof value2 === "boolean") value2 = value2 ? 1 : 0;
      if (value1 instanceof Date && value2 instanceof Date) {
        return instance.sortAsc ? value1 - value2 : value2 - value1;
      }
      if (!isNaN(value1) && !isNaN(value2)) {
        return instance.sortAsc ? value1 - value2 : value2 - value1;
      }
      return instance.sortAsc
        ? String(value1).localeCompare(String(value2))
        : String(value2).localeCompare(String(value1));
    });
  }