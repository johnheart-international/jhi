console.log("Sparkles loaded!");

const sparkleContainer = document.querySelector(".sparkle-container");

const icons = ["✨", "⭐", "✦", "💖"];

const sparkles = [];

for (let i = 0; i < 15; i++) {

    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";

    sparkle.textContent =
        icons[Math.floor(Math.random() * icons.length)];

    const data = {

        x: Math.random() * window.innerWidth,

        y: Math.random() * window.innerHeight,

        speed: 0.3 + Math.random() * 0.8,

        rotation: Math.random() * 360,

        rotationSpeed: -0.4 + Math.random() * 0.8,

        size: 12 + Math.random() * 18

    };

    sparkle.style.fontSize = `${data.size}px`;

    sparkle.style.opacity = 0.3 + Math.random() * 0.6;

    sparkleContainer.appendChild(sparkle);

    sparkles.push({ element: sparkle, data });

}

function animateSparkles() {

    const time = Date.now() * 0.002;

    sparkles.forEach(({ element, data }) => {

        data.y -= data.speed;
        data.rotation += data.rotationSpeed;

        if (data.y < -50) {
            data.y = window.innerHeight + 50;
            data.x = Math.random() * window.innerWidth;
        }

        const scale =
            0.9 + Math.sin(time + data.x) * 0.15;

        element.style.transform =
            `translate(${data.x}px, ${data.y}px)
             rotate(${data.rotation}deg)
             scale(${scale})`;

    });

    requestAnimationFrame(animateSparkles);

}

animateSparkles();