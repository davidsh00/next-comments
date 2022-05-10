export default async function fetchAll() {
  const url = "https://test-dbf8b-default-rtdb.firebaseio.com/hires.json";
  const jsonData = await fetch(url);
  const data = await jsonData.json();
  const dataArray = [];
  for (const key in data) {
    dataArray.push({ id: key, ...data[key] });
  }
  return dataArray;
}
