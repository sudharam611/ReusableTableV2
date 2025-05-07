import { renderNoData } from "../../components/renderNoData.js";
import { updateRows } from "../../components/updateRows.js";

export function applyColumnFilter(instance) {
    instance.filteredData = instance.data.filter(row => {
      return Object.entries(instance.activeFilters).every(([colKey, range]) => {
        if (!range) return true;
  
        const value = row[colKey];
  
        if (typeof value === 'number') {
          return value >= range.min && value <= range.max;
        }
  
        if (typeof value === 'string') {
          const trimmedValue = value.trim();
          return trimmedValue >= range.min && trimmedValue <= range.max;
        }
  
        const parsedDate = new Date(value);
        if (!isNaN(parsedDate)) {
          const minDate = new Date(range.min);
          const maxDate = new Date(range.max);
          return parsedDate >= minDate && parsedDate <= maxDate;
        }
  
        return true;
      });
    });
  
    if (instance.filteredData.length === 0) {
     renderNoData(); 
    }
  
    updateRows(instance); 
  }
  