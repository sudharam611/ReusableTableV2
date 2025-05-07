import { TableComponent } from "./TableComponent.js";
import { fetchData } from "./api/fetchData.js";
import { tableConfiguration } from "./configuration/tableConfig.js";


new TableComponent("table-wrapper", tableConfiguration, () => fetchData())


// new TableComponent("table-wrapper", tableConfiguration)