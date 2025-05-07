import { updateRows } from "../../components/updateRows.js";

export function scrollListener(instance) {
    let isUpdating = false;
  
    instance.container.addEventListener("scroll", () => {
      if (!isUpdating) {
        isUpdating = true;
        requestAnimationFrame(() => {
          updateRows(instance); 
          isUpdating = false;
        });
      }
    });
  }
  