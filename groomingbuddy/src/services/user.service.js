import axios from "axios";

const API_URL = "https://backend-groomingbuddy.onrender.com/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin");
};

const submitContact = async (firstName, lastName, email, phoneNumber, message) => {
  return axios.post(API_URL + "contact",{
    email: email,
    firstName: firstName,
    lastName: lastName,
    message: message
  });
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
  submitContact
}

export default UserService;