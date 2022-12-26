import API from "../Utils/index";

const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(API.APP_KEY);

  const headers = {
    "content-type": "application.json"
    // Accept: "application.json"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return {
      data: data,
      success: true
    };
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false
    };
  }
};

export const getRecipe = (search = "chicken") => {
  return customFetch(API.recipe(search), {
    method: "GET"
  });
};
