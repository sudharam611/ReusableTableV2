import { applyColumnFilter } from "./applyColumnFilter.js";
export function enableColumnFilter(instance) {
    const columnFilters = instance.table.querySelectorAll(".column-filter");
  
    columnFilters.forEach(filter => {
      filter.addEventListener("change", (e) => {
        const key = e.target.getAttribute("data-key");
        const range = e.target.value ? JSON.parse(e.target.value) : null;
        instance.activeFilters[key] = range || null;
        applyColumnFilter(instance);
      });
    });
  }
  