const searchBox = document.getElementById("searchBox");
const pasteBtn = document.getElementById("pasteBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

function doSearch(val) {
  if (!val || val.trim() === "") return;
  const query = encodeURIComponent(val.trim());
  const finalUrl = `https://www.youtube.com/results?search_query=${query}&sp=EgIIAQ%3D%3D`;
  
  searchBox.value = ""; 
  window.location.href = finalUrl;
}

searchBox.addEventListener("input", () => {
  if (searchBox.value.length >= 1) {
    doSearch(searchBox.value);
  }
});

pasteBtn.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      searchBox.value = text;
      doSearch(text);
    } else {
      modalOverlay.style.display = "flex";
    }
  } catch (err) {
    modalOverlay.style.display = "flex";
  }
});

closeModal.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (e) => {
  if(e.target === modalOverlay) modalOverlay.style.display = "none";
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") doSearch(searchBox.value);
});