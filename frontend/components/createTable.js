export function createTable(container) {
    const table = document.createElement("table");
    table.classList.add("reusable-table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    tbody.classList.add('row-wrapper');
  
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);



    return {table, thead, tbody};
}


