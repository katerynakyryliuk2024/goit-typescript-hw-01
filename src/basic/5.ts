enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day === DayOfWeek.Saturday || DayOfWeek.Sunday) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isWeekend(Monday);
