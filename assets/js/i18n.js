/* ============================================================
   I18N.JS — Từ điển Anh / Việt cho toàn bộ chữ tĩnh trên trang.

   CÁCH DÙNG
   Trong HTML, gắn data-i18n="khoá" vào phần tử. Khi đổi ngôn ngữ,
   applyLang() sẽ thay phần chữ bên trong bằng bản dịch tương ứng.

     <h2 data-i18n="about.h">About</h2>

   Chữ trong HTML là bản tiếng Anh — nếu JS chết hoặc bị chặn, trang
   vẫn đọc được bình thường bằng tiếng Anh.

   Muốn thay thuộc tính thay vì nội dung (title, alt, aria-label...):
     <a data-i18n-attr="title:nav.back" title="Back to home">

   NỘI DUNG DÀI (mô tả dự án, sự kiện) KHÔNG nằm ở đây — chúng nằm
   trong projects-data.js / promoter-data.js dưới dạng cặp field:
   `desc` (Anh) và `desc_vi` (Việt).
   ============================================================ */

const I18N = {
  en: {
    /* --- điều hướng, khung chung --- */
    "nav.work":            "WORK",
    "nav.work.sub":        "Selection / 2026",
    "nav.promoter":        "PROMOTER",
    "nav.promoter.sub":    "FPT University",
    "nav.back":            "Back to home",
    "nav.prev":            "← Prev",
    "nav.next":            "Next →",
    "nav.allProjects":     "All projects",
    "nav.viewBehance":     "View on Behance",
    "nav.viewProject":     "View project",

    /* --- công tắc --- */
    "ui.theme.toLight":    "LIGHT",
    "ui.theme.toDark":     "DARK",
    "ui.lang":             "VI",
    "ui.theme.title":      "Switch to light mode",
    "ui.lang.title":       "Chuyển sang tiếng Việt",

    /* --- màn chờ --- */
    "pre.label":           "LOADING REEL",
    "pre.left":            "QUANG TRUONG",
    "pre.right":           "PORTFOLIO 2026",

    /* --- băng chữ chạy --- */
    "tick.branding":       "BRANDING",
    "tick.eventVisual":    "<b>EVENT</b> VISUAL",
    "tick.motion":         "MOTION",
    "tick.uiux":           "UI / UX DESIGN",
    "tick.illus":          "DIGITAL ILLUSTRATION",
    "tick.character":      "CHARACTER DESIGN",
    "tick.packaging":      "PACKAGING",
    "tick.seeyou":         "SEE YOU SOON",
    "tick.admissions":     "ADMISSIONS",
    "tick.campusTour":     "CAMPUS <b>TOUR</b>",
    "tick.hosting":        "<b>EVENT</b> HOSTING",
    "tick.consulting":     "STUDENT CONSULTING",
    "tick.onsite":         "ON-SITE COORDINATION",

    /* --- hero --- */
    "hero.meta1":          "PORTFOLIO <b>2026</b>",
    "hero.meta2":          "BRANDING / EVENT VISUAL / MOTION",
    "hero.meta3":          "SELECTION / 2026",
    "hero.title":          "Port<br>folio 2026",
    "hero.role":           "By Quang Truong — Designer &amp; Creative Marketer",
    "hero.sub":            "I blend visual storytelling, digital design, and creative marketing into compelling brand experiences.",
    "hero.qr":             "SCAN →<br><b>BEHANCE PORTFOLIO</b><br>/254056325",

    /* --- about --- */
    "about.tag":           "01 / ABOUT",
    "about.h":             "About",
    "about.p1":            "I'm <b>Quang Truong</b>, a multidisciplinary designer and creative marketer exploring the intersection of UI/UX, digital illustration, and event experiences.",
    "about.p2":            "Based in Vietnam, my journey is shaped by a balance of technical structure and artistic exploration — from designing interactive user interfaces to character concepts.",
    "about.p3":            "I work across UI/UX design, digital painting, character design, and educational marketing. Influenced by dynamic eSports visuals, immersive storytelling, and disciplined execution, my goal is to create visual systems that are strategically clear, highly functional, and emotionally engaging.",
    "about.p4":            "<b>I love bold visual concepts, rich textures, character storytelling, and challenges that push creative boundaries.</b>",
    "about.k.education":   "Education",
    "about.k.freelancer":  "Freelancer",
    "about.k.fptu":        "FPT University",
    "about.k.based":       "Based in",
    "about.k.email":       "Email",
    "about.k.phone":       "Phone",
    "about.v.gdda":        "Graphic Design and Digital Art",
    "about.v.gdda2":       "Graphic Design &amp; Digital Art",
    "about.v.present":     "present",
    "about.v.officer":     "Admissions Officer",
    "about.v.officerNote": "2023 — present · Full-time Collaborator",
    "about.v.vietnam":     "Vietnam",

    /* --- projects --- */
    "work.tag":            "02 / SELECTED WORK",
    "work.h":              "Projects",

    /* --- experience --- */
    "exp.tag":             "03 / EXPERIENCE",
    "exp.h":               "Experience",
    "exp.when.present":    "PRESENT",
    "exp.when.since2023":  "2023 — PRESENT",
    "exp.when.education":  "EDUCATION",
    "exp.freelancer":      "Freelancer",
    "exp.freelancer.desc": "Brand identity, packaging, key visual and illustration work for independent clients — from logo construction through to print-ready artwork.",
    "exp.officer.org":     "FPT University — Full-time Collaborator",
    "exp.officer.d1":      "<b>Event visual design:</b> key visuals, backdrops, banners and standees for seminars, seasonal campaigns and award ceremonies.",
    "exp.officer.d2":      "<b>Event coordination:</b> planning and running Campus Tour and Experience Day programmes — logistics, staffing and on-site run-through. Over <b>3,000 students</b> hosted.",
    "exp.officer.d3":      "<b>Admissions communication:</b> career forums at more than <b>30 high schools</b> across Ho Chi Minh City, advising students and parents on majors, programmes and admission regulations.",

    /* --- skills --- */
    "skill.tag":           "04 / SKILLS",
    "skill.h":             "Technical skill",
    "skill.col.design":    "Design",
    "skill.col.software":  "Software",
    "skill.col.craft":     "Craft",
    "skill.d1":            "Brand identity &amp; logo",
    "skill.d2":            "Packaging design",
    "skill.d3":            "Event key visual",
    "skill.d4":            "Editorial &amp; layout",
    "skill.d5":            "UI/UX design",
    "skill.d6":            "Character design",
    "skill.c1":            "Digital painting",
    "skill.c2":            "Vector illustration",
    "skill.c3":            "Visual development",
    "skill.c4":            "Storyboard &amp; animatic",
    "skill.c5":            "Motion graphics",
    "skill.c6":            "Creative marketing",
    "skill.ai.use":        "Logo, packaging<br>&amp; vector artwork",
    "skill.ps.use":        "Key visual,<br>retouch &amp; matte",
    "skill.ae.use":        "Motion graphics<br>&amp; compositing",
    "skill.fig.use":       "UI layout<br>&amp; design systems",
    "skill.pr.use":        "Edit, grade<br>&amp; sound sync",

    /* --- contact --- */
    "contact.tag":         "05 / CONTACT",
    "contact.h":           "Thanks for<br>watching!",

    /* --- promoter --- */
    "pm.tag":              "06 / PROMOTER",
    "pm.h":                "Promoter at FPT",
    "pm.skills.tag":       "07 / SKILLS",
    "pm.skills.h":         "What I bring",
    "pm.footer":           "QUANG TRUONG / PROMOTER",

    /* --- trang chi tiết dự án --- */
    "proj.category":       "Category",
    "proj.year":           "Year",
    "proj.role":           "Role",
    "proj.index":          "Index",
    "proj.close":          "✕ CLOSE",
  },

  vi: {
    "nav.work":            "DỰ ÁN",
    "nav.work.sub":        "Tuyển chọn / 2026",
    "nav.promoter":        "TUYỂN SINH",
    "nav.promoter.sub":    "Đại học FPT",
    "nav.back":            "Về trang chủ",
    "nav.prev":            "← Trước",
    "nav.next":            "Sau →",
    "nav.allProjects":     "Tất cả dự án",
    "nav.viewBehance":     "Xem trên Behance",
    "nav.viewProject":     "Xem dự án",

    "ui.theme.toLight":    "SÁNG",
    "ui.theme.toDark":     "TỐI",
    "ui.lang":             "EN",
    "ui.theme.title":      "Chuyển sang nền sáng",
    "ui.lang.title":       "Switch to English",

    "pre.label":           "ĐANG TẢI",
    "pre.left":            "QUANG TRƯỜNG",
    "pre.right":           "PORTFOLIO 2026",

    "tick.branding":       "NHẬN DIỆN THƯƠNG HIỆU",
    "tick.eventVisual":    "THIẾT KẾ <b>SỰ KIỆN</b>",
    "tick.motion":         "ĐỒ HOẠ CHUYỂN ĐỘNG",
    "tick.uiux":           "THIẾT KẾ UI / UX",
    "tick.illus":          "MINH HOẠ SỐ",
    "tick.character":      "THIẾT KẾ NHÂN VẬT",
    "tick.packaging":      "BAO BÌ",
    "tick.seeyou":         "HẸN GẶP LẠI",
    "tick.admissions":     "TUYỂN SINH",
    "tick.campusTour":     "THAM QUAN <b>TRƯỜNG</b>",
    "tick.hosting":        "DẪN <b>CHƯƠNG TRÌNH</b>",
    "tick.consulting":     "TƯ VẤN HỌC SINH",
    "tick.onsite":         "ĐIỀU PHỐI TẠI CHỖ",

    "hero.meta1":          "PORTFOLIO <b>2026</b>",
    "hero.meta2":          "THƯƠNG HIỆU / SỰ KIỆN / CHUYỂN ĐỘNG",
    "hero.meta3":          "TUYỂN CHỌN / 2026",
    "hero.title":          "Port<br>folio 2026",
    "hero.role":           "Quang Trường — Thiết kế &amp; Marketing sáng tạo",
    "hero.sub":            "Tôi kết hợp kể chuyện bằng hình ảnh, thiết kế số và marketing sáng tạo thành những trải nghiệm thương hiệu có sức thuyết phục.",
    "hero.qr":             "QUÉT MÃ →<br><b>PORTFOLIO BEHANCE</b><br>/254056325",

    "about.tag":           "01 / GIỚI THIỆU",
    "about.h":             "Giới thiệu",
    "about.p1":            "Tôi là <b>Quang Trường</b>, một người làm thiết kế đa lĩnh vực và marketing sáng tạo, làm việc ở giao điểm của UI/UX, minh hoạ số và trải nghiệm sự kiện.",
    "about.p2":            "Sống và làm việc tại Việt Nam, con đường của tôi được định hình bởi sự cân bằng giữa cấu trúc kỹ thuật và khám phá nghệ thuật — từ dựng giao diện tương tác cho tới phác thảo nhân vật.",
    "about.p3":            "Tôi làm UI/UX, vẽ số, thiết kế nhân vật và marketing giáo dục. Chịu ảnh hưởng từ hình ảnh eSports, lối kể chuyện cuốn người xem vào và tinh thần làm việc có kỷ luật, mục tiêu của tôi là tạo ra những hệ thống hình ảnh rõ ràng về chiến lược, dùng được thật và chạm được cảm xúc.",
    "about.p4":            "<b>Tôi thích những ý tưởng hình ảnh táo bạo, chất liệu dày dặn, câu chuyện kể qua nhân vật, và những đề bài buộc mình phải đi xa hơn giới hạn quen thuộc.</b>",
    "about.k.education":   "Học vấn",
    "about.k.freelancer":  "Tự do",
    "about.k.fptu":        "Đại học FPT",
    "about.k.based":       "Đang ở",
    "about.k.email":       "Email",
    "about.k.phone":       "Điện thoại",
    "about.v.gdda":        "Thiết kế Mỹ thuật số",
    "about.v.gdda2":       "Thiết kế Mỹ thuật số",
    "about.v.present":     "đến nay",
    "about.v.officer":     "Chuyên viên Tuyển sinh",
    "about.v.officerNote": "2023 — nay · Cộng tác viên toàn thời gian",
    "about.v.vietnam":     "Việt Nam",

    "work.tag":            "02 / DỰ ÁN TIÊU BIỂU",
    "work.h":              "Dự án",

    "exp.tag":             "03 / KINH NGHIỆM",
    "exp.h":               "Kinh nghiệm",
    "exp.when.present":    "HIỆN TẠI",
    "exp.when.since2023":  "2023 — NAY",
    "exp.when.education":  "HỌC VẤN",
    "exp.freelancer":      "Làm việc tự do",
    "exp.freelancer.desc": "Nhận diện thương hiệu, bao bì, key visual và minh hoạ cho khách hàng độc lập — từ dựng logo cho tới file hoàn chỉnh sẵn sàng in.",
    "exp.officer.org":     "Đại học FPT — Cộng tác viên toàn thời gian",
    "exp.officer.d1":      "<b>Thiết kế hình ảnh sự kiện:</b> key visual, backdrop, banner và standee cho hội thảo, chiến dịch theo mùa và lễ trao giải.",
    "exp.officer.d2":      "<b>Điều phối sự kiện:</b> lên kế hoạch và vận hành chuỗi Campus Tour, Experience Day — hậu cần, nhân sự và chạy chương trình tại chỗ. Hơn <b>3.000 học sinh</b> đã tham gia.",
    "exp.officer.d3":      "<b>Truyền thông tuyển sinh:</b> diễn đàn hướng nghiệp tại hơn <b>30 trường THPT</b> ở TP.HCM, tư vấn học sinh và phụ huynh về ngành học, chương trình đào tạo và quy chế tuyển sinh.",

    "skill.tag":           "04 / KỸ NĂNG",
    "skill.h":             "Kỹ năng chuyên môn",
    "skill.col.design":    "Thiết kế",
    "skill.col.software":  "Phần mềm",
    "skill.col.craft":     "Tay nghề",
    "skill.d1":            "Nhận diện thương hiệu &amp; logo",
    "skill.d2":            "Thiết kế bao bì",
    "skill.d3":            "Key visual sự kiện",
    "skill.d4":            "Dàn trang &amp; ấn phẩm",
    "skill.d5":            "Thiết kế UI/UX",
    "skill.d6":            "Thiết kế nhân vật",
    "skill.c1":            "Vẽ số",
    "skill.c2":            "Minh hoạ vector",
    "skill.c3":            "Phát triển hình ảnh",
    "skill.c4":            "Storyboard &amp; animatic",
    "skill.c5":            "Đồ hoạ chuyển động",
    "skill.c6":            "Marketing sáng tạo",
    "skill.ai.use":        "Logo, bao bì<br>&amp; vẽ vector",
    "skill.ps.use":        "Key visual,<br>chỉnh sửa &amp; ghép",
    "skill.ae.use":        "Đồ hoạ chuyển động<br>&amp; dựng lớp",
    "skill.fig.use":       "Dàn giao diện<br>&amp; hệ thống thiết kế",
    "skill.pr.use":        "Dựng, chỉnh màu<br>&amp; khớp tiếng",

    "contact.tag":         "05 / LIÊN HỆ",
    "contact.h":           "Cảm ơn bạn<br>đã xem!",

    "pm.tag":              "06 / TUYỂN SINH",
    "pm.h":                "Công tác tuyển sinh tại FPT",
    "pm.skills.tag":       "07 / KỸ NĂNG",
    "pm.skills.h":         "Điều tôi mang lại",
    "pm.footer":           "QUANG TRƯỜNG / TUYỂN SINH",

    "proj.category":       "Hạng mục",
    "proj.year":           "Năm",
    "proj.role":           "Vai trò",
    "proj.index":          "Số thứ tự",
    "proj.close":          "✕ ĐÓNG",
  },
};

/* Ngôn ngữ đang dùng. Đọc lựa chọn đã lưu, không có thì mặc định tiếng Anh
   (quyết định có chủ đích: diện mạo gốc của trang là tiếng Anh). */
let LANG = (function(){
  try{ const v = localStorage.getItem('lang'); if(v === 'vi' || v === 'en') return v; }catch(e){}
  return 'en';
})();

function t(key){
  const d = I18N[LANG] || I18N.en;
  return (key in d) ? d[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
}

/**
 * Thay chữ cho mọi phần tử có data-i18n, và thuộc tính cho data-i18n-attr.
 * Gọi lại mỗi lần đổi ngôn ngữ hoặc mỗi lần sinh thêm nội dung mới.
 */
function applyLang(lang){
  if(lang) LANG = lang;
  document.documentElement.lang = LANG;
  try{ localStorage.setItem('lang', LANG); }catch(e){}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });

  // data-i18n-attr="title:nav.back" hoặc nhiều cặp: "title:a.b,aria-label:c.d"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if(attr && key) el.setAttribute(attr, t(key).replace(/<[^>]+>/g, ''));
    });
  });

  // Cho phần còn lại của trang biết mà dựng lại nội dung động
  document.dispatchEvent(new CustomEvent('langchange', { detail:{ lang: LANG } }));
}

/** Lấy trường theo ngôn ngữ: field('desc', obj) -> obj.desc_vi khi đang ở VI */
function tf(obj, field){
  if(LANG !== 'en'){
    const k = field + '_' + LANG;
    if(obj && obj[k]) return obj[k];
  }
  return obj ? obj[field] : '';
}
