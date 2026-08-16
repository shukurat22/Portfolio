// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Active nav link
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a, .mobile-menu a:not(.navcta)').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// Mobile menu toggle
(function(){
  const btn = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if(!btn || !menu) return;
  btn.addEventListener('click', ()=>{
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('is-open', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  menu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();

// Lightbox
(function(){
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<span class="lightbox-close">Close ✕</span><img src="" alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach(el=>{
    el.addEventListener('click', ()=>{
      lbImg.src = el.getAttribute('data-lightbox');
      lb.classList.add('open');
    });
  });
  lb.addEventListener('click', ()=> lb.classList.remove('open'));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') lb.classList.remove('open'); });
})();
