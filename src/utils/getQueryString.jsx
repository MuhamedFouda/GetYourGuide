export default function getQueryString(data) {
  let arr = [];
  for (let key in data) {
    if (data[key]) arr.push(`${key}=${data[key]}`);
  }

  return arr.join("&");
}
