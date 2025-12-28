document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for identification
    const textToType = "./identify_user.sh --full-scan --deep-analysis";
    const typingElement = document.getElementById('typing-output');
    const staticOutput = document.querySelector('.static-output');
    const ctaTerminal = document.querySelector('.cta-terminal');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typingElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Typing speed
        } else {
            // Typing finished, show execution delay then results
            setTimeout(() => {
                typingElement.innerHTML += '<br><span class="comment"># EXECUTING...</span>';
                setTimeout(() => {
                    staticOutput.classList.remove('hidden');
                    staticOutput.style.opacity = '0';
                    let op = 0;
                    const timer = setInterval(() => {
                        if (op >= 1) {
                            clearInterval(timer);
                            ctaTerminal.classList.remove('hidden');
                        }
                        staticOutput.style.opacity = op;
                        op += 0.1;
                    }, 50);
                }, 800);
            }, 500);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 1000);

    // Glitch effect on hover for specific elements
    const glitchButtons = document.querySelectorAll('.btn-glitch');
    glitchButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            const originalText = btn.getAttribute('data-text');
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
            let iterations = 0;

            const interval = setInterval(() => {
                btn.innerText = btn.innerText.split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('');

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 30);
        });
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#050505';
                navLinks.style.padding = '1rem';
                navLinks.style.borderBottom = '1px solid #00ff41';
            }
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
