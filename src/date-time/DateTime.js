const instaFlightsSearch = (function() {
  function addToCurrentDay(inputDay) {
    const date = new Date();
    date.setDate(date.getDate() + inputDay);
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function getTime(dateTime) {
    const hours = addZero(dateTime.getHours());
    const minutes = addZero(dateTime.getMinutes());
    return `${hours}:${minutes}`;
  }

  function addZero(number) {
    const limit = 10;
    return number < limit ? "0" + number.toString() : number.toString();
  }

  function convertElapsedTime(inpurtMinutes) {
    const separator = ".";
    const convertedHour = inpurtMinutes / 60;
    const hour = Number(getHalf(convertedHour, separator, 0));
    let minutes = Math.round(
      Number(`0.${getHalf(convertedHour, separator, 1)}`) * 60
    );
    if (isNaN(minutes)) {
      minutes = 0;
    }
    return {
      hour: hour,
      minutes: minutes
    };
  }

  function getHalf(number, separator, index) {
    return number.toString().split(separator)[index];
  }

  return {
    addToCurrentDay: addToCurrentDay,
    getTime: getTime,
    addZero: addZero,
    convertElapsedTime: convertElapsedTime
  };
})();

export default instaFlightsSearch;
