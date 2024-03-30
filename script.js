let clickCount = 0;

// Function to change sender name
function changeSenderName() {
  const senderName = prompt("Enter your name:");
  if (senderName !== null && senderName !== "") {
    document.getElementById("sender").textContent = senderName;
  }
}

// Function to animate heart image
function animateHeart() {
  clickCount++;
  const counter = document.getElementById("counter");
  counter.textContent = clickCount; // Update nilai counter

  // Tambahkan kelas shake saat counter diklik
  counter.classList.add("shake");

  setTimeout(() => {
    // Hapus kelas shake setelah animasi selesai
    counter.classList.remove("shake");
  }, 500);

  if (clickCount >= 5) {
    const heart = document.getElementById("heart");
    heart.style.transform = "scale(30)";
    counter.style.transform = "scale(0)";
    setTimeout(() => {
      counter.textContent = 0;
      heart.style.transform = "scale(1)";
      counter.style.transform = "scale(1)";
    }, 3000);
    clickCount = 0;

    // Display text in HTML after delay
    setTimeout(() => {
      displayMessage();
    }, 800);

    // Display text in HTML after delay
    setTimeout(() => {
      displayMessageHidden();
    }, 3000);
  }
}

// Function to display message in HTML
function displayMessage() {
  const loveMessage = document.getElementById("loveMessage");
  loveMessage.classList.remove("hidden"); // Hapus kelas "hidden" untuk menampilkan teks
}

function displayMessageHidden() {
  const loveMessage = document.getElementById("loveMessage");
  loveMessage.classList.add("hidden"); // Hapus kelas "hidden" untuk menampilkan teks
}

// Add event listener for clicking heart image
document.getElementById("heart").addEventListener("click", () => {
  animateHeart();
});

// Add event listener for changing sender name
document.getElementById("sender").addEventListener("click", () => {
  changeSenderName();
});
