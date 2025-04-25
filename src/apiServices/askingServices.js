import request from "../utils/request";

export const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await request.post("index.php?url=login", {
      email,
      password,
    });

    const result = response.data;
    console.log("✅ Login Success:", result);
    localStorage.setItem("token", result.token);
    // TODO redirect hoặc cập nhật UI sau khi login
  } catch (error) {
    if (error.response) {
      console.error("❌ Login Failed:", error.response.data.message);
    } else {
      console.error("💥 Network error:", error.message);
    }
  }
};
