// Buttons
const summerBtn = document.querySelector(".summer");
const winterBtn = document.querySelector(".winter");
const autumnBtn = document.querySelector(".autumn");
const springBtn = document.querySelector(".spring");

// Elements
const weatherImage = document.getElementById("weather-image");
const weatherName = document.getElementById("weather-name");
const weatherDescription = document.getElementById("weather-description");
const backBtn = document.getElementById("back-btn");

// ================= SUMMER =================
summerBtn.addEventListener("click", () => {

    document.body.style.backgroundImage =
    "url(https://cdn.pixabay.com/animation/2025/01/31/15/41/15-41-48-809_512.gif";

    weatherImage.src = "images/summer.jpg";

    weatherName.textContent = "SUMMER";

    weatherDescription.textContent =
    "Summer brings bright sunshine and clear blue skies. Enjoy beaches, vacations, outdoor adventures, and warm relaxing days with friends and family.";

});

// ================= WINTER =================
winterBtn.addEventListener("click", () => {

    document.body.style.backgroundImage =
    "url(https://cdn.pixabay.com/animation/2023/11/09/12/48/12-48-54-742_512.gif)";

    weatherImage.src = "images/winter.jpg";

    weatherName.textContent = "WINTER";

    weatherDescription.textContent =
    "Winter brings cool winds, snowy landscapes, cozy nights, and peaceful mornings. It is the perfect season for enjoying hot drinks and beautiful snowfall.";

});

// ================= AUTUMN =================
autumnBtn.addEventListener("click", () => {

    document.body.style.backgroundImage =
    "url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDg5b2tnNG9zdGdjc2VubDAzYTdsY2R2eGc0dWhpcWRseXZ4cWh2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9CrSZ6moXpM0r5qy5Q/giphy.gif)";

    weatherImage.src = "images/autumn.jpg";

    weatherName.textContent = "AUTUMN";

    weatherDescription.textContent =
    "Autumn is filled with colorful falling leaves, cool breezes, and golden scenery. It is a calm and relaxing season with beautiful natural views.";

});

// ================= SPRING =================
springBtn.addEventListener("click", () => {

    document.body.style.backgroundImage =
    "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWE4Ym1oc24wYWo2Z2k0ejQzcmM0Y3A0eG54a3JmZGw2ZmZjdmN2MCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/6vg3kRY0Jk3Go/200.webp)";

    weatherImage.src = "images/spring.jpg";

    weatherName.textContent = "SPRING";

    weatherDescription.textContent =
    "Spring is the season of blooming flowers, fresh greenery, and pleasant weather. Nature comes alive with colorful gardens and refreshing breezes.";

});

// ================= BACK BUTTON =================
backBtn.addEventListener("click", () => {

    document.body.style.backgroundImage =
    "url('images/default-bg.gif')";

    weatherImage.src = "images/default.jpg";

    weatherName.textContent = "WEATHER";

    weatherDescription.textContent =
    "Choose any season above to explore its beautiful scenery and weather.";

});