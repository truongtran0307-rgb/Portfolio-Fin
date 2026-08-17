/* ============================================================
   PROJECTS-DATA.JS — Nội dung các dự án hiển thị ở project.html.
   Ảnh lấy 100% từ folder gốc "Ảnh port" do chủ sở hữu cung cấp.
   Đây là NƠI DUY NHẤT cần sửa khi thêm/sửa/xoá một dự án.

   Mỗi item cần:
     slug     — khớp ?p=slug VÀ tên ảnh tile: assets/img/tiles/<slug>.jpg
     reel     — số thứ tự hiển thị trên tile
     plate    — nhãn nhóm ở trang chi tiết
     title    — tiêu đề lớn
     sub      — dòng phụ
     kind     — nhóm: Study project / Personal project / FPT University project
     year, role, tools[]
     desc     — mô tả (HTML)
     gallery[]— ảnh (.jpg/.gif) hoặc video (.mp4), đường dẫn tính từ project.html
                Bố cục lưới tự động theo tỉ lệ ảnh — không cần khai báo thêm.
   ============================================================ */

const PROJECTS = [
  {
    slug:"drawing", reel:"01", plate:"STUDY PROJECT / DRAWING",
    title:"Drawing", sub:"Digital Painting & Environment Art",
    kind:"Study project", year:"2024 — 2026", role:"Illustrator",
    tools:["Photoshop","Procreate"],
    desc:"<p><b>Digital painting</b> and environment art — building light, atmosphere and cinematic depth inside a single still frame.</p><p>The series moves from warm fantasy interiors and misty mountain valleys to burning courtyards, dragon encounters, cathedral halls and icy cavern temples.</p>",
    gallery:[
      "assets/gallery/drawing/img1.jpg","assets/gallery/drawing/img2.jpg","assets/gallery/drawing/img3.jpg",
      "assets/gallery/drawing/img4.jpg","assets/gallery/drawing/img5.jpg","assets/gallery/drawing/img6.jpg",
      "assets/gallery/drawing/img7.jpg","assets/gallery/drawing/img8.jpg","assets/gallery/drawing/img9.jpg"
    ]
  },

  {
    slug:"animation", reel:"02", plate:"STUDY PROJECT / ANIMATION",
    title:"Animation", sub:"Frames from an animated short",
    kind:"Study project", year:"2024 — 2026", role:"Visual Development & Motion",
    tools:["After Effects","Photoshop","Premiere Pro"],
    desc:"<p>One of the animation projects for my course — built on a tight <b>red &amp; blue</b> palette, neon rim light and bold silhouettes.</p><p>Surreal eye motifs, reaching hands, spiral corridors and stair geometry carry the tension across each frame. Includes the character turntable and the full animated short.</p>",
    gallery:[
      "assets/gallery/animation/showreel.mp4",
      "assets/gallery/animation/img1.jpg","assets/gallery/animation/img2.jpg","assets/gallery/animation/img3.jpg",
      "assets/gallery/animation/img4.jpg","assets/gallery/animation/img5.jpg","assets/gallery/animation/img6.jpg",
      "assets/gallery/animation/img7.jpg","assets/gallery/animation/img8.jpg","assets/gallery/animation/img9.jpg",
      "assets/gallery/animation/turntable.gif"
    ]
  },

  {
    slug:"illustration", reel:"03", plate:"STUDY PROJECT",
    title:"Illustration", sub:"Vector Illustration & Icon System",
    kind:"Study project", year:"2023", role:"Illustrator",
    tools:["Illustrator"],
    desc:"<p>Flat <b>vector illustration</b> and icon systems — an 80-piece themed icon grid, editorial food illustration, an architectural study and a stylised character portrait.</p><p>Limited palettes, confident shape language and consistency held across a full set.</p>",
    gallery:[
      "assets/gallery/illustration/img1.jpg","assets/gallery/illustration/img2.jpg",
      "assets/gallery/illustration/img3.jpg","assets/gallery/illustration/img4.jpg"
    ]
  },

  {
    slug:"branding", reel:"04", plate:"STUDY PROJECT / BRANDING",
    title:"Travipha", sub:"Brand Identity & Packaging",
    kind:"Study project", year:"2023 — 2024", role:"Brand & Packaging Designer",
    tools:["Illustrator","Photoshop"],
    desc:"<p><b>TRAVIPHA</b> — the pioneer brand elevating the unique soursop fruit from the saline-alkaline island of Tân Phú Đông into a premium herbal tea line that has achieved the national <b>OCOP 5 sao</b> certification.</p><p>Combining traditional artisanal processing with modern heat drying, cold drying and spherical rotary drying, each product is free of preservatives and artificial flavourings — embodying a heritage story of the Nam Bộ river region.</p><p>Deliverables: logo construction, colour system, moodboard, stationery, packaging illustration and dielines.</p>",
    gallery:[
      "assets/gallery/branding/img1.jpg","assets/gallery/branding/img2.jpg",
      "assets/gallery/branding/img3.jpg","assets/gallery/branding/img4.jpg"
    ]
  },

  {
    slug:"shortfilm", reel:"05", plate:"PERSONAL PROJECT",
    title:"Lưu Giữ", sub:"Short Film Key Visual — Vinawood Production",
    kind:"Personal project", year:"2023", role:"Key Visual & Poster Designer",
    tools:["Photoshop","Illustrator"],
    desc:"<p>Key visual and poster set for the short film <b>“Lưu Giữ”</b> by Vinawood Production — premiered <b>20.07.2023</b> at Hall C, FPT University HCMC.</p><p>A fractured-portrait concept: torn paper, split colour grading and shifted frames express memory breaking apart. Extended into a character poster series and an event banner.</p>",
    gallery:[
      "assets/gallery/shortfilm/img1.jpg","assets/gallery/shortfilm/img2.jpg",
      "assets/gallery/shortfilm/img3.jpg","assets/gallery/shortfilm/img4.jpg","assets/gallery/shortfilm/img5.jpg"
    ]
  },

  {
    slug:"fpt", reel:"06", plate:"FPT UNIVERSITY PROJECT",
    title:"FPT University", sub:"Event Key Visual & Campaign Design",
    kind:"FPT University project", year:"2023 — 2026", role:"Event Visual Designer",
    tools:["Photoshop","Illustrator","After Effects"],
    desc:"<p>Event key visuals and campaign artwork produced as <b>Admissions Officer</b> at FPT University — seminars, seasonal campaigns and award ceremonies.</p><p>Covers <b>GENZ 24H</b>, <b>Chuyên đề Kỹ Năng</b>, <b>Women in Tech</b>, <b>Hội Trại Xuân Bính Ngọ</b>, and the full <b>THE FIRE — Student Ambassador Recognition Ceremony</b> set: main KV, poster, agenda, invitation, speaker card and ambassador line-up.</p>",
    gallery:[
      "assets/gallery/fpt/img1.jpg","assets/gallery/fpt/img2.jpg","assets/gallery/fpt/img3.jpg","assets/gallery/fpt/img4.jpg",
      "assets/gallery/fpt/img5.jpg","assets/gallery/fpt/img6.jpg","assets/gallery/fpt/img7.jpg",
      "assets/gallery/fpt/img8.jpg","assets/gallery/fpt/img9.jpg","assets/gallery/fpt/img10.jpg"
    ]
  },
];

/* ------------------------------------------------------------
   MEDIA_SIZE — kích thước thật (w,h) của từng file trong gallery.
   Dùng để đặt sẵn khung ảnh + chọn bố cục lưới NGAY khi render,
   tránh giật layout khi ảnh lazy-load xong mới biết tỉ lệ.
   Chạy lại script tạo ảnh thì nhớ cập nhật bảng này.
   ------------------------------------------------------------ */
const MEDIA_SIZE = {
  "assets/gallery/animation/img1.jpg":[640,360],
  "assets/gallery/animation/img2.jpg":[640,360],
  "assets/gallery/animation/img3.jpg":[640,360],
  "assets/gallery/animation/img4.jpg":[640,360],
  "assets/gallery/animation/img5.jpg":[640,360],
  "assets/gallery/animation/img6.jpg":[640,360],
  "assets/gallery/animation/img7.jpg":[640,360],
  "assets/gallery/animation/img8.jpg":[640,360],
  "assets/gallery/animation/img9.jpg":[640,360],
  "assets/gallery/animation/poster.jpg":[1280,720],
  "assets/gallery/animation/turntable.gif":[484,456],
  "assets/gallery/branding/img1.jpg":[1700,957],
  "assets/gallery/branding/img2.jpg":[1700,957],
  "assets/gallery/branding/img3.jpg":[1700,957],
  "assets/gallery/branding/img4.jpg":[1700,957],
  "assets/gallery/drawing/img1.jpg":[1700,957],
  "assets/gallery/drawing/img2.jpg":[1700,948],
  "assets/gallery/drawing/img3.jpg":[1700,1275],
  "assets/gallery/drawing/img4.jpg":[1700,1275],
  "assets/gallery/drawing/img5.jpg":[1700,1169],
  "assets/gallery/drawing/img6.jpg":[1700,1276],
  "assets/gallery/drawing/img7.jpg":[1700,1275],
  "assets/gallery/drawing/img8.jpg":[1700,1275],
  "assets/gallery/drawing/img9.jpg":[1202,1700],
  "assets/gallery/fpt/img1.jpg":[1700,850],
  "assets/gallery/fpt/img10.jpg":[1700,959],
  "assets/gallery/fpt/img2.jpg":[1700,956],
  "assets/gallery/fpt/img3.jpg":[1700,956],
  "assets/gallery/fpt/img4.jpg":[1700,850],
  "assets/gallery/fpt/img5.jpg":[1700,957],
  "assets/gallery/fpt/img6.jpg":[956,1700],
  "assets/gallery/fpt/img7.jpg":[961,1700],
  "assets/gallery/fpt/img8.jpg":[1700,1695],
  "assets/gallery/fpt/img9.jpg":[1700,755],
  "assets/gallery/illustration/img1.jpg":[1476,1700],
  "assets/gallery/illustration/img2.jpg":[1314,1700],
  "assets/gallery/illustration/img3.jpg":[842,1191],
  "assets/gallery/illustration/img4.jpg":[1202,1700],
  "assets/gallery/shortfilm/img1.jpg":[1204,1700],
  "assets/gallery/shortfilm/img2.jpg":[1700,956],
  "assets/gallery/shortfilm/img3.jpg":[1360,1700],
  "assets/gallery/shortfilm/img4.jpg":[1360,1700],
  "assets/gallery/shortfilm/img5.jpg":[1360,1700]
};
