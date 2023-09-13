import sendRequest from "./send-request";
const BASE_URL = '/api/review';

export async function getAll(id) {
 return sendRequest(`${BASE_URL}/room/${id}`);
}

// This function is never actually used in SEI CAFE,
// it's only provided here to remind you to follow
// RESTful routing, etc.
export async function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addReview(review) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}`, 'POST', review);
}

export function update(payload,id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', payload);
}

export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function deleteReview(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}