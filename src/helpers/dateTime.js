export const getCurrentTime = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  let day = date.getDate();
  day = day < 10 ? `0${day}` : day;
  const currentDate = ` ${day}.${year}`;
  return currentDate;
}

export const getCurrentMonth = (d) => {
  const date = new Date(d);
  const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNum = date.getMonth();
  const month = monthArr[monthNum];
  return month;
}