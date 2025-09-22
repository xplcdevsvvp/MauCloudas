// Hàm mở Modal
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
    // Additional loading spinner effect
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.style.position = 'fixed';
    spinner.style.top = '50%';
    spinner.style.left = '50%';
    spinner.style.transform = 'translate(-50%,-50%)';
    spinner.style.zIndex = '99999';
    spinner.innerHTML = '<div style="width:64px;height:64px;border-radius:50%;border:6px solid #608eff;border-top:6px solid #fff;animation:spin 1s linear infinite;"></div>';
    document.body.appendChild(spinner);
    setTimeout(() => {
        spinner.remove();
    }, 1200);

// Section reveal animation
const fadeSections = document.querySelectorAll('.fade-in');
const revealFade = () => {
    const trigger = window.innerHeight * 0.88;
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.style.opacity = 1;
            section.style.transform = 'none';
            section.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.4,2,.3,1)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(48px) scale(0.98)';
            section.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.4,2,.3,1)';
        }
    });
};
window.addEventListener('scroll', revealFade);
window.addEventListener('load', revealFade);

// Parallax effect for hero
window.addEventListener('scroll', function() {
    const heroBg = document.querySelector('.hero-bg');
    if(heroBg) {
        heroBg.style.transform = 'translateY(' + (window.scrollY * 0.12) + 'px) scale(1.04)';
    }
});

// Popup demo for gallery
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        const popup = document.createElement('div');
        popup.className = 'gallery-popup';
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100vw';
        popup.style.height = '100vh';
        popup.style.background = 'rgba(0,0,0,0.7)';
        popup.style.zIndex = '99999';
        popup.style.display = 'flex';
        popup.style.alignItems = 'center';
        popup.style.justifyContent = 'center';
        popup.innerHTML = '<img src="' + img.src + '" style="max-width:80vw;max-height:80vh;border-radius:1.5rem;box-shadow:0 8px 32px #608eff80;">';
        popup.onclick = () => popup.remove();
        document.body.appendChild(popup);
    });
});

// Spinner animation
const style = document.createElement('style');
style.innerHTML = '@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}';
document.head.appendChild(style);

}

// Hàm đóng Modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
