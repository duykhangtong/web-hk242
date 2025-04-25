// src/pages/CommunityAdminPage.jsx
import { useState } from "react";
import "./CommunityAdminPage.css";

const initialArticles = [
  {
    id: 1,
    title: "First Article",
    description: "Short description of the first article...",
    content: "Full content of the first article.",
    image: "https://storage-asset.msi.com/global/picture/article/article_1742882133d0fc9248570336ab76ee0c227f353ee0.jpeg",
    date: "20/04/2025",
  },
];

export default function CommunityAdminPage() {
  const [articles, setArticles] = useState(initialArticles);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [modalArticle, setModalArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setNewPost((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.description || !newPost.content || !newPost.image) return;

    setArticles([
      ...articles,
      {
        ...newPost,
        id: Date.now(),
        date: new Date().toLocaleDateString("en-GB"),
      },
    ]);
    setNewPost({ title: "", description: "", content: "", image: "" });
    setPreviewUrl("");
  };

  const handleDelete = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="admin-page container py-5">
      <div className="admin-header mb-4">
        <h2>📋 Manage Community Articles</h2>
        <p className="text-muted">You can add, view, and delete community articles here.</p>
      </div>

      <div className="card shadow-sm p-4 mb-5">
        <h4 className="mb-3">✍️ Add New Article</h4>
        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <label className="form-label">Article Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              placeholder="Enter title..."
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <textarea
              className="form-control"
              name="description"
              value={newPost.description}
              onChange={handleChange}
              rows={4}
              placeholder="Enter short description..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Full Content</label>
            <textarea
              className="form-control"
              name="content"
              value={newPost.content}
              onChange={handleChange}
              rows={12}
              placeholder="Enter full content..."
              style={{ whiteSpace: "pre-line" }}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Cover Image</label>
            <input type="file" accept="image/*" className="form-control" onChange={handleImageUpload} />
          </div>

          {previewUrl && (
            <div className="mb-3">
              <img src={previewUrl} alt="Preview" className="img-fluid rounded" style={{ maxHeight: "200px" }} />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Publish Article
          </button>
        </form>
      </div>

      <div className="article-list card shadow-sm p-4">
        <h4 className="mb-3">📑 Article List ({articles.length})</h4>
        {articles.length === 0 ? (
          <p className="text-muted">No articles available.</p>
        ) : (
          <>
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentArticles.map((article, index) => (
                  <tr key={article.id}>
                    <td>{indexOfFirst + index + 1}</td>
                    <td>
                      <img src={article.image} alt={article.title} style={{ width: "60px", height: "40px", objectFit: "cover" }} />
                    </td>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-info me-2"
                        onClick={() => setModalArticle(article)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(article.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-3">
              <nav>
                <ul className="pagination">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                      <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>

      {modalArticle && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">📰 {modalArticle.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setModalArticle(null)}
                  ></button>
                </div>
                <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                  <img
                    src={modalArticle.image}
                    alt={modalArticle.title}
                    className="img-fluid mb-3 rounded"
                  />
                  <p><strong>Description:</strong> {modalArticle.description}</p>
                  <p><strong>Content:</strong></p>
                  <div style={{ whiteSpace: "pre-line" }}>{modalArticle.content}</div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setModalArticle(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
