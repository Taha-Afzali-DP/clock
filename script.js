const container = document.querySelector(".container");
const dateContainer = document.querySelector(".date");
const timeContainer = document.querySelector(".time");
const languageSelector = document.querySelector(".language-selector");
const NowDay = document.querySelector("#day");
const NowMonth = document.querySelector("#month");
const NowYear = document.querySelector("#year");
const nowHuor = document.querySelector("#hour");
const nowMin = document.querySelector("#minute");
const nowSec = document.querySelector("#second");
const dayName = document.querySelector("#day-text");
const monthName = document.querySelector("#month-text");
document.addEventListener("DOMContentLoaded", function () {
  // Class references
});

function toggleDropdown() {
  const dropdown = document.getElementById("languageDropdown");
  dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".language-btn")) {
    const dropdowns = document.getElementsByClassName("language-dropdown");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Add click handler for options
document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".language-dropdown option");
  options.forEach((option) => {
    option.addEventListener("click", function () {
      console.log("Selected language:", this.value); // User will handle in JS
      toggleDropdown();
    });
  });
});
//! my code
/*
const year = (year) => {
  const now = new Date();

  const locale = navigator.language;

  year = new Intl.DateTimeFormat(locale, { year: "numeric" }).format(now);
  NowYear.textContent = year;
};
year(NowYear);

const month = (month) => {
  const now = new Date();

  const locale = navigator.language;

  month = new Intl.DateTimeFormat(locale, { month: "2-digit" }).format(now);
  NowMonth.textContent = month;
};
month(NowMonth);

const day = (day) => {
  const now = new Date();

  const locale = navigator.language;

  day = new Intl.DateTimeFormat(locale, { day: "2-digit" }).format(now);
  NowDay.textContent = day;
};
day(NowDay);

const hour = (hour) => {
  const now = new Date();

  const locale = navigator.language;

  hour = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    hour12: false,
  }).format(now);
  nowHuor.textContent = hour;
};
hour(nowHuor);

const Min = (minute) => {
  const now = new Date();

  const locale = navigator.language;

  minute = new Intl.DateTimeFormat(locale, { minute: "2-digit" }).format(now);
  nowMin.textContent = minute;
};
Min(nowMin);

const sec = (second) => {
  const now = new Date();

  const locale = navigator.language;

  second = new Intl.DateTimeFormat(locale, { second: "2-digit" }).format(now);
  nowSec.textContent = second;
};
sec(nowSec);

const weekday = (weekday) => {
  const now = new Date();

  const locale = navigator.language;

  weekday = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(now);
  dayName.textContent = weekday;
};
weekday(dayName);

const monthNames = (monthsName) => {
  const now = new Date();

  const locale = navigator.language;

  monthsName = new Intl.DateTimeFormat(locale, { month: "long" }).format(now);
  monthName.textContent = monthsName;
};
monthNames(monthName);
*/
//! Clean Code ::

const updateDateTime = () => {
  const dateFormat = (option) => {
    return new Intl.DateTimeFormat(locale, option).format(now);
  };
  const locale = navigator.language;
  const now = new Date();
  //! year num
  const year = dateFormat({ year: "numeric" });
  NowYear.textContent = year;
  //! month num
  const month = dateFormat({ month: "2-digit" });
  NowMonth.textContent = month;
  //! day num
  const day = dateFormat({ day: "2-digit" });
  NowDay.textContent = day;
  setInterval(() => {
    //! huor num
    // const hour = dateFormat({
    //   hour: "2-digit",
    //   hour12: false,
    // });
    const Time = new Date(new Date().getTime());
    nowHuor.textContent = Time.getHours();
  });
  //! weekDay
  const weekday = dateFormat({ weekday: "long" });
  dayName.textContent = weekday;
  //! namesMonth
  const monthsName = dateFormat({ month: "long" });
  monthName.textContent = monthsName;

  //! mins num
  setInterval(() => {
    const Time = new Date(new Date().getTime());
    nowMin.textContent = Time.getMinutes();
  }, 1000);
  setInterval(() => {
    const Time = new Date(new Date().getTime());

    //! sec num
    const second = Time.getSeconds();
    // console.log(now);
    nowSec.textContent = second;
  }, 1000);
  // console.log(Time.getHours(), Time.getMinutes(), Time.getSeconds());
};
updateDateTime();
