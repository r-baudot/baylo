import axios from "axios";

// Handling errors Globaly
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Handling unexpeted errors + offer the possibility to track logs with a service (ex: https://sentry.io/)
  if (!expectedError) {
    console.log("Unexpected Error", error);
  }

  // Handling expeted errors
  return Promise.reject(error);
});

const mapping = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default mapping;
