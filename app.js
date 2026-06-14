document.addEventListener('DOMContentLoaded', function() {
    
    // =====================
    // 1. SLIDER
    // =====================
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const navBoxes = document.querySelectorAll('.nav-box');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active-dot'));
        navBoxes.forEach(box => box.classList.remove('active-box'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active-dot');
        navBoxes[index].classList.add('active-box');
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    navBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);
    
    // =====================
    // 2. KIRMIZI UYARI ÇUBUĞU
    // =====================
    const alertCloseBtn = document.querySelector('.alert-close');
    const alertBar = document.querySelector('.top-alert-bar');
    
    if (alertCloseBtn && alertBar) {
        alertCloseBtn.addEventListener('click', function() {
            alertBar.style.display = 'none';
        });
    }
    
    // =====================
    // 3. SOL KAYAR MENÜ
    // =====================
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const sideMenuOverlay = document.getElementById('sideMenuOverlay');
    const sideMenuClose = document.getElementById('sideMenuClose');
    
    function openMenu() {
        sideMenu.classList.add('active');
        sideMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        sideMenu.classList.remove('active');
        sideMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }
    
    if (sideMenuClose) {
        sideMenuClose.addEventListener('click', closeMenu);
    }
    
    if (sideMenuOverlay) {
        sideMenuOverlay.addEventListener('click', closeMenu);
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});