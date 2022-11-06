const API_ENDPOINT =
  process.env.API_ENDPOINT || "https://family-chat-app-project.herokuapp.com";

export const signUpUser = async (
  firstName,
  lastName,
  userName,
  email,
  password,
  confirmPassword
) => {
  const response = await fetch(`${API_ENDPOINT}/api/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
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
  console.log(result.token);
  return result?.token;
};

export const validateUser = async (userName, password) => {
  const response = await fetch(`${API_ENDPOINT}/api/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  });
  const result = await response.json();
  console.log("result", result);
  console.log("result.token", result.token);
  return result?.token;
};

export const getVerifiedUsers = async (token) => {
  const response = await fetch(`${API_ENDPOINT}/api/users`, {
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
