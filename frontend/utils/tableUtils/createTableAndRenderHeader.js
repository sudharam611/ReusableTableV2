import { createTable } from "../../components/createTable.js";
import { renderTableHeaders } from "../../components/renderTableHeaders.js";


export function createTableAndRenderHeader(container, columns, instance) {
    const {table, thead, tbody} = createTable(container);
    renderTableHeaders(thead, columns, instance);
    return {table, thead,tbody};
}