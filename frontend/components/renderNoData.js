export function renderNoData(tbody, columns) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.setAttribute("colspan", columns.length);
    td.textContent = "No data available";
    td.classList.add("no-data-row");
    tr.appendChild(td);
    tbody.appendChild(tr);
}