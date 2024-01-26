export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 || 12;

  const formattedTimestamp = `${day} ${month} ${year} | ${formattedHours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${ampm}`;
  return formattedTimestamp;
};

export const dateFilterFormat = (year: number, month: number, day: number) => {
  let newMonth, newDay;
  if (month && month + 1 < 10) {
    newMonth = `0${month + 1}`;
  } else {
    newMonth = month;
  }
  if (day && day < 10) {
    newDay = `0${day}`;
  } else {
    newDay = day;
  }

  return `${year}-${newMonth}-${newDay}`;
};

export const formatRangeDate = (date: Record<string, number>) => {
  const year = date.$y;
  const month = date.$M + 1 > 9 ? +date.$M + 1 : `0${+date.$M + 1}`;
  const day = date.$D > 9 ? date.$D : `0${date.$D}`;
  return `${year}-${month}-${day}`;
};

export const formatDates = (timestamp: string) => {
  const date = new Date(timestamp);
  const hrs =
    date.getHours() > 12 ? `${date.getHours() - 12}` : `${date.getHours()}`;
  const timing = date.getHours() >= 12 ? 'pm' : 'am';
  const formattedTimestamp = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')} | ${hrs.padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}${timing}`;
  return formattedTimestamp;
};
