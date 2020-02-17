export const convertMS = milliseconds => {
  let seconds = Math.floor(milliseconds / 1000);
  let minute = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }
  return `${minute}:${seconds}`;
};
