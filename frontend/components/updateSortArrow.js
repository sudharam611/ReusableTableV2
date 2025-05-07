import { styleConfiguration } from "../configuration/styleConfig.js";

export function updateSortArrow(instance) {
    const arrows = document.querySelectorAll(".sort-arrow img");
    arrows.forEach((img) => {
      const key = img.parentElement.getAttribute("data-key");
      if (key === instance.sortKey) {
        img.src = instance.sortAsc ? styleConfiguration.sortIconStyling.sortAscIcon : styleConfiguration.sortIconStyling.sortDescIcon;
        img.width = styleConfiguration.sortIconStyling.imageWidth;
        img.height = styleConfiguration.sortIconStyling.imageHeight;
      } else {
        img.src = styleConfiguration.sortIconStyling.sortDefaultIcon;
        img.width = styleConfiguration.sortIconStyling.imageWidth;
        img.height = styleConfiguration.sortIconStyling.imageHeight;
      }
    });
}