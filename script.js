const searchBox = document.getElementById("searchBox");
const clearBtn = document.getElementById("clearBtn");
const pasteBtn = document.getElementById("pasteBtn");

const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");

let lastValue = "";

function canPaste() {
  return navigator.clipboard && typeof navigator.clipboard.readText === "function";
}


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

// Input paste/type → redirect
searchBox.addEventListener("input", () => {
  clearBtn.style.display = searchBox.value ? "flex" : "none";
  doSearch();
});

// Paste button
pasteBtn.addEventListener("click", async () => {
  if (!canPaste()) {
    popupOverlay.style.display = "flex";
    return;
  }

  try {
    const text = await navigator.clipboard.readText();
    if (!text) return;

    searchBox.value = text;
    clearBtn.style.display = "flex";
    searchBox.dispatchEvent(new Event("input"));

  } catch {
    popupOverlay.style.display = "flex";
  }
});


popupClose.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});

clearBtn.addEventListener("click", () => {
  searchBox.value = "";
  clearBtn.style.display = "none";
  lastValue = "";
  searchBox.focus();
});
