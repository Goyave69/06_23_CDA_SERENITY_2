const ApiHelper = async (route, method, body = null, token = null) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (token) {
    myHeaders.append("Authorization", `Bearer ${token}`);
  }

  const requestOptions = {
    method,
    headers: myHeaders,
    body,
  };

  return fetch(`http://localhost:5000/${route}`, requestOptions);
};

export default ApiHelper;
