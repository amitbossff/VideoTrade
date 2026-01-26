const searchBox = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearBtn");
const searchBtn = document.getElementById("searchBtn");

let lastValue = "";

function doSearch() {
  const value = searchBox.value.trim();
  if (!value || value === lastValue) return;

  lastValue = value;
  const query = encodeURIComponent(value);
  const lastHourFilter = "EgIIAQ%3D%3D";

  window.location.href =
  `https://www.youtube.com/results?search_query=${query}&sp=${lastHourFilter}`;

  setTimeout(() => {
    searchBox.value = "";
    clearBtn.style.display = "none";
    lastValue = "";
  }, 300);
}

searchBox.addEventListener("input", () => {
  clearBtn.style.display = searchBox.value ? "flex" : "none";
  doSearch();
});

searchBtn.addEventListener("click", doSearch);

clearBtn.addEventListener("click", () => {
  searchBox.value = "";
  clearBtn.style.display = "none";
  lastValue = "";
  searchBox.focus();
});
