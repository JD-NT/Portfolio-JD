const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|:<>?\/;'.,-=";

    let interval = null;
        const h1Element = document.querySelector("h1");
        function startScrambleAnimation(targetElement) {
            clearInterval(interval);

            let iteration = 0;
            const originalText = targetElement.dataset.value;

            interval = setInterval(() => {
                targetElement.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }
                iteration += 1 / 3;
            }, 30);
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startScrambleAnimation(entry.target);
                } else {
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(h1Element);
        const initialCheck = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startScrambleAnimation(entry.target);
                    initialCheck.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        initialCheck.observe(h1Element);
