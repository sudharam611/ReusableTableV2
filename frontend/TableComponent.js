import { renderNoData } from "./components/renderNoData.js";
import { allFeatures } from "./utils/tableFeatures/allFeatures.js";
import { createTableAndRenderHeader } from "./utils/tableUtils/createTableAndRenderHeader.js";
import { createResetButton } from "./components/createResetButton.js";
import { constants } from "./utils/constants.js";
export class TableComponent {
    constructor(tableContainer, options = {}, fetchDataCallBack) {
        this.data = [];
        this.filteredData = [];
        this.fetchDataCallBack = fetchDataCallBack || undefined;
        this.container = document.getElementById(tableContainer);
        this.sortKey = options.defaultSortKey || "";
        this.sortAsc = options.sortOrder !== constants.sortDescOrder;
        this.columns = options.columns || [];
        this.bufferRows = 0;
        this.rowPool = [];
        this.rowHeight = options.rowHeight || constants.rowHeight;
        this.activeFilters = {};
        this.initialColumnWidths = [];
        this.removedRows = [];
        this.initial();
    }

    async initial() {
        const spinner = document.getElementById('loading-spinner');
      try {
        spinner.style.display = "block";
        if (this.fetchDataCallBack && typeof this.fetchDataCallBack === 'function') {
          this.data = await this.fetchDataCallBack(); 
        } else {
        alert("No data provided. Please check the URL. Rendering with default headers.");
          this.data = [];
        }
        this.filteredData = [...this.data];

        createResetButton(this);

        const {table, thead, tbody} = createTableAndRenderHeader(this.container, this.columns, this)
        this.table = table;
        this.thead = thead;
        this.tbody = tbody;
      
        if(this.data.length === 0) {
          renderNoData(tbody, this.columns);
        }
        allFeatures(this);
      
      } catch (error) {
          alert("Failed to fetch data. Please check the URL");
          const {tbody} = createTableAndRenderHeader(this.container, this.columns, this)
          console.log(error);
      } finally {
          spinner.style.display = "none";
      }
}

}
