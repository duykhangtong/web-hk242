// services/questionService.js
import api from "./api";

const questionService = {
  getQuestions: (page = 1, limit = 10, search = "") => {
    return api.get(`/questions?page=${page}&limit=${limit}&search=${search}`);
  },
  getQuestionsById: (id) => {
    return api.get(`/questions/${id}`);
  },
  createQuestion: (questionData) => {
    return api.post("/questions", questionData);
  },
  getAdminQuestions: (page = 1, limit = 10, search = "", status = "") => {
    return api.get(
      `/admin/questions?page=${page}&limit=${limit}&search=${search}&status=${status}`
    );
  },
  updateQuestion: (id, questionData) => {
    return api.put(`/admin/questions/${id}`, questionData);
  },
  updateQuestionStatus: (id, status) => {
    return api.patch(`/admin/questions/${id}/status`, { status });
  },
  deleteQuestion: (id) => {
    return api.delete(`/admin/questions/${id}`);
  },
};

export default questionService;
