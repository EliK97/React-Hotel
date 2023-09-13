import sendRequest from "./send-request";
const BASE_URL = '/api/room';

export async function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  console.log(id)
  return sendRequest(`${BASE_URL}/${id}`);
}