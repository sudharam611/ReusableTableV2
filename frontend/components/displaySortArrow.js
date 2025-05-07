import { styleConfiguration } from "../configuration/styleConfig.js";

export function displaySortArrow(key, th) {
    const sortArrow = document.createElement("span");
    sortArrow.classList.add("sort-arrow");
    sortArrow.setAttribute("data-key", key);
    const img = document.createElement("img");
    img.src = styleConfiguration.sortIconStyling.sortDefaultIcon;
    img.width = styleConfiguration.sortIconStyling.imageWidth;
    img.height = styleConfiguration.sortIconStyling.imageHeight
    sortArrow.appendChild(img);
    th.appendChild(sortArrow);
}