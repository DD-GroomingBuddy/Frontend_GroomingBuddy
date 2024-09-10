import axios from "axios";
import authHeader from "./auth.header";

const API_URL = "https://backend-groomingbuddy-2.onrender.com/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", {
    username,
    password,
  });
  if (response.data.username) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
  const response = await axios.post(API_URL + "signout");
  return response.data;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getAppointments = async () => {
  const user = getCurrentUser();
  let endpoint = "appointment/get";
  let params = { userId: user.id };

  // Check if the user has the role "ADMIN"
  if (user.roles.includes("ROLE_ADMIN")) {
    endpoint = "appointment/getAll";
    params = {}
  }

  try {
    // const response = await axios.get(API_URL + endpoint, { params,headers: authHeader() },);
    const response = await axios.get(API_URL + endpoint, {headers: authHeader(), params});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

const addAppointment = async (phoneNumber, service, dateTime) => {
  const user = getCurrentUser();
  const response = await axios.post(API_URL + "appointment/add",{
    user: user,
    phoneNumber: phoneNumber,
    service: service,
    dateTime: dateTime
  },{headers: authHeader()});
  return response;
}

const deleteAppointment = async (appointmentId) => {
  let params = { id: appointmentId };
  const response = await axios.delete(API_URL + 'appointment/delete',{data:{id:appointmentId}, headers: authHeader()});
  return response;
}

const updateAppointmentStatus = async (appointmentId) => {
  const response = await axios.put(API_URL + "appointment/updateStatus", {
    id: appointmentId
  }, { headers: authHeader() });
  return response;
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getAppointments,
  addAppointment,
  deleteAppointment,
  updateAppointmentStatus
};

export default AuthService;
