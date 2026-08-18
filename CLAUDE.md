# Portfolio-Web — quy tắc làm việc

## Quy trình bắt buộc

Mọi thay đổi đi theo đúng bốn bước này, không được nhảy cóc:

1. **Fiin nêu yêu cầu / cập nhật nội dung.**
2. **Claude làm ra bản thử** — sửa code, chạy kiểm tra, rồi báo lại đã làm gì.
3. **Fiin xem và đánh giá** — giữ nguyên, hay sửa tiếp. Có thể lặp lại bước 2–3 nhiều vòng.
4. **Claude hỏi:** "Push lên GitHub chứ?" — và **chỉ push khi Fiin nói đồng ý.**

**Tuyệt đối không tự ý `git push`.** Kể cả khi thay đổi rất nhỏ, kể cả khi
Fiin đã đồng ý push ở lượt trước — mỗi lần push là một lần hỏi riêng.
Commit trong máy thì được, nhưng đẩy lên GitHub thì phải xin phép.

## Thông tin repo

- GitHub: `truongtran0307-rgb/Portfolio-Fin`, nhánh `main`
- Trang chạy tại: https://truongtran0307-rgb.github.io/Portfolio-Fin/
- Thư mục làm việc: `Study/Portfolio-Web/` (bản dựng ở `outputs/v6/` rồi copy sang)
- Push bằng Personal Access Token nhét tạm vào remote URL, **gỡ ra ngay sau khi
  push xong** để token không nằm lại trong `.git/config`.

## Cấu trúc

```
index.html          trang chính — tab 01 WORK + tab 02 PROMOTER
project.html        trang chi tiết dự án (?p=slug)
assets/css/base.css   biến màu (cả 2 chủ đề), reset, con trỏ, màn chờ,
                      lightbox, công tắc — dùng chung
assets/css/home.css   riêng index.html
assets/css/project.css riêng project.html
assets/js/i18n.js         từ điển Anh/Việt cho chữ tĩnh + applyLang() + tf()
assets/js/common.js       hàm dùng chung + công tắc sáng/tối & ngôn ngữ
assets/js/projects-data.js  nội dung 6 dự án — sửa dự án chỉ đụng file này
assets/js/promoter-data.js  nội dung phần Promoter + công tắc công bố
assets/js/home.js / project.js  logic từng trang
```

## Sáng/tối và Anh/Việt

Hai công tắc ở góc phải thanh đầu trang. Lựa chọn nhớ trong `localStorage`.
**Mặc định: nền tối + tiếng Anh** — cố ý không dò theo cài đặt máy, để khách
lạ luôn thấy đúng bản thiết kế gốc.

**Thêm chữ mới cần dịch:**

- Chữ tĩnh trong HTML → gắn `data-i18n="khoá"`, thêm khoá vào cả hai bảng
  `en` và `vi` trong `i18n.js`. Chữ để trong HTML là bản tiếng Anh, JS chết
  thì trang vẫn đọc được.
- Nội dung dài trong file dữ liệu → thêm trường `<tên>_vi` bên cạnh trường
  gốc. Hàm `tf(obj,'desc')` tự lấy `desc_vi` khi đang ở tiếng Việt.

**Thêm màu mới:** phải khai báo trong cả `:root` (tối) và
`html[data-theme="light"]` (sáng). Riêng chữ nằm **đè lên ảnh** thì dùng
`--on-media` / `--scrim` — hai biến này cố ý KHÔNG đảo theo chủ đề, vì ảnh
vẫn là ảnh dù nền trang sáng hay tối.

**Nội dung sinh bằng JS** (thẻ dự án, khối Promoter) phải dựng lại khi đổi
ngôn ngữ — nghe sự kiện `langchange`, dựng xong thì phát `contentrerender`
để home.js quét lại `.reveal`. Sự kiện bấm vào các phần tử này phải dùng
uỷ quyền qua `document`, vì phần tử cũ đã bị thay mới.

## Trạng thái

- `PROMOTER_PUBLISHED = true` — phần Promoter đã công bố (18/08/2026).
  Muốn ẩn lại thì đổi về `false`, cả tab 02 lẫn nội dung sẽ bị gỡ khỏi trang.

## Thông tin nền cho phần Promoter

Portfolio này còn phục vụ việc ứng tuyển vị trí **Admissions Promoter /
Chuyên viên Tư vấn Tuyển sinh**. Khi viết nội dung cho phần Promoter, bám vào:

**Phạm vi công việc**

- Tổ chức và triển khai hoạt động tuyển sinh tại các trường THPT ở TP.HCM
- Trực tiếp tư vấn ngành nghề, chương trình đào tạo, quy chế tuyển sinh tại
  các diễn đàn hướng nghiệp
- Lên kế hoạch và tổ chức sự kiện trải nghiệm: Campus Tour, Experience Day
- Điều phối các sự kiện tuyển sinh khác — hậu cần, nhân sự, truyền thông

**Số liệu** (đã dùng trong `PROMOTER_STATS`)

- Hơn 30 trường THPT tại TP.HCM
- Hơn 3.000 học sinh tham gia Campus Tour & Experience Day
- Từ 2023 đến nay

**Kỹ năng nổi bật**

- Tư vấn & giao tiếp với học sinh, phụ huynh
- Tổ chức sự kiện, điều phối chương trình
- Thuyết trình trước đám đông
- Am hiểu quy chế tuyển sinh và ngành nghề đào tạo

**Giọng văn:** ngắn gọn, chuyên nghiệp, tự tin nhưng không phô trương. Có số
liệu cụ thể ở đâu thì đưa vào đó. Không thổi phồng, không dùng tính từ rỗng.

## Thói quen viết code ở repo này

- Chú thích trong code viết bằng tiếng Việt, giải thích **tại sao** làm vậy
  chứ không phải làm cái gì.
- Nội dung hiển thị trên web viết bằng tiếng Anh.
- Nội dung tách ra file `*-data.js` để sửa một chỗ là xong, không phải mở HTML.
- Kiểm tra trước khi báo xong: `node --check` mọi file JS, đếm cân bằng ngoặc
  CSS, và dựng thử DOM bằng jsdom để chắc chắn trang không vỡ.
