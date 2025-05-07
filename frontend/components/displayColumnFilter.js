import { styleConfiguration } from "../configuration/styleConfig.js";

export function displayColumnFilter(key, dropdownData, th) {
    const filterWrapper = document.createElement("div");
    filterWrapper.classList.add('filter-wrapper');
    const filterIcon = document.createElement("img");
    filterIcon.classList.add('filter-icon');
    filterIcon.src = styleConfiguration.filterIconStyling.filterIcon;
    filterIcon.style.width = styleConfiguration.filterIconStyling.iconWidth;
    filterIcon.style.height = styleConfiguration.filterIconStyling.iconHeight;
    filterWrapper.appendChild(filterIcon);
  
    const filterDropdown = document.createElement("select");
    filterDropdown.classList.add('column-filter');
    filterDropdown.setAttribute("data-key", key);
    
  
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "All";
    defaultOption.value = "";
    filterDropdown.appendChild(defaultOption);
  
    dropdownData.forEach(range => {
      const option = document.createElement("option");
      option.textContent = range.label;
      option.value = JSON.stringify({ min: range.min, max: range.max });
      filterDropdown.appendChild(option);
    });
  
    filterIcon.addEventListener("click", () => {
      filterDropdown.style.display = (filterDropdown.style.display === "block") ? "none" : "block";
    });
  
    filterDropdown.addEventListener("change", (e) => {
      filterDropdown.style.display = "none"; 
    });
  
    filterWrapper.appendChild(filterDropdown);
    th.appendChild(filterWrapper);
  }