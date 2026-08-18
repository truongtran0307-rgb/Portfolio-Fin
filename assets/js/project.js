/* ============================================================
   PROJECT.JS — Logic riêng cho project.html
   Cần nạp common.js VÀ projects-data.js TRƯỚC file này.
   ============================================================ */

const params = new URLSearchParams(location.search);
const initialSlug = params.get('p') || PROJECTS[0].slug;
let idx = PROJECTS.findIndex(p => p.slug === initialSlug);
if(idx < 0) idx = 0;

function isVideo(src){ return /\.mp4$/i.test(src); }

/**
 * Chọn class bố cục cho 1 ô gallery dựa trên TỈ LỆ + ĐỘ PHÂN GIẢI thật:
 *   is-wide  ngang (>= 1.5) VÀ đủ lớn (>= 1200px) -> chiếm cả 2 cột
 *   is-tall  dọc   (<= 0.85)                      -> 1 cột, thu hẹp cho cân
 *   is-sq    còn lại                              -> 1 cột
 *
 * Điều kiện độ phân giải quan trọng: các khung hình animation chỉ rộng 640px,
 * nếu kéo hết bề ngang sẽ bị phóng to vỡ nét — để chúng xếp 2 cột đẹp hơn.
 * Nhờ vậy ảnh luôn hiện trọn vẹn, căn giữa, không bị cắt xén.
 */
const WIDE_MIN_PX = 1200;
function ratioClass(w, h){
  const r = w / h;
  if(r >= 1.5 && w >= WIDE_MIN_PX) return 'is-wide';
  if(r <= 0.85) return 'is-tall';
  return 'is-sq';
}

/** Kích thước đã biết trước (từ MEDIA_SIZE) -> đặt khung ngay, không giật layout. */
function sizeOf(src){
  return (typeof MEDIA_SIZE !== 'undefined' && MEDIA_SIZE[src]) || null;
}

/** Dự phòng: ảnh nào chưa có trong MEDIA_SIZE thì đo sau khi tải xong. */
function applyGalleryLayout(){
  document.querySelectorAll('.g-item img').forEach(img=>{
    const item = img.closest('.g-item');
    if(item.dataset.sized === '1') return;
    const set = ()=>{
      if(!img.naturalWidth) return;
      item.classList.remove('is-wide','is-tall','is-sq');
      item.classList.add(ratioClass(img.naturalWidth, img.naturalHeight));
      item.dataset.sized = '1';
    };
    if(img.complete && img.naturalWidth) set();
    else img.addEventListener('load', set, { once:true });
  });
}

let currentGallery = [];
let revealObserver = null;

function initReveal(){
  if(revealObserver) revealObserver.disconnect();
  const targets = document.querySelectorAll('.reveal, .g-item, .meta-row, .tools');
  if(reduceMotion){
    targets.forEach(el=> el.classList.add('in'));
    return;
  }
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  targets.forEach(el=> revealObserver.observe(el));
}

function renderInner(i){
  const p = PROJECTS[i];
  // tf() lấy trường _vi khi đang ở tiếng Việt, không có thì rơi về bản tiếng Anh
  document.title = tf(p,'title') + ' — Quang Truong';
  document.getElementById('p-tag').textContent = tf(p,'plate');
  const titleEl = document.getElementById('p-title');
  titleEl.textContent = tf(p,'title');
  titleEl.dataset.split = '';   // cho phép splitChars chạy lại ở dự án kế tiếp
  document.getElementById('p-sub').textContent = tf(p,'sub');
  document.getElementById('p-desc').innerHTML = tf(p,'desc');

  document.getElementById('p-meta').innerHTML = `
    <div class="meta-row"><div class="k">${t('proj.category')}</div><div class="v">${tf(p,'kind')}</div></div>
    <div class="meta-row"><div class="k">${t('proj.year')}</div><div class="v">${p.year}</div></div>
    <div class="meta-row"><div class="k">${t('proj.role')}</div><div class="v">${tf(p,'role')}</div></div>
    <div class="meta-row"><div class="k">${t('proj.index')}</div><div class="v">${p.reel}</div></div>
  `;
  // Đặt tên biến là `tool`, KHÔNG phải `t` — `t` là hàm dịch, đặt trùng sẽ che
  // mất nó trong phạm vi hàm mũi tên này.
  document.getElementById('p-tools').innerHTML = p.tools.map(tool=>`<span>${tool}</span>`).join('');

  currentGallery = p.gallery.filter(src => !isVideo(src));
  const gal = document.getElementById('p-gallery');
  gal.innerHTML = p.gallery.map((src,gi)=>{
    const fig = String(gi+1).padStart(2,'0');
    const d = sizeOf(src);

    if(isVideo(src)){
      const poster = src.replace(/[^/]+\.mp4$/i, 'poster.jpg');
      const pd = sizeOf(poster);
      const dim = pd ? ` width="${pd[0]}" height="${pd[1]}"` : '';
      return `<div class="g-item is-video"><video src="${src}" poster="${poster}"${dim} controls playsinline preload="metadata"></video><div class="g-cap"><span>FIG. ${fig}</span><span>VIDEO</span></div></div>`;
    }

    const imgIdx = currentGallery.indexOf(src);
    const kind = /\.gif$/i.test(src) ? 'LOOP' : p.slug.toUpperCase();
    // width/height + class bố cục đặt sẵn từ MEDIA_SIZE -> trình duyệt giữ đúng
    // chỗ cho ảnh ngay từ đầu, không nhảy layout khi ảnh lazy-load xong.
    const cls  = d ? ' ' + ratioClass(d[0], d[1]) : '';
    const dim  = d ? ` width="${d[0]}" height="${d[1]}"` : '';
    const done = d ? ' data-sized="1"' : '';
    return `<div class="g-item${cls}" data-lb="${imgIdx}"${done}><img src="${src}"${dim} loading="lazy" decoding="async" alt="${tf(p,'title')} ${gi+1}"><div class="g-cap"><span>FIG. ${fig}</span><span>${kind}</span></div></div>`;
  }).join('');
  applyGalleryLayout();

  const strip = document.getElementById('proj-strip');
  strip.innerHTML = PROJECTS.map((pp,pi)=>`
    <a class="strip-tile${pi===i?' active':''}" href="project.html?p=${pp.slug}">
      <img src="${pp.gallery[0]}" alt="${tf(pp,'title')}">
      <div class="st-t">${tf(pp,'title')}</div>
    </a>`).join('');

  const prevI = (i - 1 + PROJECTS.length) % PROJECTS.length;
  const nextI = (i + 1) % PROJECTS.length;
  document.getElementById('prevBtn').href = `project.html?p=${PROJECTS[prevI].slug}`;
  document.getElementById('nextBtn').href = `project.html?p=${PROJECTS[nextI].slug}`;

  window.scrollTo(0,0);
  initReveal();
  bindLightboxTriggers();
  splitChars(document.getElementById('p-title'), 80);
}

function render(i){
  withViewTransition(()=> renderInner(i));
}

render(idx);

initProgressBar();
initCustomCursor('a, button, .g-item, .strip-tile');
initSwitches();       // công tắc sáng/tối + ngôn ngữ
initSmoothScroll();   // cuộn quán tính; tự bỏ qua trên điện thoại / máy giảm chuyển động

// Đổi ngôn ngữ -> dựng lại nội dung dự án đang mở
document.addEventListener('langchange', () => renderInner(idx));

// ---- lightbox ----
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
let lbIndex = 0;

function openLightbox(i){
  lbIndex = i;
  lbImg.src = currentGallery[lbIndex];
  lbCounter.textContent = `${lbIndex+1} / ${currentGallery.length}`;
  lightbox.classList.add('open');
  // Trả lại con trỏ hệ thống + khoá cuộn nền khi đang xem ảnh lớn
  document.documentElement.classList.add('lb-open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  lightbox.classList.remove('open');
  document.documentElement.classList.remove('lb-open');
  document.body.style.overflow = '';
}
function stepLightbox(delta){
  lbIndex = (lbIndex + delta + currentGallery.length) % currentGallery.length;
  lbImg.src = currentGallery[lbIndex];
  lbCounter.textContent = `${lbIndex+1} / ${currentGallery.length}`;
}
function bindLightboxTriggers(){
  document.querySelectorAll('.g-item[data-lb]').forEach(el=>{
    el.addEventListener('click', ()=> openLightbox(parseInt(el.dataset.lb,10)));
  });
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', ()=> stepLightbox(-1));
document.getElementById('lbNext').addEventListener('click', ()=> stepLightbox(1));
lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowLeft') stepLightbox(-1);
  if(e.key === 'ArrowRight') stepLightbox(1);
});
