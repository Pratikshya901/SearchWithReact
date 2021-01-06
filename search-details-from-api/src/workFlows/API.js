const xhttp = new XMLHttpRequest();

class Api {
  fetchAllEntities() {
    xhttp.open("GET", "http://localhost:3000/terminal", false);
    xhttp.send();
    return JSON.parse(xhttp.responseText);
  }
}
const api = new Api();
export default api;
