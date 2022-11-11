const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://family-chat-app-project.herokuapp.com";
const LOCAL_API_ENDPOINT = "http://localhost:8083";

//Signing Up Users
export const signUpUser = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
) => {
  const response = await fetch(LOCAL_API_ENDPOINT + "/api/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    }),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

//Logging In Users
export const validateUser = async (userName, password) => {
  const response = await fetch(LOCAL_API_ENDPOINT + "/api/login", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ userName, password }),
  });
  const result = await response.json();
  console.log("token", result.token);
  console.log("refreshToken", result.refreshTokens);
  return result?.token;
};

export const getVerifiedUsers = async (token) => {
  const response = await fetch(LOCAL_API_ENDPOINT + "/api/users", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const result = await response.json();
  console.log(result);
  return result;
};
