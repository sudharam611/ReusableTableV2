import { elementConfiguration } from "../configuration/elementConfig.js";
import { resetTable } from "../utils/tableUtils/resetTable.js";

export function createResetButton(instance) {
    const container = instance.container;
    const resetButtonSection = document.createElement("div");
    resetButtonSection.classList.add("reset-button-section")

    resetButtonSection.appendChild(elementConfiguration.button);
    container.parentElement.insertBefore(resetButtonSection, container);

    elementConfiguration.button.addEventListener("click", () => resetTable(instance));
    
}
