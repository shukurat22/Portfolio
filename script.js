// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Active nav link
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
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
