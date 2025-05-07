import { elementConfiguration } from "../../configuration/elementConfig.js";
import { styleConfiguration } from "../../configuration/styleConfig.js";
import { debounce } from "../ratelimiters/debounce.js";
import { applySearch } from "./applySearch.js";

export function enableColumnSearch(th, columnKey, instance) {
  const existing = th.querySelector(".column-search-container");
  if (existing) {
    existing.remove();
    return;
  }

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("column-search-container");

  const input = document.createElement("input");
  input.classList.add("search-input");
  input.placeholder = `Search ${columnKey}`;

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("column-search-close");

  const img = document.createElement("img");
  img.src = styleConfiguration.closeIconStyling.closeIcon;
  img.width = styleConfiguration.closeIconStyling.iconWidth;
  img.height = styleConfiguration.closeIconStyling.iconHeight;

  closeIcon.appendChild(img);

  closeIcon.addEventListener("click", () => {
    searchContainer.remove();
    applySearch(instance, () => true);
  });

  searchContainer.appendChild(input);
  searchContainer.appendChild(closeIcon);
  th.appendChild(searchContainer);

  input.addEventListener(
    "input",
    debounce(function (e) {
      const value = e.target.value.trim().toLowerCase();
      const regex = new RegExp(value, "i");

      if (value === "") {
        applySearch(instance, () => true);
      } else {
        applySearch(instance, (row) => regex.test(String(row[columnKey])));
      }
    }, 300)
  );
}

