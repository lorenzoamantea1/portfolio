document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.typing-text');
    
    elements.forEach(el => {
        const fullText = el.innerText;
        el.innerText = '';
        
        let i = 0;
        const speed = 100;

        function type() {
            if (i < fullText.length) {
                el.innerText += fullText.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    });
});