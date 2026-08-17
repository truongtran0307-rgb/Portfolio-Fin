/* ============================================================
   COMMON.JS — Tiện ích dùng chung cho cả index.html & project.html
   Nạp file này TRƯỚC home.js / project.js (khai báo const ở scope
   ngoài cùng của <script> cổ điển vẫn nhìn thấy được ở các
   <script> phía sau trong cùng trang).
   ============================================================ */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fineCursor   = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

/** Điều hướng có hiệu ứng crossfade (View Transitions API) nếu trình duyệt hỗ trợ.
 *  Dùng cho thay đổi NỘI DUNG TRONG CÙNG MỘT TRANG (vd: đổi dự án ở project.html).
 *  Việc chuyển sang trang html khác do @view-transition trong base.css lo,
 *  KHÔNG bọc bằng hàm này — trang cũ sẽ bị huỷ trước khi hiệu ứng kịp chạy. */
function withViewTransition(fn){
  if(!reduceMotion && document.startViewTransition){
    document.startViewTransition(fn);
  } else {
    fn();
  }
}

/**
 * Cuộn trang có quán tính (Lenis). Nạp từ CDN, KHÔNG chặn hiển thị:
 * mạng chặn hay CDN hỏng thì trang vẫn cuộn kiểu mặc định, không vỡ gì.
 * Bỏ qua trên điện thoại (cuộn cảm ứng gốc đã mượt và chính xác hơn)
 * và khi máy bật giảm chuyển động.
 * @param {Function} onFrame - gọi lại mỗi lần cuộn, để cập nhật hiệu ứng.
 */
function initSmoothScroll(onFrame){
  if(reduceMotion) return;
  if(window.matchMedia('(hover:none), (pointer:coarse)').matches) return;

  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js';
  s.async = true;
  s.onload = function(){
    const L = window.Lenis;
    if(typeof L !== 'function') return;
    const lenis = new L({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.6 });
    (function raf(t){ lenis.raf(t); requestAnimationFrame(raf); })();
    if(onFrame) lenis.on('scroll', onFrame);

    // Link neo trong trang (#work, #about…) cuộn mượt theo cùng nhịp
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const t = document.querySelector(a.getAttribute('href'));
        if(t){ e.preventDefault(); lenis.scrollTo(t, { offset:-20 }); }
      });
    });
  };
  s.onerror = function(){ /* im lặng: giữ nguyên cuộn mặc định */ };
  document.head.appendChild(s);
}

/**
 * Màn chờ đầu trang. Đếm theo SỐ ẢNH ĐÃ TẢI XONG THẬT, không phải đồng hồ giả —
 * mạng nhanh thì qua nhanh, không bắt người xem ngồi đợi vô cớ.
 * Luôn có chốt chặn thời gian để không bao giờ giữ người xem lại quá lâu.
 */
function initPreloader(maxWaitMs = 6000){
  const root = document.documentElement;
  const box  = document.getElementById('preloader');
  if(!box || !root.classList.contains('preloading')) return;

  const numEl = document.getElementById('preNum');
  const barEl = document.getElementById('preBar');
  const imgs  = Array.from(document.images);
  const total = imgs.length + 1;          // +1 cho sự kiện load của cả trang
  let done = 0, shown = 0, finished = false;

  const bump = () => { done++; };
  imgs.forEach(img => {
    if(img.complete) bump();
    else {
      img.addEventListener('load',  bump, { once:true });
      img.addEventListener('error', bump, { once:true });   // ảnh lỗi vẫn tính, tránh kẹt
    }
  });
  window.addEventListener('load', bump, { once:true });

  function finish(){
    if(finished) return;
    finished = true;
    if(numEl) numEl.textContent = '100';
    if(barEl) barEl.style.width = '100%';
    setTimeout(() => {
      root.classList.remove('preloading');
      root.classList.add('preloaded');
    }, reduceMotion ? 0 : 380);
  }

  (function tick(){
    if(finished) return;
    const target = done / total * 100;
    shown += (target - shown) * 0.12;      // số nhích dần cho mượt, không nhảy cóc
    const v = Math.min(Math.floor(shown), 99);
    if(numEl) numEl.textContent = String(v).padStart(3, '0');
    if(barEl) barEl.style.width = v + '%';
    if(done >= total && v >= 95) finish();
    else requestAnimationFrame(tick);
  })();

  setTimeout(finish, maxWaitMs);
}

/** Thanh tiến trình cuộn trang, gắn vào phần tử #progress. */
function initProgressBar(){
  const el = document.getElementById('progress');
  if(!el) return;
  function update(){
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    el.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', ()=> requestAnimationFrame(update), { passive:true });
  update();
  return update;
}

/**
 * Cursor tuỳ chỉnh (ring + dot theo chuột, phồng to khi hover phần tử tương tác).
 * @param {string} hoverSelector - CSS selector các phần tử cần cursor "phồng to" khi hover.
 */
function initCustomCursor(hoverSelector){
  if(!fineCursor) return;
  const ring = document.getElementById('cursorRing');
  const dot = document.getElementById('cursorDot');
  // Thiếu 1 trong 2 phần tử -> thoát TRƯỚC khi gắn .cc, để con trỏ hệ thống
  // không bị ẩn. Gắn .cc sớm như bản cũ sẽ làm mất hẳn con trỏ trên máy
  // không dựng được con trỏ thay thế.
  if(!ring || !dot) return;
  document.documentElement.classList.add('cc');

  // Máy bật "giảm chuyển động": vòng tròn bám tức thì, bỏ độ trễ đuổi theo.
  const ease = reduceMotion ? 1 : 0.18;
  let rx=0, ry=0, mx=0, my=0;
  window.addEventListener('mousemove', (e)=>{
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function loop(){
    rx += (mx - rx) * ease; ry += (my - ry) * ease;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest(hoverSelector)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest(hoverSelector)) ring.classList.remove('hover');
  });
}

/**
 * Kinetic typography: tách nội dung text của phần tử thành từng ký tự
 * (<span class="ch">) để CSS chạy animation blur-in so le.
 * Giữ nguyên thẻ <br> nếu có. Gọi lại được nhiều lần (idempotent).
 * @param {Element} el       phần tử chứa text cần tách
 * @param {number}  baseMs   độ trễ khởi điểm (ms) trước khi ký tự đầu chạy
 */
function splitChars(el, baseMs = 0){
  if(!el || el.dataset.split === '1') return;
  el.dataset.split = '1';
  const lines = el.innerHTML.split(/<br\s*\/?>/i);
  let n = 0;
  el.innerHTML = lines.map(line => {
    // normalize('NFC') gộp dấu tiếng Việt vào 1 ký tự — tránh vỡ dấu khi
    // nội dung được dán từ Word/Google Docs (dạng tách dấu NFD).
    const plain = line.replace(/<[^>]*>/g, '').normalize('NFC');
    return '<span class="kin">' + Array.from(plain).map(c =>
      `<span class="ch" style="--i:${n++}">${c === ' ' ? '&nbsp;' : c}</span>`
    ).join('') + '</span>';
  }).join('<br>');
  el.style.setProperty('--base', baseMs + 'ms');
}

/**
 * Hiệu ứng GIẢI MÃ (decode / scramble): chữ chạy loạn ký tự rồi hiện dần
 * từ trái sang phải. Giữ nguyên xuống dòng <br> và khoảng trắng.
 *
 * @param {Element} el        phần tử chứa text
 * @param {number}  duration  thời lượng 1 lần giải mã (ms)
 * @param {number}  loopMs    nếu > 0 thì lặp lại sau mỗi khoảng này (ms)
 */
function decodeText(el, duration = 900, loopMs = 0){
  if(!el) return;
  const GLYPHS = "!<>-_\\/[]{}—=+*^?#§±×÷≠∆01";
  // Lưu nội dung gốc 1 lần duy nhất để mỗi vòng lặp đều giải mã đúng chữ đó
  if(!el.dataset.decodeSrc){
    el.dataset.decodeSrc = el.innerHTML;
  }
  const lines = el.dataset.decodeSrc
    .split(/<br\s*\/?>/i)
    .map(l => l.replace(/<[^>]*>/g, '').normalize('NFC'));

  if(reduceMotion){
    el.innerHTML = lines.join('<br>');
    return;
  }

  const total = lines.reduce((n, l) => n + l.length, 0);
  const frames = Math.max(1, Math.round(duration / 40));
  let frame = 0;

  clearInterval(el._decodeTimer);
  el._decodeTimer = setInterval(() => {
    frame++;
    const revealCount = Math.floor((frame / frames) * total);
    let seen = 0;
    el.innerHTML = lines.map(line =>
      Array.from(line).map(ch => {
        const i = seen++;
        if(ch === ' ') return ' ';
        if(i < revealCount) return ch;
        return `<span style="opacity:.55">${GLYPHS[Math.floor(Math.random()*GLYPHS.length)]}</span>`;
      }).join('')
    ).join('<br>');

    if(frame >= frames){
      clearInterval(el._decodeTimer);
      el.innerHTML = lines.join('<br>');
    }
  }, 40);

  // Lặp lại theo chu kỳ
  if(loopMs > 0 && !el._decodeLoop){
    el._decodeLoop = setInterval(() => decodeText(el, duration, 0), loopMs);
  }
}

/**
 * Chạy splitChars cho phần tử khi nó cuộn vào khung nhìn (chỉ 1 lần).
 */
function kineticOnView(selector, baseMs = 0){
  const els = document.querySelectorAll(selector);
  if(!els.length) return;
  if(reduceMotion){ return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        splitChars(entry.target, baseMs);
        io.unobserve(entry.target);
      }
    });
  }, { threshold:.35 });
  els.forEach(el=> io.observe(el));
}
