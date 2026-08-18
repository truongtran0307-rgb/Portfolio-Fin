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
const PROMOTER_PUBLISHED = true;

const PROMOTER_INTRO_VI =
  "Ngoài bàn thiết kế, tôi phụ trách hoạt động tuyển sinh của Đại học FPT trên địa bàn TP.HCM — lên kế hoạch và dẫn các chương trình trải nghiệm tại trường, tư vấn học sinh và phụ huynh về ngành học cùng quy chế tuyển sinh tại các diễn đàn hướng nghiệp và ngày hội, đồng thời điều phối hậu cần, nhân sự và truyền thông cho từng sự kiện.";

const PROMOTER_INTRO =
  "Beyond the design desk, I run admissions activity for FPT University across Ho Chi Minh City — " +
  "planning and hosting campus experience programmes, advising students and parents on majors and " +
  "admission regulations at career forums and fairs, and coordinating the logistics, staffing and " +
  "comms behind each event.";

const PROMOTER_STATS = [
  { n: 30,   suffix: "+", label: "High schools", label_vi: "Trường THPT", note: "across Ho Chi Minh City", note_vi: "trên địa bàn TP.HCM" },
  { n: 3000, suffix: "+", label: "Students hosted", label_vi: "Học sinh tham gia", note: "campus tour & experience day", note_vi: "campus tour & experience day" },
  { n: 3,    suffix: "",  label: "Years active", label_vi: "Năm hoạt động", note: "2023 — present", note_vi: "2023 — nay" },
  { n: 3,    suffix: "",  label: "Event series", label_vi: "Chuỗi sự kiện", note: "featured below", note_vi: "trình bày bên dưới" },
];

/* Bốn mảng kỹ năng, hiện ở cuối phần Promoter */
const PROMOTER_SKILLS = [
  { t: "Consulting",
    t_vi: "Tư vấn",
    d: "One-on-one advising for students and parents on majors, programmes and career pathways.",
    d_vi: "Tư vấn trực tiếp cho học sinh và phụ huynh về ngành học, chương trình đào tạo và lộ trình nghề nghiệp." },
  { t: "Event coordination",
    t_vi: "Điều phối sự kiện",
    d: "Planning, logistics, staffing and on-site run-through for admissions programmes.",
    d_vi: "Lên kế hoạch, hậu cần, nhân sự và chạy chương trình tại chỗ cho các hoạt động tuyển sinh." },
  { t: "Public speaking",
    t_vi: "Thuyết trình",
    d: "Hosting career forums and presenting to school-hall audiences.",
    d_vi: "Dẫn các diễn đàn hướng nghiệp và trình bày trước hội trường đông người." },
  { t: "Admissions expertise",
    t_vi: "Am hiểu tuyển sinh",
    d: "Working knowledge of admission regulations and the full programme catalogue.",
    d_vi: "Nắm chắc quy chế tuyển sinh và toàn bộ danh mục ngành đào tạo." },
];

const PROMOTER_EVENTS = [
  {
    idx: "01",
    title: "FPTU Experience Day",
    meta: "2025 · HCM Campus · Planner & Host",
    desc: "A career-orientation series built around one idea: <b>a day in the life of an FPTU " +
          "student</b>. Grade-12 groups sit in on trial classes, explore majors hands-on and " +
          "move through the campus culture spaces — welcome desk, faculty seminars, facility " +
          "tour, closing group photo. I planned the run-of-show, hosted the hall during talks " +
          "and guided cohorts between stops. <b>Over 3,000 students</b> have been through it.",
    title_vi: "FPTU Experience Day",
    meta_vi: "2025 · Cơ sở TP.HCM · Lên kế hoạch & Dẫn chương trình",
    desc_vi: "Chuỗi chương trình hướng nghiệp xoay quanh một ý tưởng: <b>một ngày làm sinh viên " +
             "Đại học FPT</b>. Học sinh lớp 12 ngồi học thử, khám phá ngành nghề tận tay và đi qua " +
             "các không gian văn hoá của trường — bàn đón tiếp, hội thảo chuyên ngành, tham quan " +
             "cơ sở vật chất, chụp ảnh tập thể khép lại. Tôi lên kịch bản chương trình, dẫn hội " +
             "trường trong các phần chia sẻ và đưa từng đoàn di chuyển giữa các điểm. " +
             "<b>Hơn 3.000 học sinh</b> đã tham gia.",
    tags: ["Programme planning", "Event hosting", "Group guiding"],
    tags_vi: ["Lên kế hoạch chương trình", "Dẫn chương trình", "Dẫn đoàn"],
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
    title: "FPTU AI & Robotics Challenge",
    meta: "2025 · National Competition · Coordinator",
    desc: "FPT University's <b>national technology competition for high-school students</b> — " +
          "a proving ground where teams apply AI and robotics to real problems rather than " +
          "just study them. I handled logistics and staffing on the regional round: build-hall " +
          "setup, team check-in, arena-side coordination through qualifying and finals, then " +
          "the award ceremony line-up.",
    title_vi: "FPTU AI & Robotics Challenge",
    meta_vi: "2025 · Cuộc thi toàn quốc · Điều phối",
    desc_vi: "<b>Cuộc thi công nghệ toàn quốc dành cho học sinh THPT</b> do Đại học FPT tổ chức — " +
             "sân chơi để các đội ứng dụng AI và robotics vào bài toán thực tế chứ không dừng ở " +
             "học lý thuyết. Tôi phụ trách hậu cần và nhân sự ở vòng khu vực: dựng khu lắp ráp, " +
             "đón đăng ký các đội, điều phối sát sàn đấu qua vòng loại và chung kết, rồi sắp xếp " +
             "đội hình lễ trao giải.",
    tags: ["Logistics", "Staffing", "Stage coordination"],
    tags_vi: ["Hậu cần", "Nhân sự", "Điều phối sân khấu"],
    gallery: [
      "assets/gallery/promoter/ai3.jpg","assets/gallery/promoter/ai5.jpg",
      "assets/gallery/promoter/ai2.jpg","assets/gallery/promoter/ai4.jpg",
      "assets/gallery/promoter/ai1.jpg",
    ],
  },
  {
    idx: "03",
    title: "Admissions Fairs",
    meta: "2024 — 2025 · Career Forums · FPTU Booth Lead",
    desc: "Two fairs anchor the admissions calendar. <b>March</b> brings the career-orientation " +
          "fair — majors, pathways and early-admission routes. <b>Early July</b>, once exam " +
          "results land, brings the preference-selection fair, where the questions turn urgent " +
          "and specific. Both are hosted on Bách Khoa campuses alongside booths from other " +
          "universities; I run FPTU's. Add the school-level career forums — <b>more than 30 " +
          "high schools</b> across Ho Chi Minh City — and it is one conversation at a time, " +
          "from opening to pack-down.",
    title_vi: "Ngày hội tuyển sinh",
    meta_vi: "2024 — 2025 · Diễn đàn hướng nghiệp · Phụ trách gian FPTU",
    desc_vi: "Hai ngày hội định nhịp cả mùa tuyển sinh. <b>Tháng 3</b> là ngày hội tư vấn tuyển " +
             "sinh — hướng nghiệp: ngành học, lộ trình và các phương thức xét tuyển sớm. " +
             "<b>Đầu tháng 7</b>, ngay sau khi có điểm thi, là ngày hội lựa chọn nguyện vọng, lúc " +
             "câu hỏi trở nên gấp gáp và cụ thể hơn hẳn. Cả hai đều tổ chức tại cơ sở Bách Khoa " +
             "cùng gian hàng của nhiều trường khác; tôi phụ trách gian của FPTU. Cộng thêm các " +
             "diễn đàn hướng nghiệp tại trường — <b>hơn 30 trường THPT</b> ở TP.HCM — tất cả là " +
             "từng cuộc trò chuyện một, từ lúc mở cửa tới lúc dọn gian.",
    tags: ["1-on-1 consulting", "Booth operation", "Admission regulations"],
    tags_vi: ["Tư vấn 1-1", "Vận hành gian hàng", "Quy chế tuyển sinh"],
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
