
import { enableColumnSearch } from "../utils/tableFeatures/enableColumnSearch.js";

export function displayColumnSearch(th, key, instance) {
    // console.log('entered')
    const searchIcon = document.createElement("span");
    searchIcon.classList.add("search-icon");
    searchIcon.innerHTML = "🔍"; 
    searchIcon.addEventListener("click", () => {
       enableColumnSearch(th, key ,instance);
      });
      th.appendChild(searchIcon);
}