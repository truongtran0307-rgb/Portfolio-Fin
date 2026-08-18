/* ============================================================
   HOME.JS — Logic riêng cho index.html
   Cần nạp common.js TRƯỚC file này.
   ============================================================ */

// ---- REC timecode ----
const tcEl = document.getElementById('tc');
const startTime = Date.now();
function pad(n,l=2){ return String(n).padStart(l,'0'); }
function tickClock(){
  const el = Date.now() - startTime;
  const h = Math.floor(el/3600000), m = Math.floor((el%3600000)/60000), s = Math.floor((el%60000)/1000), f = Math.floor((el%1000)/1000*30);
  tcEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  requestAnimationFrame(tickClock);
}
tickClock();

// ---- HCMC clock ----
const clockEl = document.getElementById('clock');
function updateClock(){
  const d = new Date();
  const opts = { timeZone:'Asia/Ho_Chi_Minh', hour:'2-digit', minute:'2-digit', hour12:false };
  clockEl.textContent = 'HCMC — ' + new Intl.DateTimeFormat('en-GB', opts).format(d);
}
updateClock(); setInterval(updateClock, 15000);

// ---- reveal-on-scroll (+ plate corner pop + counter) ----
const revealEls = Array.from(document.querySelectorAll('.reveal'));
const plateEls = Array.from(document.querySelectorAll('.plate'));

function animateCount(el){
  if(el.dataset.done) return;
  el.dataset.done = '1';
  const target = parseInt(el.dataset.count, 10);
  // Dấu phân cách nghìn: 3000 -> "3,000". Số bốn chữ số trở lên rất khó đọc
  // nếu để trần, mà đây lại đúng là những con số cần người xem nhớ.
  const fmt = n => n.toLocaleString('en-US');
  const dur = 800; const t0 = performance.now();
  function step(t){
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = fmt(Math.floor(p * target));
    if(p < 1) requestAnimationFrame(step); else el.textContent = fmt(target);
  }
  requestAnimationFrame(step);
}

function checkReveal(){
  const vh = window.innerHeight;
  revealEls.forEach(el=>{
    if(el.classList.contains('in')) return;
    const r = el.getBoundingClientRect();
    if(r.top < vh * 0.9 && r.bottom > 0){
      el.classList.add('in');
      el.querySelectorAll('[data-count]').forEach(animateCount);
    }
  });
  plateEls.forEach(el=>{
    if(el.classList.contains('plate-in')) return;
    const r = el.getBoundingClientRect();
    if(r.top < vh * 0.85 && r.bottom > 0){ el.classList.add('plate-in'); }
  });
}
/* ---- HIỆU ỨNG THEO CUỘN TRANG -------------------------------------------
   Mỗi phần tử có data-fx được gán biến CSS --p (0 → 1). CSS lấy --p để tính
   transform nên chạy được ở MỌI trình duyệt — khác animation-timeline:view()
   vốn chỉ Chrome hỗ trợ, Safari/Firefox bỏ qua nên không thấy hiệu ứng.

   Hai thang đo:
     mặc định  — p=0 khi phần tử vừa chạm mép dưới, p=1 khi rời mép trên.
                 Hợp cho phần tử ở giữa trang (parallax hai chiều).
     "exit"    — p=0 khi phần tử còn nguyên trong khung, tăng dần khi nó
                 trôi lên khỏi màn hình. Hợp cho hero ở đầu trang, vì thang
                 mặc định sẽ cho p≈0.5 ngay lúc mới tải (hero bị mờ sẵn).  */
const fxEls = Array.from(document.querySelectorAll('[data-fx]'));
function updateScrollFX(){
  if(reduceMotion || !fxEls.length) return;
  const vh = window.innerHeight;
  fxEls.forEach(el=>{
    const r = el.getBoundingClientRect();
    if(r.bottom < -240 || r.top > vh + 240) return;   // ngoài màn hình -> bỏ qua
    const p = el.dataset.fxMode === 'exit'
      ? -r.top / (r.height + vh * 0.25)
      : (vh - r.top) / (vh + r.height);
    el.style.setProperty('--p', Math.min(Math.max(p, 0), 1).toFixed(4));
  });
}

let ticking = false;
const updateProgress = initProgressBar();
function onScroll(){
  if(!ticking){
    requestAnimationFrame(()=>{
      checkReveal();
      updateScrollFX();
      if(updateProgress) updateProgress();
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', onScroll, { passive:true });
window.addEventListener('resize', onScroll);
checkReveal();
updateScrollFX();

// ---- tab switcher (Thiết kế / Promoter) ----
const pageDesign = document.getElementById('page-design');
// Có thể là null: khi PROMOTER_PUBLISHED = false, index.html gỡ hẳn khối này
// ra khỏi trang. Mọi chỗ dùng bên dưới đều phải kiểm tra trước.
const pagePromoter = document.getElementById('page-promoter');
function getActivePageEl(){
  return (pagePromoter && !pagePromoter.hidden) ? pagePromoter : pageDesign;
}
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = btn.dataset.page;
    document.querySelectorAll('.tab-btn').forEach(b=> b.classList.toggle('active', b===btn));
    pageDesign.hidden = target !== 'design';
    if(pagePromoter) pagePromoter.hidden = target !== 'promoter';
    window.scrollTo(0,0);
    checkReveal();
    if(trackingHandle) trackingHandle.computeAnchors();
  });
});

// ---- text scramble decode-in cho tên ở hero ----
// Tên ở hero: chạy ngay khi tải trang (không lặp lại liên tục như bản cũ).
// Tiêu đề hero: hiệu ứng GIẢI MÃ, lặp lại mỗi 3 giây.
decodeText(document.querySelector('.hero-panel h1'), 900, 3000);
// Tiêu đề phần Contact: chạy khi cuộn tới.
kineticOnView('.contact-inner h2', 60);

// ---- custom cursor ----
initCustomCursor('a, .tile, button, .bracket');

// ---- bấm bất kỳ đâu trên thẻ -> sang trang chi tiết dự án ----
document.querySelectorAll('.tile').forEach(tile=>{
  const cta = tile.querySelector('.tile-cta');
  if(!cta) return;
  tile.addEventListener('click', (e)=>{
    if(e.target.closest('.tile-cta')) return;
    const href = cta.getAttribute('href');
    if(!href) return;
    // Chuyển trang thẳng. KHÔNG bọc trong startViewTransition — trang bị huỷ
    // trước khi hiệu ứng kịp chạy nên chỉ tổ thêm độ trễ.
    window.location.href = href;
  });
});

// ---- màn chờ + cuộn quán tính ----
initPreloader();
initSmoothScroll(onScroll);

// ---- ambient motion-tracking overlay (page-wide, không theo chuột) ----
let trackingHandle = null;
function initTracking(){
  if(reduceMotion || window.matchMedia('(hover:none), (pointer:coarse)').matches) return;
  const canvas = document.getElementById('trackCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const TRACK_COLOR = '63,198,214';

  function syncCanvasSize(){
    const w = document.documentElement.scrollWidth;
    const h = document.documentElement.scrollHeight;
    canvas.width = w; canvas.height = h;
    canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  }

  const anchorDefs = [
    { sel:'.portrait-frame img', rx:0.42, ry:0.30, size:52 },
    { sel:'.portrait-frame img', rx:0.62, ry:0.74, size:40 },
    { sel:'.qr-block img',       rx:0.5,  ry:0.5,  size:60 },
    { sel:'.contact-qr img',     rx:0.5,  ry:0.5,  size:64 },
    { sel:'.hero-panel',         rx:0.9,  ry:0.14, size:38 },
  ];
  let points = [];
  function computeAnchors(){
    const visible = getActivePageEl();
    points = [];
    anchorDefs.forEach(d=>{
      const el = document.querySelector(d.sel);
      if(!el || !visible || !visible.contains(el)) return;
      const r = el.getBoundingClientRect();
      if(r.width === 0 && r.height === 0) return;
      points.push({
        ax: r.left + r.width*d.rx + window.scrollX,
        ay: r.top + r.height*d.ry + window.scrollY,
        size: d.size,
        phase: Math.random()*Math.PI*2,
        amp: 7 + Math.random()*7,
        x:0, y:0
      });
    });
    syncCanvasSize();
  }

  function draw(t){
    if(points.length){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      points.forEach(p=>{
        p.x = p.ax + Math.sin(t/1500 + p.phase) * p.amp;
        p.y = p.ay + Math.cos(t/1800 + p.phase) * p.amp * 0.7;
      });
      const THRESH = 480;
      for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
          const dx = points[i].x - points[j].x, dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx,dy);
          if(dist < THRESH){
            ctx.strokeStyle = `rgba(${TRACK_COLOR},${0.3*(1-dist/THRESH)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }
      points.forEach(p=>{
        const s = p.size;
        ctx.strokeStyle = `rgba(${TRACK_COLOR},0.85)`;
        ctx.lineWidth = 1.1;
        ctx.strokeRect(p.x - s/2, p.y - s/2, s, s);
        const c = 6;
        ctx.beginPath();
        ctx.moveTo(p.x - s/2, p.y - s/2 + c); ctx.lineTo(p.x - s/2, p.y - s/2); ctx.lineTo(p.x - s/2 + c, p.y - s/2);
        ctx.moveTo(p.x + s/2 - c, p.y + s/2); ctx.lineTo(p.x + s/2, p.y + s/2); ctx.lineTo(p.x + s/2, p.y + s/2 - c);
        ctx.strokeStyle = `rgba(${TRACK_COLOR},1)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const label = `${p.x.toFixed(2)}, ${p.y.toFixed(3)}`;
        ctx.font = '10px "JetBrains Mono", monospace';
        const tw = ctx.measureText(label).width;
        const lx = p.x + s/2 + 6, ly = p.y + 3;
        ctx.fillStyle = 'rgba(10,10,10,0.72)';
        ctx.fillRect(lx-3, ly-11, tw+6, 15);
        ctx.fillStyle = `rgba(${TRACK_COLOR},1)`;
        ctx.fillText(label, lx, ly);
      });
    }
    requestAnimationFrame(draw);
  }

  computeAnchors();
  window.addEventListener('resize', ()=> computeAnchors());
  window.addEventListener('load', ()=> computeAnchors());
  trackingHandle = { computeAnchors };
  requestAnimationFrame(draw);
}
initTracking();
