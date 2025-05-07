import { updateRows } from "../../components/updateRows.js";
import { createRowPool } from "../helpers/createRowPool.js";
import { scrollListener } from "./scrollListener.js";
import { addSortListener, sortData } from "./sortData.js";
import { columnResize } from "./columnResize.js";
import { enableColumnFilter } from "./enableColumnFilter.js";

export function allFeatures(instance) {
    createRowPool(instance);
    updateRows(instance);
    scrollListener(instance);
    enableColumnFilter(instance);
    addSortListener(instance);
    columnResize(instance);
    if(instance.sortKey) {
        sortData(instance);
        updateRows(instance)
    }
}