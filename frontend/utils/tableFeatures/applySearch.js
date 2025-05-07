import { updateRows } from "../../components/updateRows.js";

export function applySearch(instance, predicate) {
  //console.log(predicate)
  const noDataMessageId = "no-data-message";

  instance.filteredData = instance.data.filter(predicate);

  const existingMessage = document.getElementById(noDataMessageId);

  if (instance.filteredData.length === 0) {
    if (!existingMessage) {
      const message = document.createElement("div");
      message.id = noDataMessageId;
      message.classList.add("no-data-div");
      message.textContent = "No results found for your search";
      instance.container.appendChild(message);
    }
  } else {
    if (existingMessage) {
      existingMessage.remove();
    }
  }

  updateRows(instance);
}
