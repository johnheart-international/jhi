console.log("Cursor script loaded!");
(function cursorStar(){

    const star = document.getElementById('cursor-star');

    if (!star) return;


    let sx = -100;
    let sy = -100;

    let mx = -100;
    let my = -100;


    window.addEventListener('pointermove', e => {

        mx = e.clientX;
        my = e.clientY;

    });


    function follow(){

        sx += (mx - sx) * 0.22;
        sy += (my - sy) * 0.22;


        star.style.transform =
        `translate(${sx - 12}px, ${sy - 12}px)`;


        requestAnimationFrame(follow);

    }


    follow();



    window.addEventListener('pointerdown', e => {


        star.animate(
            [
                { transform: "scale(1.8)" },
                { transform: "scale(1)" }
            ],
            {
                duration:400,
                easing:"cubic-bezier(.34,1.56,.64,1)"
            }
        );



        const sparkles = [
            "✨",
            "⭐",
            "💖",
            "🩷",
            "⚡"
        ];


        sparkles.forEach(icon => {


            const sparkle = document.createElement("span");


            sparkle.textContent = icon;


            sparkle.style.cssText = `
                position:fixed;
                left:${e.clientX}px;
                top:${e.clientY}px;
                font-size:18px;
                pointer-events:none;
                z-index:9998;
            `;


            document.body.appendChild(sparkle);



            sparkle.animate(
                [
                    {
                        transform:"translate(0,0) scale(1)",
                        opacity:1
                    },
                    {
                        transform:
                        `translate(${Math.random()*140-70}px,
                        ${Math.random()*-80-20}px)
                        scale(.5)
                        rotate(90deg)`,

                        opacity:0
                    }
                ],
                {
                    duration:900,
                    easing:"ease-out"
                }
            );


            setTimeout(()=>{
                sparkle.remove();
            },900);


        });


    });


})();