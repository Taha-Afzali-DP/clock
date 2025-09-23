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
//* Varaibels
let locale = navigator.language;
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const localeTimeZones = {
  "fa-IR": "Asia/Tehran",
  "en-US": "America/New_York",
  "fr-FR": "Europe/Paris",
};

// Add click handler for options
document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".language-dropdown option");
  options.forEach((option) => {
    option.addEventListener("click", function () {
      locale = option.value;
      timeZone = localeTimeZones[option.value] || timeZone;
      console.log("Selected language:", option.value, timeZone);
      // User will handle in JS
      updateDateTime();
      toggleDropdown();
    });
  });
});

//! Clean Code ::

const updateDateTime = () => {
  const now = new Date();
  // const dateFormat = (option) => {
  //   return new Intl.DateTimeFormat(locale, option).format(now);
  // };
  const dateFormat = (option) => {
    return new Intl.DateTimeFormat(locale, { ...option, timeZone }).format(now);
  };

  //! year num
  const year = dateFormat({ year: "numeric" });
  NowYear.textContent = year;
  //! month num
  const month = dateFormat({ month: "2-digit" });
  NowMonth.textContent = month;
  //! day num
  const day = dateFormat({ day: "2-digit" });
  NowDay.textContent = day;
  //! huor

  const hourTimer = () => {
    const Time = new Date();
    nowHuor.textContent = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      hour12: false,
      timeZone,
    }).format(Time);
  };
  hourTimer();
  setInterval(hourTimer, 1000);

  //! weekDay
  const weekday = dateFormat({ weekday: "long" });
  dayName.textContent = weekday;
  //! namesMonth
  const monthsName = dateFormat({ month: "long" });
  monthName.textContent = monthsName;
  //TODO Minute Timer
  const MinuteTimer = () => {
    const Time = new Date();
    nowMin.textContent = new Intl.DateTimeFormat(locale, {
      minute: "2-digit",
      timeZone,
    }).format(Time);
  };
  MinuteTimer();
  setInterval(MinuteTimer, 1000);

  //TODO Second
  const SecondTimer = () => {
    const Time = new Date();
    nowSec.textContent = new Intl.DateTimeFormat(locale, {
      second: "2-digit",
      timeZone,
    }).format(Time);
  };
  SecondTimer();
  setInterval(SecondTimer, 1000);
};
updateDateTime();
