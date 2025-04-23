import axios from "axios";
import { FaAssistiveListeningSystems } from "react-icons/fa";

const request = axios.create({
  baseURL: "http://localhost/web-hk242/backend/",
});

export default request;
