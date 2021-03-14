import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-80d0f.firebaseio.com/",
});

export default instance;
