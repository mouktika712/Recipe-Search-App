const API = {
  APP_ID: "292b1ed1",
  APP_KEY: "f26bb4b311c748b01d022582841e8f29",
  ROOT_URL: "https://api.edamam.com",
  recipe: (search) =>
    `${API.ROOT_URL}/search?q=${search}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`
};

export default API;
