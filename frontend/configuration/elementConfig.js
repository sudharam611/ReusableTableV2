export const elementConfiguration = {
    input: Object.assign(
      document.createElement("input"),
      {
        type: "text",
        id: "filter-input",
        placeholder: "Enter data to search"
      }
    ),
    button: Object.assign(
        document.createElement("button"),
        {
            id: "reset-button",
            textContent: "Reset"
        }
    ),
    searchContainer: Object.assign(
      document.createElement("div"),
      {
          id: "column-search-container"
      }
    ),
    searchInput : Object.assign(
      document.createElement("input"), {
        type: "text",
        placeholder: "Search...",
        id: "search-input"
      }
    ),
    closeIcon: Object.assign(
      document.createElement("span"), {
        id: "close-icon"
      }
    )
  };
  