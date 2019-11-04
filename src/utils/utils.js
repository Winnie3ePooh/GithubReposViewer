import moment from "moment";

function numpf(n, f, s, t) {
  // f - 1, 21, 31, ...
  // s - 2-4, 22-24, 32-34 ...
  // t - 5-20, 25-30, ...
  var n10 = n % 10;
  if (n10 === 1 && (n === 1 || n > 20)) {
    return f;
  } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
    return s;
  } else {
    return t;
  }
}

function timeDifference(current, previous) {
  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerMinute) {
    return ["только что", 1000];
  } else if (elapsed < milliSecondsPerHour) {
    const minutes = Math.round(elapsed / milliSecondsPerMinute);
    const suffix = numpf(minutes, "минута", "минуты", "минут");
    return [`${minutes} ${suffix} назад`, milliSecondsPerMinute];
  } else if (elapsed < milliSecondsPerDay) {
    const hours = Math.round(elapsed / milliSecondsPerHour);
    const suffix = numpf(hours, "час", "часа", "часов");
    return [`${hours} ${suffix} назад`, milliSecondsPerHour];
  } else {
    return [moment(previous).format("DD.MM.YYYY HH:MM"), 0];
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDifference(now, updated);
}

export function timeFormatter(date) {
  return moment(date).format("DD.MM.YYYY HH:MM");
}
