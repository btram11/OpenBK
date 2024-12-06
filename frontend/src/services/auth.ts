const BaseURL = "localhost:3001"

export const signUp = async (data: any) => {
  const response = await fetch(`${BaseURL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(response.statusText);
  const result = await response.json();

  if (result.accessToken) {
    sessionStorage.setItem("accessToken", result.accessToken);
  }
};

export const login = async (data: any) => {
  const response = await fetch(`${BaseURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(response.statusText);
  const result = await response.json();

  if (result.accessToken) {
    sessionStorage.setItem("accessToken", result.accessToken);
  }
};
