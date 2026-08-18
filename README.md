# Portfolio 2026 — Quang Truong

Trang portfolio cá nhân. Thiết kế đồ hoạ, hình ảnh sự kiện, chuyển động —
và công tác tuyển sinh tại Đại học FPT.

**Xem tại:** https://truongtran0307-rgb.github.io/Portfolio-Fin/

---

## Có gì trong này

Một trang tĩnh, không khung sườn, không bước dựng. Mở `index.html` là chạy.

```
index.html                trang chính — tab 01 WORK, tab 02 PROMOTER
project.html              trang chi tiết dự án, đọc ?p=<slug>

assets/css/base.css       biến màu (cả nền sáng lẫn tối), reset, con trỏ,
                          màn chờ, lightbox, công tắc — dùng chung 2 trang
assets/css/home.css       riêng index.html
assets/css/project.css    riêng project.html

assets/js/i18n.js         từ điển Anh/Việt + applyLang() + tf()
assets/js/common.js       hàm dùng chung, công tắc sáng-tối và ngôn ngữ
assets/js/projects-data.js  nội dung 6 dự án
assets/js/promoter-data.js  nội dung phần tuyển sinh + công tắc công bố
assets/js/home.js         logic trang chính
assets/js/project.js      logic trang chi tiết

assets/gallery/           ảnh từng dự án
assets/img/               ảnh chân dung, biểu tượng phần mềm, favicon, ảnh chia sẻ
```

## Sửa nội dung

Nội dung tách hẳn khỏi HTML — sửa một chỗ là xong.

| Muốn sửa gì | Mở file nào |
|---|---|
| Thêm/sửa/xoá dự án | `assets/js/projects-data.js` |
| Nội dung phần tuyển sinh, số liệu | `assets/js/promoter-data.js` |
| Chữ trên giao diện (nút, tiêu đề mục) | `assets/js/i18n.js` |
| Giới thiệu bản thân, kinh nghiệm, kỹ năng | `index.html` |

Thêm dự án mới: thêm một object vào mảng `PROJECTS`, đặt ảnh đại diện vào
`assets/img/tiles/<slug>.jpg` và ảnh chi tiết vào `assets/gallery/<slug>/`.
Trang tự sinh thẻ ở trang chủ và trang chi tiết, không phải đụng vào HTML.

## Hai ngôn ngữ

Chữ tiếng Anh nằm thẳng trong HTML, bản dịch nằm trong `i18n.js`. Nếu JS bị
chặn thì trang vẫn đọc được đầy đủ bằng tiếng Anh.

- Chữ tĩnh: gắn `data-i18n="khoá"` vào phần tử, thêm khoá vào cả bảng `en` và `vi`
- Nội dung dài: thêm trường `<tên>_vi` cạnh trường gốc trong file dữ liệu

## Sáng / tối

Toàn bộ màu đi qua biến CSS. Nền tối là mặc định (`:root`), nền sáng ghi đè
trong `html[data-theme="light"]`.

Riêng chữ nằm **đè lên ảnh** dùng `--on-media` và `--scrim` — hai biến này cố
ý không đảo theo chủ đề, vì ảnh vẫn là ảnh dù nền trang sáng hay tối.

## Chạy thử ở máy

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

Mở thẳng file bằng `file://` cũng được, nhưng một số trình duyệt chặn việc nạp
file JS theo cách đó.

## Xuất bản

Đẩy lên nhánh `main` là GitHub Pages tự dựng lại sau khoảng một hai phút.

---

© 2026 Quang Truong
