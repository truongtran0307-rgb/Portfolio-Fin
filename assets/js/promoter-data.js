/* ============================================================
   PROMOTER-DATA.JS — Nội dung phần "Promoter at FPT" (tab 02)

   SỬA Ở ĐÂY LÀ ĐỦ. Trang tự dựng lại, không phải đụng vào index.html.

   ▸ PROMOTER_STATS — 4 con số ở đầu trang. Hiện là số ƯỚC LƯỢNG,
     hãy thay bằng số thật của bạn trước khi công bố.
   ▸ PROMOTER_EVENTS — mỗi sự kiện một khối. Thêm sự kiện mới = thêm
     một object vào mảng; ảnh bỏ vào assets/gallery/promoter/.
   ============================================================ */

const PROMOTER_INTRO =
  "Beyond the design desk, I represent FPT University on the ground — running admissions " +
  "seminars, coordinating campus events and talking directly with high-school students and " +
  "their parents about programmes, scholarships and career pathways.";

/* ⚠️ SỐ LIỆU MẪU — thay bằng số thật rồi hãy publish */
const PROMOTER_STATS = [
  { n: 3,    suffix: "",  label: "Years active",     note: "2023 — present" },
  { n: 20,   suffix: "+", label: "Events run",       note: "seminars & fairs" },
  { n: 2000, suffix: "+", label: "Students advised", note: "students & parents" },
  { n: 3,    suffix: "",  label: "Event series",     note: "featured below" },
];

const PROMOTER_EVENTS = [
  {
    idx: "01",
    title: "Campus Tour & Experience Day",
    meta: "2025 · HCM Campus · Host & Coordinator",
    desc: "Full-day campus programme for visiting high-school groups — welcome desk, " +
          "faculty seminars, facility tour and the closing group photo. I ran the room " +
          "during talks, guided cohorts between stops and kept the schedule on track.",
    tags: ["Event hosting", "Group guiding", "Run-through"],
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
    meta: "2025 · Regional Robotics Round · Event Support",
    desc: "Regional robotics competition hosted at the campus. I covered build-hall setup, " +
          "team check-in and arena-side coordination across the qualifying and final rounds, " +
          "then handled the award ceremony line-up.",
    tags: ["Venue setup", "Team check-in", "Stage coordination"],
    gallery: [
      "assets/gallery/promoter/ai3.jpg","assets/gallery/promoter/ai5.jpg",
      "assets/gallery/promoter/ai2.jpg","assets/gallery/promoter/ai4.jpg",
      "assets/gallery/promoter/ai1.jpg",
    ],
  },
  {
    idx: "03",
    title: "Ngày hội tuyển sinh",
    meta: "2024 — 2025 · Admissions Fair · Consultant",
    desc: "Admissions fairs across the city. Front-of-booth consulting: walking students and " +
          "parents through majors, admission routes and the scholarship scheme, one conversation " +
          "at a time, from opening to pack-down.",
    tags: ["1-on-1 consulting", "Booth operation", "Scholarship advising"],
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
