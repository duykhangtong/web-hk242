import React from "react";
import styles from "../asking/asking.module.css";
import { useState } from "react";

function Asking({ onSubmit, onCancel }) {
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== "") {
      onSubmit(newQuestion);
      setNewQuestion("");
    }
  };
  return (
    <div className={styles.modalContain}>
      <h3 className="mb-3 text-center text-black fw-bold">Đặt câu hỏi mới</h3>

      <p className="mb-2">Địa chỉ thư điện tử nhận phản hồi</p>
      <input
        type="text"
        className="form-control mb-4 p-2"
        placeholder="abc@gmail.com"
        disabled
      ></input>

      <label htmlFor="subject" className="form-label">
        Chủ đề <span style={{ color: "red" }}>*</span>
      </label>
      <input
        id="subject"
        type="text"
        className="form-control mb-4 p-2"
        required
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />

      <label htmlFor="question" className="form-label">
        Câu hỏi <span style={{ color: "red" }}>*</span>
      </label>
      <textarea
        rows="5"
        id="question"
        className="form-control mb-4 p-2"
        required
      ></textarea>

      <div className={styles.noticeBox}>
        <div className={styles.noticeBoxTitle}>
          Dịch vụ khách hàng Thông báo thu thập thông tin cá nhân
        </div>
        <p className="text-gray-600">
          MK cam kết cung cấp dịch vụ (đạt tiêu chuẩn) chất lượng. Để tiến hành
          các dịch vụ bảo hành và sửa chữa, chúng tôi sẽ cần: thu thập, xử lý và
          lưu trữ một số thông tin cá nhân của bạn. Và cũng để nâng cao trải
          nghiệm của bạn với MK, chúng tôi muốn giữ liên lạc với bạn thông qua
          các email thông tin về trạng thái dịch vụ, cũng như gửi cho bạn bản
          khảo sát mức độ hài lòng sau này để nhận được những ý kiến đóng góp từ
          phía bạn.
        </p>
        <p className="text-gray-600">
          MK công nhận quyền riêng tư là một quyền mang tính cơ bản. Hãy yên tâm
          rằng thông tin của bạn sẽ được sử dụng phù hợp với chính sách bảo mật
          của MK.
        </p>

        <div className="form-check">
          <input
            className={`form-check-input ${styles.noticeFormCheck}`}
            type="checkbox"
            id="policy"
            style={{ accentColor: "red" }}
          ></input>
          <label className="form-check-label" htmlFor="policy">
            <span className="me-1" style={{ color: "red" }}>
              *
            </span>
            Tôi hoàn toàn hiểu và đồng ý với các điều khoản ở trên và tôi rất
            vui khi tiếp tục sử dụng Hỗ trợ Dịch vụ Khách hàng của MK.
          </label>
        </div>
      </div>

      <div className="text-center mb-5">
        <button
          className={`equal-btn btn btn-danger me-3 ${styles.hoverRed}`}
          onClick={handleAddQuestion}
        >
          Gửi
        </button>
        <button
          className={`equal-btn btn btn-secondary ${styles.hoverGray}`}
          onClick={onCancel}
        >
          Hủy bỏ
        </button>
      </div>
    </div>
  );
}

export default Asking;
