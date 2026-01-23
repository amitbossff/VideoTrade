function searchYT(e) {
  e.preventDefault();

  const q = document.getElementById("query").value.trim();
  if (!q) return;

  window.location.href =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(q) +
    "&sp=EgIIAQ%3D%3D";
}

function clearInput() {
  const input = document.getElementById("query");
  input.value = "";
  input.focus();
  toggleClear();
}

function toggleClear() {
  const input = document.getElementById("query");
  const btn = document.getElementById("clearBtn");
  btn.style.display = input.value ? "flex" : "none";
}
