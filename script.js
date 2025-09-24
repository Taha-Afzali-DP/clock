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
// let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const localeTimeZones = {
  aa: "Africa/Djibouti", // Afar, primarily spoken in Djibouti
  ab: "Asia/Tbilisi", // Abkhazian, primarily in Georgia
  ace: "Asia/Jakarta", // Achinese, primarily in Indonesia
  ach: "Africa/Kampala", // Acoli, primarily in Uganda
  ada: "Africa/Accra", // Adangme, primarily in Ghana
  ady: "Europe/Moscow", // Adyghe, primarily in Russia
  ae: "Asia/Dubai", // Avestan, historical, default to UTC+4
  af: "Africa/Johannesburg", // Afrikaans, default to South Africa
  "af-NA": "Africa/Windhoek", // Afrikaans (Namibia)
  "af-ZA": "Africa/Johannesburg", // Afrikaans (South Africa)
  agq: "Africa/Douala", // Aghem, primarily in Cameroon
  ak: "Africa/Accra", // Akan, primarily in Ghana
  "ak-GH": "Africa/Accra", // Akan (Ghana)
  am: "Africa/Addis_Ababa", // Amharic, primarily in Ethiopia
  "am-ET": "Africa/Addis_Ababa", // Amharic (Ethiopia)
  an: "Europe/Madrid", // Aragonese, primarily in Spain
  ang: "Europe/London", // Old English, historical, default to UTC
  anp: "Asia/Kolkata", // Angika, primarily in India
  ar: "Asia/Riyadh", // Arabic, default to Saudi Arabia
  "ar-AE": "Asia/Dubai", // Arabic (United Arab Emirates)
  "ar-BH": "Asia/Bahrain", // Arabic (Bahrain)
  "ar-DZ": "Africa/Algiers", // Arabic (Algeria)
  "ar-EG": "Africa/Cairo", // Arabic (Egypt)
  "ar-IQ": "Asia/Baghdad", // Arabic (Iraq)
  "ar-JO": "Asia/Amman", // Arabic (Jordan)
  "ar-KW": "Asia/Kuwait", // Arabic (Kuwait)
  "ar-LB": "Asia/Beirut", // Arabic (Lebanon)
  "ar-LY": "Africa/Tripoli", // Arabic (Libya)
  "ar-MA": "Africa/Casablanca", // Arabic (Morocco)
  "ar-OM": "Asia/Muscat", // Arabic (Oman)
  "ar-QA": "Asia/Qatar", // Arabic (Qatar)
  "ar-SA": "Asia/Riyadh", // Arabic (Saudi Arabia)
  "ar-SD": "Africa/Khartoum", // Arabic (Sudan)
  "ar-SS": "Africa/Juba", // Arabic (South Sudan)
  "ar-SY": "Asia/Damascus", // Arabic (Syria)
  "ar-TN": "Africa/Tunis", // Arabic (Tunisia)
  "ar-YE": "Asia/Aden", // Arabic (Yemen)
  as: "Asia/Kolkata", // Assamese, primarily in India
  asa: "Africa/Dar_es_Salaam", // Asu, primarily in Tanzania
  ast: "Europe/Madrid", // Asturian, primarily in Spain
  av: "Europe/Moscow", // Avaric, primarily in Russia
  "av-RU": "Europe/Moscow", // Avaric (Russia)
  awa: "Asia/Kolkata", // Awadhi, primarily in India
  ay: "America/La_Paz", // Aymara, primarily in Bolivia
  az: "Asia/Baku", // Azerbaijani, default to Azerbaijan
  "az-AZ": "Asia/Baku", // Azerbaijani (Azerbaijan)
  "az-Cyrl": "Asia/Baku", // Azerbaijani (Cyrillic)
  "az-Latn": "Asia/Baku", // Azerbaijani (Latin)
  ba: "Europe/Moscow", // Bashkir, primarily in Russia
  be: "Europe/Minsk", // Belarusian, primarily in Belarus
  "be-BY": "Europe/Minsk", // Belarusian (Belarus)
  bem: "Africa/Lusaka", // Bemba, primarily in Zambia
  bg: "Europe/Sofia", // Bulgarian, primarily in Bulgaria
  "bg-BG": "Europe/Sofia", // Bulgarian (Bulgaria)
  bho: "Asia/Kolkata", // Bhojpuri, primarily in India
  bi: "Pacific/Efate", // Bislama, primarily in Vanuatu
  "bi-VU": "Pacific/Efate", // Bislama (Vanuatu)
  bin: "Africa/Lagos", // Bini, primarily in Nigeria
  bm: "Africa/Bamako", // Bambara, primarily in Mali
  bn: "Asia/Dhaka", // Bengali, default to Bangladesh
  "bn-BD": "Asia/Dhaka", // Bengali (Bangladesh)
  "bn-IN": "Asia/Kolkata", // Bengali (India)
  bo: "Asia/Shanghai", // Tibetan, default to China
  "bo-CN": "Asia/Shanghai", // Tibetan (China)
  "bo-IN": "Asia/Kolkata", // Tibetan (India)
  br: "Europe/Paris", // Breton, primarily in France
  "br-FR": "Europe/Paris", // Breton (France)
  brx: "Asia/Kolkata", // Bodo, primarily in India
  bs: "Europe/Sarajevo", // Bosnian, primarily in Bosnia
  "bs-BA": "Europe/Sarajevo", // Bosnian (Bosnia and Herzegovina)
  "bs-Cyrl": "Europe/Sarajevo", // Bosnian (Cyrillic)
  "bs-Latn": "Europe/Sarajevo", // Bosnian (Latin)
  ca: "Europe/Andorra", // Catalan, default to Andorra
  "ca-AD": "Europe/Andorra", // Catalan (Andorra)
  "ca-ES": "Europe/Madrid", // Catalan (Spain)
  "ca-FR": "Europe/Paris", // Catalan (France)
  "ca-IT": "Europe/Rome", // Catalan (Italy)
  ce: "Europe/Moscow", // Chechen, primarily in Russia
  "ce-RU": "Europe/Moscow", // Chechen (Russia)
  cgg: "Africa/Kampala", // Chiga, primarily in Uganda
  chr: "America/New_York", // Cherokee, primarily in United States
  "chr-US": "America/New_York", // Cherokee (United States)
  ckb: "Asia/Baghdad", // Sorani Kurdish, primarily in Iraq
  cs: "Europe/Prague", // Czech, primarily in Czech Republic
  "cs-CZ": "Europe/Prague", // Czech (Czech Republic)
  cy: "Europe/London", // Welsh, primarily in United Kingdom
  "cy-GB": "Europe/London", // Welsh (United Kingdom)
  da: "Europe/Copenhagen", // Danish, primarily in Denmark
  "da-DK": "Europe/Copenhagen", // Danish (Denmark)
  "da-GL": "America/Nuuk", // Danish (Greenland)
  dav: "Africa/Nairobi", // Taita, primarily in Kenya
  de: "Europe/Berlin", // German, default to Germany
  "de-AT": "Europe/Vienna", // German (Austria)
  "de-BE": "Europe/Brussels", // German (Belgium)
  "de-CH": "Europe/Zurich", // German (Switzerland)
  "de-DE": "Europe/Berlin", // German (Germany)
  "de-IT": "Europe/Rome", // German (Italy)
  "de-LI": "Europe/Vaduz", // German (Liechtenstein)
  "de-LU": "Europe/Luxembourg", // German (Luxembourg)
  dje: "Africa/Niamey", // Zarma, primarily in Niger
  dua: "Africa/Douala", // Duala, primarily in Cameroon
  dyo: "Africa/Dakar", // Jola-Fonyi, primarily in Senegal
  dz: "Asia/Thimphu", // Dzongkha, primarily in Bhutan
  "dz-BT": "Asia/Thimphu", // Dzongkha (Bhutan)
  ebu: "Africa/Nairobi", // Embu, primarily in Kenya
  ee: "Africa/Lome", // Ewe, primarily in Togo
  "ee-GH": "Africa/Accra", // Ewe (Ghana)
  "ee-TG": "Africa/Lome", // Ewe (Togo)
  el: "Europe/Athens", // Greek, default to Greece
  "el-CY": "Asia/Nicosia", // Greek (Cyprus)
  "el-GR": "Europe/Athens", // Greek (Greece)
  en: "UTC", // English, default to UTC
  "en-001": "UTC", // English (World), default to UTC
  "en-150": "Europe/London", // English (Europe), default to London
  "en-AE": "Asia/Dubai", // English (United Arab Emirates)
  "en-AG": "America/Antigua", // English (Antigua and Barbuda)
  "en-AI": "America/Anguilla", // English (Anguilla)
  "en-AS": "Pacific/Pago_Pago", // English (American Samoa)
  "en-AU": "Australia/Sydney", // English (Australia)
  "en-BB": "America/Barbados", // English (Barbados)
  "en-BE": "Europe/Brussels", // English (Belgium)
  "en-BI": "Africa/Gitega", // English (Burundi)
  "en-BM": "Atlantic/Bermuda", // English (Bermuda)
  "en-BS": "America/Nassau", // English (Bahamas)
  "en-BW": "Africa/Gaborone", // English (Botswana)
  "en-BZ": "America/Belize", // English (Belize)
  "en-CA": "America/Toronto", // English (Canada)
  "en-CC": "Indian/Cocos", // English (Cocos Islands)
  "en-CK": "Pacific/Rarotonga", // English (Cook Islands)
  "en-CM": "Africa/Douala", // English (Cameroon)
  "en-CY": "Asia/Nicosia", // English (Cyprus)
  "en-DG": "Indian/Diego_Garcia", // English (Diego Garcia)
  "en-DK": "Europe/Copenhagen", // English (Denmark)
  "en-DM": "America/Dominica", // English (Dominica)
  "en-ER": "Africa/Asmara", // English (Eritrea)
  "en-FI": "Europe/Helsinki", // English (Finland)
  "en-FJ": "Pacific/Fiji", // English (Fiji)
  "en-FK": "Atlantic/Stanley", // English (Falkland Islands)
  "en-FM": "Pacific/Pohnpei", // English (Micronesia)
  "en-GB": "Europe/London", // English (United Kingdom)
  "en-GD": "America/Grenada", // English (Grenada)
  "en-GG": "Europe/Guernsey", // English (Guernsey)
  "en-GH": "Africa/Accra", // English (Ghana)
  "en-GI": "Europe/Gibraltar", // English (Gibraltar)
  "en-GM": "Africa/Banjul", // English (Gambia)
  "en-GU": "Pacific/Guam", // English (Guam)
  "en-GY": "America/Guyana", // English (Guyana)
  "en-HK": "Asia/Hong_Kong", // English (Hong Kong)
  "en-IE": "Europe/Dublin", // English (Ireland)
  "en-IM": "Europe/Isle_of_Man", // English (Isle of Man)
  "en-IN": "Asia/Kolkata", // English (India)
  "en-IO": "Indian/Chagos", // English (British Indian Ocean Territory)
  "en-JE": "Europe/Jersey", // English (Jersey)
  "en-JM": "America/Jamaica", // English (Jamaica)
  "en-KE": "Africa/Nairobi", // English (Kenya)
  "en-KI": "Pacific/Tarawa", // English (Kiribati)
  "en-KN": "America/St_Kitts", // English (Saint Kitts and Nevis)
  "en-KY": "America/Cayman", // English (Cayman Islands)
  "en-LC": "America/St_Lucia", // English (Saint Lucia)
  "en-LR": "Africa/Monrovia", // English (Liberia)
  "en-LS": "Africa/Maseru", // English (Lesotho)
  "en-MG": "Indian/Antananarivo", // English (Madagascar)
  "en-MH": "Pacific/Majuro", // English (Marshall Islands)
  "en-MO": "Asia/Macau", // English (Macao SAR China)
  "en-MP": "Pacific/Saipan", // English (Northern Mariana Islands)
  "en-MS": "America/Montserrat", // English (Montserrat)
  "en-MT": "Europe/Malta", // English (Malta)
  "en-MU": "Indian/Mauritius", // English (Mauritius)
  "en-MW": "Africa/Blantyre", // English (Malawi)
  "en-MY": "Asia/Kuala_Lumpur", // English (Malaysia)
  "en-NA": "Africa/Windhoek", // English (Namibia)
  "en-NF": "Pacific/Norfolk", // English (Norfolk Island)
  "en-NG": "Africa/Lagos", // English (Nigeria)
  "en-NR": "Pacific/Nauru", // English (Nauru)
  "en-NU": "Pacific/Niue", // English (Niue)
  "en-NZ": "Pacific/Auckland", // English (New Zealand)
  "en-PG": "Pacific/Port_Moresby", // English (Papua New Guinea)
  "en-PH": "Asia/Manila", // English (Philippines)
  "en-PK": "Asia/Karachi", // English (Pakistan)
  "en-PN": "Pacific/Pitcairn", // English (Pitcairn Islands)
  "en-PR": "America/Puerto_Rico", // English (Puerto Rico)
  "en-PW": "Pacific/Palau", // English (Palau)
  "en-RW": "Africa/Kigali", // English (Rwanda)
  "en-SB": "Pacific/Guadalcanal", // English (Solomon Islands)
  "en-SC": "Indian/Mahe", // English (Seychelles)
  "en-SD": "Africa/Khartoum", // English (Sudan)
  "en-SG": "Asia/Singapore", // English (Singapore)
  "en-SH": "Atlantic/St_Helena", // English (Saint Helena)
  "en-SI": "Europe/Ljubljana", // English (Slovenia)
  "en-SL": "Africa/Freetown", // English (Sierra Leone)
  "en-SS": "Africa/Juba", // English (South Sudan)
  "en-SX": "America/Lower_Princes", // English (Sint Maarten)
  "en-SZ": "Africa/Mbabane", // English (Eswatini)
  "en-TC": "America/Grand_Turk", // English (Turks and Caicos Islands)
  "en-TK": "Pacific/Fakaofo", // English (Tokelau)
  "en-TO": "Pacific/Tongatapu", // English (Tonga)
  "en-TT": "America/Port_of_Spain", // English (Trinidad and Tobago)
  "en-TV": "Pacific/Funafuti", // English (Tuvalu)
  "en-TZ": "Africa/Dar_es_Salaam", // English (Tanzania)
  "en-UG": "Africa/Kampala", // English (Uganda)
  "en-US": "America/New_York", // English (United States)
  "en-UM": "Pacific/Midway", // English (U.S. Outlying Islands)
  "en-VC": "America/St_Vincent", // English (Saint Vincent and Grenadines)
  "en-VG": "America/Tortola", // English (British Virgin Islands)
  "en-VI": "America/St_Thomas", // English (U.S. Virgin Islands)
  "en-VU": "Pacific/Efate", // English (Vanuatu)
  "en-WS": "Pacific/Apia", // English (Samoa)
  "en-ZA": "Africa/Johannesburg", // English (South Africa)
  "en-ZM": "Africa/Lusaka", // English (Zambia)
  "en-ZW": "Africa/Harare", // English (Zimbabwe)
  eo: "UTC", // Esperanto, no specific region, default to UTC
  es: "Europe/Madrid", // Spanish, default to Spain
  "es-AR": "America/Argentina/Buenos_Aires", // Spanish (Argentina)
  "es-BO": "America/La_Paz", // Spanish (Bolivia)
  "es-CL": "America/Santiago", // Spanish (Chile)
  "es-CO": "America/Bogota", // Spanish (Colombia)
  "es-CR": "America/Costa_Rica", // Spanish (Costa Rica)
  "es-CU": "America/Havana", // Spanish (Cuba)
  "es-DO": "America/Santo_Domingo", // Spanish (Dominican Republic)
  "es-EA": "Africa/Ceuta", // Spanish (Ceuta & Melilla)
  "es-EC": "America/Guayaquil", // Spanish (Ecuador)
  "es-ES": "Europe/Madrid", // Spanish (Spain)
  "es-GQ": "Africa/Malabo", // Spanish (Equatorial Guinea)
  "es-GT": "America/Guatemala", // Spanish (Guatemala)
  "es-HN": "America/Tegucigalpa", // Spanish (Honduras)
  "es-MX": "America/Mexico_City", // Spanish (Mexico)
  "es-NI": "America/Managua", // Spanish (Nicaragua)
  "es-PA": "America/Panama", // Spanish (Panama)
  "es-PE": "America/Lima", // Spanish (Peru)
  "es-PH": "Asia/Manila", // Spanish (Philippines)
  "es-PR": "America/Puerto_Rico", // Spanish (Puerto Rico)
  "es-PY": "America/Asuncion", // Spanish (Paraguay)
  "es-SV": "America/El_Salvador", // Spanish (El Salvador)
  "es-US": "America/New_York", // Spanish (United States)
  "es-UY": "America/Montevideo", // Spanish (Uruguay)
  "es-VE": "America/Caracas", // Spanish (Venezuela)
  et: "Europe/Tallinn", // Estonian, primarily in Estonia
  "et-EE": "Europe/Tallinn", // Estonian (Estonia)
  eu: "Europe/Madrid", // Basque, primarily in Spain
  "eu-ES": "Europe/Madrid", // Basque (Spain)
  ewo: "Africa/Douala", // Ewondo, primarily in Cameroon
  fa: "Asia/Tehran", // Persian, default to Iran
  "fa-AF": "Asia/Kabul", // Persian (Afghanistan)
  "fa-IR": "Asia/Tehran", // Persian (Iran)
  ff: "Africa/Dakar", // Fulah, primarily in Senegal
  "ff-SN": "Africa/Dakar", // Fulah (Senegal)
  fi: "Europe/Helsinki", // Finnish, primarily in Finland
  "fi-FI": "Europe/Helsinki", // Finnish (Finland)
  fil: "Asia/Manila", // Filipino, primarily in Philippines
  "fil-PH": "Asia/Manila", // Filipino (Philippines)
  fo: "Atlantic/Faroe", // Faroese, primarily in Faroe Islands
  "fo-FO": "Atlantic/Faroe", // Faroese (Faroe Islands)
  fr: "Europe/Paris", // French, default to France
  "fr-BE": "Europe/Brussels", // French (Belgium)
  "fr-BF": "Africa/Ouagadougou", // French (Burkina Faso)
  "fr-BI": "Africa/Gitega", // French (Burundi)
  "fr-BJ": "Africa/Porto-Novo", // French (Benin)
  "fr-BL": "America/Marigot", // French (Saint Barthélemy)
  "fr-CA": "America/Toronto", // French (Canada)
  "fr-CF": "Africa/Bangui", // French (Central African Republic)
  "fr-CG": "Africa/Brazzaville", // French (Congo - Brazzaville)
  "fr-CH": "Europe/Zurich", // French (Switzerland)
  "fr-CI": "Africa/Abidjan", // French (Côte d'Ivoire)
  "fr-CM": "Africa/Douala", // French (Cameroon)
  "fr-DJ": "Africa/Djibouti", // French (Djibouti)
  "fr-DZ": "Africa/Algiers", // French (Algeria)
  "fr-FR": "Europe/Paris", // French (France)
  "fr-GA": "Africa/Libreville", // French (Gabon)
  "fr-GF": "America/Cayenne", // French (French Guiana)
  "fr-GN": "Africa/Conakry", // French (Guinea)
  "fr-GP": "America/Guadeloupe", // French (Guadeloupe)
  "fr-GQ": "Africa/Malabo", // French (Equatorial Guinea)
  "fr-HT": "America/Port-au-Prince", // French (Haiti)
  "fr-KM": "Indian/Comoro", // French (Comoros)
  "fr-LU": "Europe/Luxembourg", // French (Luxembourg)
  "fr-MA": "Africa/Casablanca", // French (Morocco)
  "fr-MC": "Europe/Monaco", // French (Monaco)
  "fr-MF": "America/Marigot", // French (Saint Martin)
  "fr-MG": "Indian/Antananarivo", // French (Madagascar)
  "fr-ML": "Africa/Bamako", // French (Mali)
  "fr-MQ": "America/Martinique", // French (Martinique)
  "fr-MR": "Africa/Nouakchott", // French (Mauritania)
  "fr-MU": "Indian/Mauritius", // French (Mauritius)
  "fr-NC": "Pacific/Noumea", // French (New Caledonia)
  "fr-NE": "Africa/Niamey", // French (Niger)
  "fr-PF": "Pacific/Tahiti", // French (French Polynesia)
  "fr-PM": "America/Miquelon", // French (Saint Pierre and Miquelon)
  "fr-RE": "Indian/Reunion", // French (Réunion)
  "fr-RW": "Africa/Kigali", // French (Rwanda)
  "fr-SC": "Indian/Mahe", // French (Seychelles)
  "fr-SN": "Africa/Dakar", // French (Senegal)
  "fr-SY": "Asia/Damascus", // French (Syria)
  "fr-TD": "Africa/Ndjamena", // French (Chad)
  "fr-TG": "Africa/Lome", // French (Togo)
  "fr-TN": "Africa/Tunis", // French (Tunisia)
  "fr-VU": "Pacific/Efate", // French (Vanuatu)
  "fr-WF": "Pacific/Wallis", // French (Wallis and Futuna)
  "fr-YT": "Indian/Mayotte", // French (Mayotte)
  ga: "Europe/Dublin", // Irish, primarily in Ireland
  "ga-IE": "Europe/Dublin", // Irish (Ireland)
  "ga-GB": "Europe/London", // Irish (United Kingdom)
  gd: "Europe/London", // Scottish Gaelic, primarily in United Kingdom
  "gd-GB": "Europe/London", // Scottish Gaelic (United Kingdom)
  gl: "Europe/Madrid", // Galician, primarily in Spain
  "gl-ES": "Europe/Madrid", // Galician (Spain)
  gsw: "Europe/Zurich", // Swiss German, primarily in Switzerland
  "gsw-CH": "Europe/Zurich", // Swiss German (Switzerland)
  "gsw-FR": "Europe/Paris", // Swiss German (France)
  "gsw-LI": "Europe/Vaduz", // Swiss German (Liechtenstein)
  gu: "Asia/Kolkata", // Gujarati, primarily in India
  "gu-IN": "Asia/Kolkata", // Gujarati (India)
  guz: "Africa/Nairobi", // Gusii, primarily in Kenya
  gv: "Europe/Isle_of_Man", // Manx, primarily in Isle of Man
  "gv-IM": "Europe/Isle_of_Man", // Manx (Isle of Man)
  ha: "Africa/Lagos", // Hausa, primarily in Nigeria
  "ha-GH": "Africa/Accra", // Hausa (Ghana)
  "ha-NE": "Africa/Niamey", // Hausa (Niger)
  "ha-NG": "Africa/Lagos", // Hausa (Nigeria)
  haw: "Pacific/Honolulu", // Hawaiian, primarily in United States
  "haw-US": "Pacific/Honolulu", // Hawaiian (United States)
  he: "Asia/Jerusalem", // Hebrew, primarily in Israel
  "he-IL": "Asia/Jerusalem", // Hebrew (Israel)
  hi: "Asia/Kolkata", // Hindi, primarily in India
  "hi-IN": "Asia/Kolkata", // Hindi (India)
  hr: "Europe/Zagreb", // Croatian, primarily in Croatia
  "hr-BA": "Europe/Sarajevo", // Croatian (Bosnia and Herzegovina)
  "hr-HR": "Europe/Zagreb", // Croatian (Croatia)
  hsb: "Europe/Berlin", // Upper Sorbian, primarily in Germany
  "hsb-DE": "Europe/Berlin", // Upper Sorbian (Germany)
  hu: "Europe/Budapest", // Hungarian, primarily in Hungary
  "hu-HU": "Europe/Budapest", // Hungarian (Hungary)
  hy: "Asia/Yerevan", // Armenian, primarily in Armenia
  "hy-AM": "Asia/Yerevan", // Armenian (Armenia)
  id: "Asia/Jakarta", // Indonesian, primarily in Indonesia
  "id-ID": "Asia/Jakarta", // Indonesian (Indonesia)
  ig: "Africa/Lagos", // Igbo, primarily in Nigeria
  "ig-NG": "Africa/Lagos", // Igbo (Nigeria)
  ii: "Asia/Shanghai", // Sichuan Yi, primarily in China
  "ii-CN": "Asia/Shanghai", // Sichuan Yi (China)
  is: "Atlantic/Reykjavik", // Icelandic, primarily in Iceland
  "is-IS": "Atlantic/Reykjavik", // Icelandic (Iceland)
  it: "Europe/Rome", // Italian, primarily in Italy
  "it-CH": "Europe/Zurich", // Italian (Switzerland)
  "it-IT": "Europe/Rome", // Italian (Italy)
  "it-SM": "Europe/San_Marino", // Italian (San Marino)
  "it-VA": "Europe/Vatican", // Italian (Vatican City)
  ja: "Asia/Tokyo", // Japanese, primarily in Japan
  "ja-JP": "Asia/Tokyo", // Japanese (Japan)
  jgo: "Africa/Douala", // Ngomba, primarily in Cameroon
  jmc: "Africa/Dar_es_Salaam", // Machame, primarily in Tanzania
  ka: "Asia/Tbilisi", // Georgian, primarily in Georgia
  "ka-GE": "Asia/Tbilisi", // Georgian (Georgia)
  kab: "Africa/Algiers", // Kabyle, primarily in Algeria
  kam: "Africa/Nairobi", // Kamba, primarily in Kenya
  "kam-KE": "Africa/Nairobi", // Kamba (Kenya)
  kde: "Africa/Dar_es_Salaam", // Makonde, primarily in Tanzania
  kea: "Atlantic/Cape_Verde", // Kabuverdianu, primarily in Cape Verde
  khq: "Africa/Bamako", // Koyra Chiini, primarily in Mali
  ki: "Africa/Nairobi", // Kikuyu, primarily in Kenya
  "ki-KE": "Africa/Nairobi", // Kikuyu (Kenya)
  kk: "Asia/Almaty", // Kazakh, primarily in Kazakhstan
  "kk-Cyrl": "Asia/Almaty", // Kazakh (Cyrillic)
  "kk-KZ": "Asia/Almaty", // Kazakh (Kazakhstan)
  kkj: "Africa/Douala", // Kako, primarily in Cameroon
  kl: "America/Nuuk", // Kalaallisut, primarily in Greenland
  "kl-GL": "America/Nuuk", // Kalaallisut (Greenland)
  kln: "Africa/Nairobi", // Kalenjin, primarily in Kenya
  km: "Asia/Phnom_Penh", // Khmer, primarily in Cambodia
  "km-KH": "Asia/Phnom_Penh", // Khmer (Cambodia)
  kn: "Asia/Kolkata", // Kannada, primarily in India
  "kn-IN": "Asia/Kolkata", // Kannada (India)
  ko: "Asia/Seoul", // Korean, default to South Korea
  "ko-KP": "Asia/Pyongyang", // Korean (North Korea)
  "ko-KR": "Asia/Seoul", // Korean (South Korea)
  kok: "Asia/Kolkata", // Konkani, primarily in India
  ks: "Asia/Kolkata", // Kashmiri, primarily in India
  "ks-IN": "Asia/Kolkata", // Kashmiri (India)
  ksb: "Africa/Dar_es_Salaam", // Shambala, primarily in Tanzania
  ksf: "Africa/Douala", // Bafia, primarily in Cameroon
  ksh: "Europe/Berlin", // Colognian, primarily in Germany
  ku: "Asia/Istanbul", // Kurdish, primarily in Turkey
  "ku-TR": "Asia/Istanbul", // Kurdish (Turkey)
  kw: "Europe/London", // Cornish, primarily in United Kingdom
  "kw-GB": "Europe/London", // Cornish (United Kingdom)
  ky: "Asia/Bishkek", // Kyrgyz, primarily in Kyrgyzstan
  "ky-KG": "Asia/Bishkek", // Kyrgyz (Kyrgyzstan)
  lag: "Africa/Dar_es_Salaam", // Langi, primarily in Tanzania
  lb: "Europe/Luxembourg", // Luxembourgish, primarily in Luxembourg
  "lb-LU": "Europe/Luxembourg", // Luxembourgish (Luxembourg)
  lg: "Africa/Kampala", // Ganda, primarily in Uganda
  "lg-UG": "Africa/Kampala", // Ganda (Uganda)
  lkt: "America/Denver", // Lakota, primarily in United States
  ln: "Africa/Kinshasa", // Lingala, primarily in Congo - Kinshasa
  "ln-AO": "Africa/Luanda", // Lingala (Angola)
  "ln-CF": "Africa/Bangui", // Lingala (Central African Republic)
  "ln-CG": "Africa/Brazzaville", // Lingala (Congo - Brazzaville)
  lo: "Asia/Vientiane", // Lao, primarily in Laos
  "lo-LA": "Asia/Vientiane", // Lao (Laos)
  lrc: "Asia/Tehran", // Northern Luri, primarily in Iran
  lt: "Europe/Vilnius", // Lithuanian, primarily in Lithuania
  "lt-LT": "Europe/Vilnius", // Lithuanian (Lithuania)
  lu: "Africa/Kinshasa", // Luba-Katanga, primarily in Congo - Kinshasa
  "lu-CD": "Africa/Kinshasa", // Luba-Katanga (Congo - Kinshasa)
  luo: "Africa/Nairobi", // Luo, primarily in Kenya
  luy: "Africa/Nairobi", // Luyia, primarily in Kenya
  lv: "Europe/Riga", // Latvian, primarily in Latvia
  "lv-LV": "Europe/Riga", // Latvian (Latvia)
  mas: "Africa/Nairobi", // Masai, primarily in Kenya
  "mas-KE": "Africa/Nairobi", // Masai (Kenya)
  "mas-TZ": "Africa/Dar_es_Salaam", // Masai (Tanzania)
  mer: "Africa/Nairobi", // Meru, primarily in Kenya
  mfe: "Indian/Mauritius", // Morisyen, primarily in Mauritius
  mg: "Indian/Antananarivo", // Malagasy, primarily in Madagascar
  "mg-MG": "Indian/Antananarivo", // Malagasy (Madagascar)
  mgh: "Africa/Maputo", // Makhuwa-Meetto, primarily in Mozambique
  mgo: "Africa/Douala", // Metaʼ, primarily in Cameroon
  mk: "Europe/Skopje", // Macedonian, primarily in Macedonia
  "mk-MK": "Europe/Skopje", // Macedonian (Macedonia)
  ml: "Asia/Kolkata", // Malayalam, primarily in India
  "ml-IN": "Asia/Kolkata", // Malayalam (India)
  mn: "Asia/Ulaanbaatar", // Mongolian, primarily in Mongolia
  "mn-Cyrl": "Asia/Ulaanbaatar", // Mongolian (Cyrillic)
  "mn-MN": "Asia/Ulaanbaatar", // Mongolian (Mongolia)
  mr: "Asia/Kolkata", // Marathi, primarily in India
  "mr-IN": "Asia/Kolkata", // Marathi (India)
  ms: "Asia/Kuala_Lumpur", // Malay, default to Malaysia
  "ms-BN": "Asia/Brunei", // Malay (Brunei)
  "ms-MY": "Asia/Kuala_Lumpur", // Malay (Malaysia)
  "ms-SG": "Asia/Singapore", // Malay (Singapore)
  mt: "Europe/Malta", // Maltese, primarily in Malta
  "mt-MT": "Europe/Malta", // Maltese (Malta)
  mua: "Africa/Douala", // Mundang, primarily in Cameroon
  my: "Asia/Yangon", // Burmese, primarily in Myanmar
  "my-MM": "Asia/Yangon", // Burmese (Myanmar)
  mzn: "Asia/Tehran", // Mawayana, primarily in Iran
  naq: "Africa/Windhoek", // Nama, primarily in Namibia
  nb: "Europe/Oslo", // Norwegian Bokmål, primarily in Norway
  "nb-NO": "Europe/Oslo", // Norwegian Bokmål (Norway)
  nd: "Africa/Harare", // North Ndebele, primarily in Zimbabwe
  "nd-ZW": "Africa/Harare", // North Ndebele (Zimbabwe)
  ne: "Asia/Kathmandu", // Nepali, default to Nepal
  "ne-IN": "Asia/Kolkata", // Nepali (India)
  "ne-NP": "Asia/Kathmandu", // Nepali (Nepal)
  nl: "Europe/Amsterdam", // Dutch, default to Netherlands
  "nl-AW": "America/Aruba", // Dutch (Aruba)
  "nl-BE": "Europe/Brussels", // Dutch (Belgium)
  "nl-BQ": "America/Kralendijk", // Dutch (Caribbean Netherlands)
  "nl-CW": "America/Curacao", // Dutch (Curaçao)
  "nl-NL": "Europe/Amsterdam", // Dutch (Netherlands)
  "nl-SR": "America/Paramaribo", // Dutch (Suriname)
  "nl-SX": "America/Lower_Princes", // Dutch (Sint Maarten)
  nmg: "Africa/Douala", // Kwasio, primarily in Cameroon
  nn: "Europe/Oslo", // Norwegian Nynorsk, primarily in Norway
  "nn-NO": "Europe/Oslo", // Norwegian Nynorsk (Norway)
  nnh: "Africa/Douala", // Ngiemboon, primarily in Cameroon
  nus: "Africa/Juba", // Nuer, primarily in South Sudan
  nyn: "Africa/Kampala", // Nyankole, primarily in Uganda
  om: "Africa/Addis_Ababa", // Oromo, primarily in Ethiopia
  "om-ET": "Africa/Addis_Ababa", // Oromo (Ethiopia)
  "om-KE": "Africa/Nairobi", // Oromo (Kenya)
  or: "Asia/Kolkata", // Oriya, primarily in India
  os: "Asia/Tbilisi", // Ossetic, primarily in Georgia
  "os-GE": "Asia/Tbilisi", // Ossetic (Georgia)
  "os-RU": "Europe/Moscow", // Ossetic (Russia)
  pa: "Asia/Kolkata", // Punjabi, default to India
  "pa-Arab": "Asia/Karachi", // Punjabi (Arabic)
  "pa-IN": "Asia/Kolkata", // Punjabi (India)
  "pa-PK": "Asia/Karachi", // Punjabi (Pakistan)
  pl: "Europe/Warsaw", // Polish, primarily in Poland
  "pl-PL": "Europe/Warsaw", // Polish (Poland)
  ps: "Asia/Kabul", // Pashto, default to Afghanistan
  "ps-AF": "Asia/Kabul", // Pashto (Afghanistan)
  "ps-PK": "Asia/Karachi", // Pashto (Pakistan)
  pt: "Europe/Lisbon", // Portuguese, default to Portugal
  "pt-AO": "Africa/Luanda", // Portuguese (Angola)
  "pt-BR": "America/Sao_Paulo", // Portuguese (Brazil)
  "pt-CV": "Atlantic/Cape_Verde", // Portuguese (Cape Verde)
  "pt-GQ": "Africa/Malabo", // Portuguese (Equatorial Guinea)
  "pt-GW": "Africa/Bissau", // Portuguese (Guinea-Bissau)
  "pt-LU": "Europe/Luxembourg", // Portuguese (Luxembourg)
  "pt-MO": "Asia/Macau", // Portuguese (Macao SAR China)
  "pt-MZ": "Africa/Maputo", // Portuguese (Mozambique)
  "pt-PT": "Europe/Lisbon", // Portuguese (Portugal)
  "pt-ST": "Africa/Sao_Tome", // Portuguese (São Tomé and Príncipe)
  "pt-TL": "Asia/Dili", // Portuguese (Timor-Leste)
  qu: "America/Lima", // Quechua, primarily in Peru
  "qu-BO": "America/La_Paz", // Quechua (Bolivia)
  "qu-EC": "America/Guayaquil", // Quechua (Ecuador)
  "qu-PE": "America/Lima", // Quechua (Peru)
  rm: "Europe/Zurich", // Romansh, primarily in Switzerland
  "rm-CH": "Europe/Zurich", // Romansh (Switzerland)
  rn: "Africa/Gitega", // Rundi, primarily in Burundi
  "rn-BI": "Africa/Gitega", // Rundi (Burundi)
  ro: "Europe/Bucharest", // Romanian, primarily in Romania
  "ro-MD": "Europe/Chisinau", // Romanian (Moldova)
  "ro-RO": "Europe/Bucharest", // Romanian (Romania)
  rof: "Africa/Dar_es_Salaam", // Rombo, primarily in Tanzania
  ru: "Europe/Moscow", // Russian, default to Russia
  "ru-BY": "Europe/Minsk", // Russian (Belarus)
  "ru-KG": "Asia/Bishkek", // Russian (Kyrgyzstan)
  "ru-KZ": "Asia/Almaty", // Russian (Kazakhstan)
  "ru-MD": "Europe/Chisinau", // Russian (Moldova)
  "ru-RU": "Europe/Moscow", // Russian (Russia)
  "ru-UA": "Europe/Kiev", // Russian (Ukraine)
  rw: "Africa/Kigali", // Kinyarwanda, primarily in Rwanda
  "rw-RW": "Africa/Kigali", // Kinyarwanda (Rwanda)
  rwk: "Africa/Dar_es_Salaam", // Rwa, primarily in Tanzania
  sah: "Asia/Yakutsk", // Yakut, primarily in Russia
  "sah-RU": "Asia/Yakutsk", // Yakut (Russia)
  saq: "Africa/Nairobi", // Samburu, primarily in Kenya
  sbp: "Africa/Dar_es_Salaam", // Sangu, primarily in Tanzania
  se: "Europe/Oslo", // Northern Sami, primarily in Norway
  "se-FI": "Europe/Helsinki", // Northern Sami (Finland)
  "se-NO": "Europe/Oslo", // Northern Sami (Norway)
  "se-SE": "Europe/Stockholm", // Northern Sami (Sweden)
  seh: "Africa/Maputo", // Sena, primarily in Mozambique
  ses: "Africa/Bamako", // Koyraboro Senni, primarily in Mali
  sg: "Africa/Bangui", // Sango, primarily in Central African Republic
  "sg-CF": "Africa/Bangui", // Sango (Central African Republic)
  shi: "Africa/Casablanca", // Tachelhit, primarily in Morocco
  "shi-MA": "Africa/Casablanca", // Tachelhit (Morocco)
  si: "Asia/Colombo", // Sinhala, primarily in Sri Lanka
  "si-LK": "Asia/Colombo", // Sinhala (Sri Lanka)
  sk: "Europe/Bratislava", // Slovak, primarily in Slovakia
  "sk-SK": "Europe/Bratislava", // Slovak (Slovakia)
  sl: "Europe/Ljubljana", // Slovenian, primarily in Slovenia
  "sl-SI": "Europe/Ljubljana", // Slovenian (Slovenia)
  sm: "Pacific/Apia", // Samoan, primarily in Samoa
  "sm-WS": "Pacific/Apia", // Samoan (Samoa)
  sn: "Africa/Harare", // Shona, primarily in Zimbabwe
  "sn-ZW": "Africa/Harare", // Shona (Zimbabwe)
  so: "Africa/Mogadishu", // Somali, primarily in Somalia
  "so-DJ": "Africa/Djibouti", // Somali (Djibouti)
  "so-ET": "Africa/Addis_Ababa", // Somali (Ethiopia)
  "so-KE": "Africa/Nairobi", // Somali (Kenya)
  "so-SO": "Africa/Mogadishu", // Somali (Somalia)
  sq: "Europe/Tirane", // Albanian, primarily in Albania
  "sq-AL": "Europe/Tirane", // Albanian (Albania)
  "sq-MK": "Europe/Skopje", // Albanian (Macedonia)
  sr: "Europe/Belgrade", // Serbian, default to Serbia
  "sr-BA": "Europe/Sarajevo", // Serbian (Bosnia and Herzegovina)
  "sr-Cyrl": "Europe/Belgrade", // Serbian (Cyrillic)
  "sr-Cyrl-BA": "Europe/Sarajevo", // Serbian (Cyrillic, Bosnia and Herzegovina)
  "sr-Cyrl-ME": "Europe/Podgorica", // Serbian (Cyrillic, Montenegro)
  "sr-Cyrl-RS": "Europe/Belgrade", // Serbian (Cyrillic, Serbia)
  "sr-Latn": "Europe/Belgrade", // Serbian (Latin)
  "sr-Latn-BA": "Europe/Sarajevo", // Serbian (Latin, Bosnia and Herzegovina)
  "sr-Latn-ME": "Europe/Podgorica", // Serbian (Latin, Montenegro)
  "sr-Latn-RS": "Europe/Belgrade", // Serbian (Latin, Serbia)
  "sr-RS": "Europe/Belgrade", // Serbian (Serbia)
  ss: "Africa/Mbabane", // Swati, primarily in Eswatini
  "ss-SZ": "Africa/Mbabane", // Swati (Eswatini)
  "ss-ZA": "Africa/Johannesburg", // Swati (South Africa)
  ssy: "Africa/Asmara", // Saho, primarily in Eritrea
  st: "Africa/Maseru", // Southern Sotho, primarily in Lesotho
  "st-LS": "Africa/Maseru", // Southern Sotho (Lesotho)
  "st-ZA": "Africa/Johannesburg", // Southern Sotho (South Africa)
  sv: "Europe/Stockholm", // Swedish, primarily in Sweden
  "sv-AX": "Europe/Mariehamn", // Swedish (Åland Islands)
  "sv-FI": "Europe/Helsinki", // Swedish (Finland)
  "sv-SE": "Europe/Stockholm", // Swedish (Sweden)
  sw: "Africa/Dar_es_Salaam", // Swahili, default to Tanzania
  "sw-CD": "Africa/Kinshasa", // Swahili (Congo - Kinshasa)
  "sw-KE": "Africa/Nairobi", // Swahili (Kenya)
  "sw-TZ": "Africa/Dar_es_Salaam", // Swahili (Tanzania)
  "sw-UG": "Africa/Kampala", // Swahili (Uganda)
  ta: "Asia/Colombo", // Tamil, default to Sri Lanka
  "ta-IN": "Asia/Kolkata", // Tamil (India)
  "ta-LK": "Asia/Colombo", // Tamil (Sri Lanka)
  "ta-MY": "Asia/Kuala_Lumpur", // Tamil (Malaysia)
  "ta-SG": "Asia/Singapore", // Tamil (Singapore)
  te: "Asia/Kolkata", // Telugu, primarily in India
  "te-IN": "Asia/Kolkata", // Telugu (India)
  teo: "Africa/Kampala", // Teso, primarily in Uganda
  tg: "Asia/Dushanbe", // Tajik, primarily in Tajikistan
  "tg-TJ": "Asia/Dushanbe", // Tajik (Tajikistan)
  th: "Asia/Bangkok", // Thai, primarily in Thailand
  "th-TH": "Asia/Bangkok", // Thai (Thailand)
  ti: "Africa/Addis_Ababa", // Tigrinya, primarily in Ethiopia
  "ti-ER": "Africa/Asmara", // Tigrinya (Eritrea)
  "ti-ET": "Africa/Addis_Ababa", // Tigrinya (Ethiopia)
  tk: "Asia/Ashgabat", // Turkmen, primarily in Turkmenistan
  "tk-TM": "Asia/Ashgabat", // Turkmen (Turkmenistan)
  to: "Pacific/Tongatapu", // Tongan, primarily in Tonga
  "to-TO": "Pacific/Tongatapu", // Tongan (Tonga)
  tr: "Asia/Istanbul", // Turkish, default to Turkey
  "tr-CY": "Asia/Nicosia", // Turkish (Cyprus)
  "tr-TR": "Asia/Istanbul", // Turkish (Turkey)
  tt: "Europe/Moscow", // Tatar, primarily in Russia
  "tt-RU": "Europe/Moscow", // Tatar (Russia)
  twq: "Africa/Niamey", // Tasawaq, primarily in Niger
  tzm: "Africa/Casablanca", // Central Atlas Tamazight, primarily in Morocco
  "tzm-MA": "Africa/Casablanca", // Central Atlas Tamazight (Morocco)
  ug: "Asia/Urumqi", // Uyghur, primarily in China
  "ug-CN": "Asia/Urumqi", // Uyghur (China)
  uk: "Europe/Kiev", // Ukrainian, primarily in Ukraine
  "uk-UA": "Europe/Kiev", // Ukrainian (Ukraine)
  ur: "Asia/Karachi", // Urdu, default to Pakistan
  "ur-IN": "Asia/Kolkata", // Urdu (India)
  "ur-PK": "Asia/Karachi", // Urdu (Pakistan)
  uz: "Asia/Tashkent", // Uzbek, default to Uzbekistan
  "uz-Arab": "Asia/Kabul", // Uzbek (Arabic)
  "uz-Cyrl": "Asia/Tashkent", // Uzbek (Cyrillic)
  "uz-Latn": "Asia/Tashkent", // Uzbek (Latin)
  "uz-UZ": "Asia/Tashkent", // Uzbek (Uzbekistan)
  vai: "Africa/Monrovia", // Vai, primarily in Liberia
  "vai-LR": "Africa/Monrovia", // Vai (Liberia)
  "vai-Vaii": "Africa/Monrovia", // Vai (Vai script)
  "vai-VLatn": "Africa/Monrovia", // Vai (Latin script)
  ve: "Africa/Johannesburg", // Venda, primarily in South Africa
  "ve-ZA": "Africa/Johannesburg", // Venda (South Africa)
  vi: "Asia/Ho_Chi_Minh", // Vietnamese, primarily in Vietnam
  "vi-VN": "Asia/Ho_Chi_Minh", // Vietnamese (Vietnam)
  vo: "UTC", // Volapük, no specific region, default to UTC
  vun: "Africa/Dar_es_Salaam", // Vunjo, primarily in Tanzania
  wae: "Europe/Zurich", // Walser, primarily in Switzerland
  "wae-CH": "Europe/Zurich", // Walser (Switzerland)
  wal: "Africa/Addis_Ababa", // Wolaytta, primarily in Ethiopia
  wo: "Africa/Dakar", // Wolof, primarily in Senegal
  "wo-SN": "Africa/Dakar", // Wolof (Senegal)
  xog: "Africa/Kampala", // Soga, primarily in Uganda
  yav: "Africa/Douala", // Yangben, primarily in Cameroon
  yo: "Africa/Lagos", // Yoruba, primarily in Nigeria
  "yo-BJ": "Africa/Porto-Novo", // Yoruba (Benin)
  "yo-NG": "Africa/Lagos", // Yoruba (Nigeria)
  yue: "Asia/Hong_Kong", // Cantonese, default to Hong Kong
  "yue-Hans": "Asia/Hong_Kong", // Cantonese (Simplified)
  "yue-Hant": "Asia/Hong_Kong", // Cantonese (Traditional)
  zgh: "Africa/Casablanca", // Standard Moroccan Tamazight, primarily in Morocco
  zh: "Asia/Shanghai", // Chinese, default to China
  "zh-Hans": "Asia/Shanghai", // Chinese (Simplified)
  "zh-Hans-CN": "Asia/Shanghai", // Chinese (Simplified, China)
  "zh-Hans-HK": "Asia/Hong_Kong", // Chinese (Simplified, Hong Kong)
  "zh-Hans-MO": "Asia/Macau", // Chinese (Simplified, Macao)
  "zh-Hans-SG": "Asia/Singapore", // Chinese (Simplified, Singapore)
  "zh-Hant": "Asia/Taipei", // Chinese (Traditional)
  "zh-Hant-HK": "Asia/Hong_Kong", // Chinese (Traditional, Hong Kong)
  "zh-Hant-MO": "Asia/Macau", // Chinese (Traditional, Macao)
  "zh-Hant-TW": "Asia/Taipei", // Chinese (Traditional, Taiwan)
  zu: "Africa/Johannesburg", // Zulu, primarily in South Africa
  "zu-ZA": "Africa/Johannesburg", // Zulu (South Africa)
};
// Add click handler for options
document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".language-dropdown option");
  options.forEach((option) => {
    console.log(option.value);
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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("languageSearch");
  const options = document.querySelectorAll(".language-dropdown option");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    options.forEach((option) => {
      const text = option.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        option.classList.remove("hidden");
      } else {
        option.classList.add("hidden");
      }
    });
  });

  // Prevent dropdown from closing when typing in search input
  searchInput.addEventListener("click", function (event) {
    event.stopPropagation();
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
