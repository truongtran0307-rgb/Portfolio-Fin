/* ============================================================
   PROMOTER-DATA.JS — Nội dung phần "Promoter at FPT" (tab 02)

   SỬA Ở ĐÂY LÀ ĐỦ. Trang tự dựng lại, không phải đụng vào index.html.

   ▸ PROMOTER_STATS — 4 con số ở đầu trang. Hiện là số ƯỚC LƯỢNG,
     hãy thay bằng số thật của bạn trước khi công bố.
   ▸ PROMOTER_EVENTS — mỗi sự kiện một khối. Thêm sự kiện mới = thêm
     một object vào mảng; ảnh bỏ vào assets/gallery/promoter/.
   ============================================================ */

/* ╔══════════════════════════════════════════════════════════════════╗
   ║  CÔNG TẮC CÔNG BỐ                                                ║
   ║                                                                  ║
   ║    false  → ẩn hoàn toàn. Khách vào web không thấy tab 02,       ║
   ║             không tải ảnh, không có cách nào mở ra.              ║
   ║    true   → hiện tab 02 PROMOTER cho mọi người xem.              ║
   ║                                                                  ║
   ║  Khi đã sửa xong số liệu + mô tả bên dưới, đổi false → true,     ║
   ║  lưu file, rồi đẩy lên GitHub là trang tự hiện ra.               ║
   ╚══════════════════════════════════════════════════════════════════╝ */
const PROMOTER_PUBLISHED = false;

const PROMOTER_INTRO =
  "Beyond the design desk, I run admissions activity for FPT University across Ho Chi Minh City — " +
  "planning and hosting in-school programmes, advising students and parents on majors and admission " +
  "regulations at career forums, and coordinating the logistics, staffing and comms behind each event.";

const PROMOTER_STATS = [
  { n: 30,   suffix: "+", label: "High schools",     note: "across Ho Chi Minh City" },
  { n: 3000, suffix: "+", label: "Students hosted",  note: "campus tour & experience day" },
  { n: 3,    suffix: "",  label: "Years active",     note: "2023 — present" },
  { n: 3,    suffix: "",  label: "Event series",     note: "featured below" },
];

/* Bốn mảng kỹ năng, hiện ở cuối phần Promoter */
const PROMOTER_SKILLS = [
  { t: "Consulting",        d: "One-on-one advising for students and parents on majors, programmes and career pathways." },
  { t: "Event coordination", d: "Planning, logistics, staffing and on-site run-through for admissions programmes." },
  { t: "Public speaking",    d: "Hosting career forums and presenting to school-hall audiences." },
  { t: "Admissions expertise", d: "Working knowledge of admission regulations and the full programme catalogue." },
];

const PROMOTER_EVENTS = [
  {
    idx: "01",
    title: "Campus Tour & Experience Day",
    meta: "2025 · HCM Campus · Planner & Host",
    desc: "Our flagship in-school experience programme, built to let high-school students " +
          "spend a full day inside the university — welcome desk, faculty seminars, facility " +
          "tour and closing group photo. I planned the run-of-show, hosted the hall during " +
          "talks and guided cohorts between stops. <b>Over 3,000 students</b> have been through it.",
    tags: ["Programme planning", "Event hosting", "Group guiding"],
    gallery: [
      "assets/gallery/promoter/ct6.jpg","assets/gallery/promoter/ct4.jpg",
      "assets/gallery/promoter/ct5.jpg","assets/gallery/promoter/ct2.jpg",
      "assets/gallery/promoter/ct3.jpg","assets/gallery/promoter/ct8.jpg",
      "assets/gallery/promoter/ct7.jpg","assets/gallery/promoter/ct1.jpg",
      "assets/gallery/promoter/ct9.jpg","assets/gallery/promoter/ct10.jpg",
    ],
  },
  {
    idx: "02",
    title: "AI & Robotics Challenge",
    meta: "2025 · Regional Robotics Round · Coordinator",
    desc: "Regional robotics competition hosted on campus, drawing school teams from across " +
          "the city. I handled logistics and staffing — build-hall setup, team check-in, " +
          "arena-side coordination through the qualifying and final rounds, then the award " +
          "ceremony line-up.",
    tags: ["Logistics", "Staffing", "Stage coordination"],
    gallery: [
      "assets/gallery/promoter/ai3.jpg","assets/gallery/promoter/ai5.jpg",
      "assets/gallery/promoter/ai2.jpg","assets/gallery/promoter/ai4.jpg",
      "assets/gallery/promoter/ai1.jpg",
    ],
  },
  {
    idx: "03",
    title: "Ngày hội tuyển sinh",
    meta: "2024 — 2025 · Career Forums · Consultant",
    desc: "Career forums and admissions fairs held at high schools across Ho Chi Minh City — " +
          "<b>more than 30 schools</b> to date. Front-of-booth consulting: walking students and " +
          "parents through majors, admission regulations and the scholarship scheme, one " +
          "conversation at a time, from opening to pack-down.",
    tags: ["1-on-1 consulting", "Public speaking", "Admission regulations"],
    gallery: [
      "assets/gallery/promoter/nh1.jpg","assets/gallery/promoter/nh3.jpg",
      "assets/gallery/promoter/nh2.jpg","assets/gallery/promoter/nh4.jpg",
    ],
  },
];

/* Kích thước thật của ảnh -> đặt sẵn width/height, trang không giật khi ảnh tải xong */
const PROMOTER_SIZE = {
  "assets/gallery/promoter/ai1.jpg":[1700,947],  "assets/gallery/promoter/ai2.jpg":[1700,1133],
  "assets/gallery/promoter/ai3.jpg":[1700,1133], "assets/gallery/promoter/ai4.jpg":[1700,1133],
  "assets/gallery/promoter/ai5.jpg":[1700,1133],
  "assets/gallery/promoter/ct1.jpg":[1700,1133], "assets/gallery/promoter/ct2.jpg":[1700,956],
  "assets/gallery/promoter/ct3.jpg":[1700,1133], "assets/gallery/promoter/ct4.jpg":[1700,1133],
  "assets/gallery/promoter/ct5.jpg":[1700,1133], "assets/gallery/promoter/ct6.jpg":[1700,1133],
  "assets/gallery/promoter/ct7.jpg":[1700,1133], "assets/gallery/promoter/ct8.jpg":[1700,1133],
  "assets/gallery/promoter/ct9.jpg":[1700,926],  "assets/gallery/promoter/ct10.jpg":[1700,1091],
  "assets/gallery/promoter/nh1.jpg":[1700,1133], "assets/gallery/promoter/nh2.jpg":[1700,1133],
  "assets/gallery/promoter/nh3.jpg":[1700,1133], "assets/gallery/promoter/nh4.jpg":[1700,1133],
};
