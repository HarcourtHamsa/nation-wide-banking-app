import axios from 'axios';

export function getArrayIndex (array) {
  return array.length - 1;
}

export function getUserIdFromWindowLocation (url) {
  const userLocationDataArray = url.split ('/');
  const arrayIndex = getArrayIndex (userLocationDataArray);
  const userId = userLocationDataArray[arrayIndex];

  return userId;
}
export async function loginUser (data) {
  const res = await axios.post ('api/users/login', data);
  return res.data;
}
