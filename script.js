const firebaseConfig = {
  apiKey: "AIzaSyBxSL_ktKCcnkEvWUjHsQojz-JOVLSTO3s",
  authDomain: "amitbhai-a77a1.firebaseapp.com",
  databaseURL: "https://amitbhai-a77a1-default-rtdb.firebaseio.com",
  projectId: "amitbhai-a77a1",
  storageBucket: "amitbhai-a77a1.appspot.com",
  messagingSenderId: "587608990593",
  appId: "1:587608990593:web:a5f4a8dbca029e30bcbe80"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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
  const btn = document.getElementById("clearBtn");

  input.value = "";
  input.focus();

  btn.classList.add("active-yellow");
  setTimeout(() => btn.classList.remove("active-yellow"), 600);
}

function moveUp() {
  document.getElementById("appShell").style.transform =
    "translateY(-110px)";
}

function moveDown() {
  document.getElementById("appShell").style.transform =
    "translateY(0)";
}

const userRef = db.ref("onlineUsers").push();
userRef.set(true);
userRef.onDisconnect().remove();

db.ref("onlineUsers").on("value", snapshot => {
  const el = document.getElementById("onlineUsers");
  if (el) {
    el.innerText = snapshot.numChildren();
  }
});
