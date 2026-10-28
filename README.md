# DỰ ÁN MOTOGO - HỆ THỐNG QUẢN LÝ SCRUM & WEB BÀI THUYẾT TRÌNH BẢO VỆ

- **Đề tài**: Xây dựng Product Backlog và Kế hoạch Sprint cho dự án MotoGo
- **Môn học**: [IT-206-K25] Quy trình phát triển phần mềm với Agile Scrum
- **Sinh viên**: Đỗ Tiến Nam – B25DTCN117 – Lớp CNTT3
- **Bảng Trello**: `MotoGo – Đỗ Tiến Nam – CNTT3` (Chế độ công khai)

---

## 🚀 CÁCH CHẠY VÀ XEM TRANG WEB

Bạn có thể mở và xem trang web bằng bất kỳ cách nào dưới đây:

### Cách 1 (Nhanh nhất - 1 cú click):
1. Mở thư mục dự án `MiniProject` trong File Explorer máy tính.
2. **Nhấp đúp vào tệp `open_presentation.bat`** (hoặc nhấp đúp trực tiếp vào tệp `index.html`).
3. Trang web sẽ tự động mở ngay trên trình duyệt (Chrome, Edge, Cốc Cốc, v.v.).

### Cách 2 (Chạy qua Local Server nếu muốn):
Chạy lệnh sau trong PowerShell hoặc Terminal:
```bash
python -m http.server 8080
```
Sau đó truy cập địa chỉ: `http://localhost:8080` trên trình duyệt.

---

## 🎯 CÁC TÍNH NĂNG CHÍNH CỦA TRANG WEB

1. **Giao diện Trello Board trực quan**:
   - 4 cột chuẩn theo yêu cầu: `Epic (3)`, `Feature (6)`, `Product Backlog (10)`, `Sprint 1 Backlog (4)`.
   - Hệ thống nhãn màu Trello: Nhãn MoSCoW (`Must`, `Should`, `Could`, `Won't`), Nhãn cấp độ (`Epic`, `Feature`, `User Story`).
   - Bộ lọc MoSCoW nhanh và thanh tìm kiếm từ khóa.
   - **Click vào bất kỳ thẻ nào** để mở Popup Modal hiển thị đầy đủ **6 trường chuẩn** theo Mục 6 của đề bài.

2. **Chế độ Slide Thuyết Trình (Presentation Deck)**:
   - Hiệu ứng chuyển slide 3D và Fade cực kỳ mượt mà.
   - Điều hướng linh hoạt bằng phím mũi tên bàn phím:
     - `Phím mũi tên phải` hoặc `Space` hoặc `Page Down`: Sang slide tiếp theo.
     - `Phím mũi tên trái` hoặc `Page Up`: Lùi lại slide trước.
     - `Phím F`: Bật / tắt chế độ Toàn màn hình (Fullscreen) để trình chiếu máy chiếu trên lớp.
     - `Thanh chấm tròn`: Chuyển nhanh đến bất kỳ slide nào.
   - Bao phủ toàn diện **8 Hạng mục chấm điểm** theo đề bài.

3. **Scrum Defense Hub (Kịch bản bảo vệ trước Hội đồng chất vấn)**:
   - Tổng hợp các câu hỏi phản biện thường gặp của Giảng viên và câu trả lời mẫu xuất sắc cho cả 3 vai trò:
     - **Product Owner**: Bảo vệ thứ tự ưu tiên MoSCoW, lý do chọn 4 story vào Sprint 1, giải trình lý do xếp Won't Have.
     - **Scrum Master**: Giải trình về 20% thời gian buffer trong Capacity, cách xử lý trở ngại khi Dev ốm/chậm tiến độ.
     - **Development Team**: Căn cứ chấm Story Point theo Fibonacci (US-01 làm chuẩn 3 SP, US-02 là 5 SP), mối quan hệ giữa Acceptance Criteria và Unit Test.

4. **Nút Copy Báo Cáo Nhanh (Export Markdown)**:
   - Nhấp vào nút "Copy Báo Cáo" ở góc phải để sao chép toàn bộ nội dung 8 hạng mục nộp bài.
