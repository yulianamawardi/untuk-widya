// 🌌 Scroll Button
function scrollToNext() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

// 💖 YES button
function showLove() {
    const message = document.getElementById("loveMessage");
    message.innerHTML = "I knew it 😌💗";

    createHearts();

    setTimeout(() => {
        const scrapbook = document.querySelector(".scrapbook");
        scrapbook.scrollIntoView({ behavior: "smooth" });
    }, 1200);
}

// 😈 NO button kabur
function moveButton() {
    const noBtn = document.querySelector(".no-btn");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// 💌 Typing Effect
const text = `Aku cuma mau bilang terima kasih. 
Terima kasih sudah selalu ada, bahkan di saat aku lagi capek, lagi drama, lagi gak jelas, atau lagi random banget.

Kamu selalu punya cara buat bikin aku ketawa, walaupun kadang receh banget.

Aku bersyukur banget punya kamu sebagai sahabat.
Kamu bukan cuma teman, tapi rumah.
Aku selalu nyari kamu untuk cerita semua hal-hal kecil.

Maaf ya kalau aku kadang nyebelin, kadang ngilang, kadang jawabnya lama, atau kadang moodku naik turun kayak roller coaster.

Semoga kita tetap bareng sampai tua nanti.
Nanti kalau kita sukses, kita harus ingat masa-masa kita yang sekarang.

Peluk jauh dari aku 🤍`;

let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 30);
    }
}

window.onload = typeEffect;

// 💕 Virtual Hug
function virtualHug() {
    const hug = document.getElementById("hug");
    hug.innerHTML = "🤍🤍🤍 BIG VIRTUAL HUG 🤍🤍🤍";
    createHearts();
}

// 💗 Heart Animation
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "100%";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 3s linear";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
// 🌌 Fade In On Scroll
const sections = document.querySelectorAll(".section");

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
