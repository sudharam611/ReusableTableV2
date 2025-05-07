import { updateRows } from "../../components/updateRows.js";
import { updateSortArrow } from "../../components/updateSortArrow.js";
import { resetColumnWidths } from "../tableFeatures/resetColumnWidths.js";

export function resetTable(instance) {
    instance.activeFilters = {};
    const filterSelects = instance.table.querySelectorAll(".column-filter");
    filterSelects.forEach(select => {
      select.value = "";
    });
    //document.getElementById("filter-input").value = "";
    const columnSearchContainers = instance.table.querySelectorAll(".column-search-container");
    columnSearchContainers.forEach(container => {
      container.remove();
    });
    instance.filteredData = [...instance.data];
    instance.container.scrollTop = 0;
    instance.sortKey = "";
    instance.sortAsc = true;
    updateSortArrow(instance);
    resetColumnWidths(instance.table, instance.initialColumnWidths, instance.columns);
    const existingMessage = instance.container.querySelector(".no-data-div");
    if (existingMessage) {
      console.log('removed');
      instance.container.removeChild(existingMessage);
    }
    instance.rowPool.forEach((tr) => {
      tr.style.display = "";
    });
   updateRows(instance)
  }
  