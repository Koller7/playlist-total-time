(function () {
    const timeContainer = document.querySelectorAll(
      ".ytd-thumbnail-overlay-time-status-renderer"
    );
    let timeSeconds = 0;
  
    for (let i = 0; i < timeContainer.length; i++) {
      const timeStr = timeContainer[i].innerText;
      if (!/\d?\d:\d{2}(:\d{2})?/g.test(timeStr)) continue;
      const timeParts = timeStr.split(":");
      let seconds;
  
      if (timeParts.length === 3) {
        seconds =
          parseInt(timeParts[0]) * 60 * 60 +
          parseInt(timeParts[1]) * 60 +
          parseInt(timeParts[2]);
      } else {
        seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
      }
      timeSeconds += seconds;
    }
    const renderNumber = (number) =>
      number <= 9 ? `0${Math.round(number)}` : Math.round(number);
  
    console.log(timeSeconds);
  
    const hours = timeSeconds >= 60 * 60 ? timeSeconds / 60 / 60 : 0;
    const minutes = timeSeconds >= 60 ? (timeSeconds / 60) % 60 : 0;
    const seconds = timeSeconds % 60;
    const result = `${renderNumber(hours)}:${renderNumber(
      minutes
    )}:${renderNumber(seconds)}`;
  
    alert(result);
  })();