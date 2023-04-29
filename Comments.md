# Nhận xét về project

## Điểm tốt
1. Project phân bố module tốt
2. Code khá gọn và dễ đọc
3. Các component viết rõ ràng phân rõ file styling với main component   

## Điểm cần cải thiện

1. Tên project nên để theo kiểu abc-xyz, k nên để abc_xyz.
2. File .env k nên up lên github. Nếu có up thì k nên để lộ API key. API key là cái bí mật, TUYỆT ĐỐI k dc để lộ. Cái này bạn nên chú ý vì bây h có rất nhiều hacker lấy API key của bạn để lấy thông tin. Mình khuyên bạn nên xóa nó đi và dùng `git commit --amend` để xóa lịch sử của commit bạn đã push.
3. Project bạn nên dùng typescript thay vì JS. Nó sẽ tốt khi bạn debug hay develop.
4. Bạn nên ghi chi tiết hơn về hướng dẫn cách build cũng như develop cho project nếu có ai đó định contribute. Bạn có thể gắn một cái gif demo cái app trong README để cho người xem biết qua app chạy ntn. Bạn cũng nên list ra app có những feature gì.
5. Project của bạn nên thêm unit test cho mỗi component bạn viết
6. Bạn nên cài sonarlint trên VScode extension để check xem code mình có clean k
7. Bạn có thể tham khảo cách viết README.md trên các opensource. Ví dụ: [material-ui](https://github.com/mui/material-ui)
