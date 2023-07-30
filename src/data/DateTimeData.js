let dateObj = new Date();

let yyyy = dateObj.getFullYear();
let mmm = dateObj.getMonth();
let dd = dateObj.getDate();
let hh = dateObj.getHours();
let mm = dateObj.getMinutes();

export let flagAMorPM = "PM";

switch (mmm) {
  case 0:
    mmm = "JAN";
    break;
  case 1:
    mmm = "FEB";
    break;
  case 2:
    mmm = "MAR";
    break;
  case 3:
    mmm = "APR";
    break;
  case 4:
    mmm = "MAY";
    break;
  case 5:
    mmm = "JUN";
    break;
  case 6:
    mmm = "JUL";
    break;
  case 7:
    mmm = "AUG";
    break;
  case 8:
    mmm = "SEPT";
    break;
  case 9:
    mmm = "OCT";
    break;
  case 10:
    mmm = "NOV";
    break;
  default:
    mmm = "DEC";
    break;
}

if (hh >= 0 && hh <= 11) {
  flagAMorPM = "AM";
}

switch (hh) {
  case 1:
  case 13:
    hh = "01";
    break;

  case 2:
  case 14:
    hh = "02";
    break;

  case 3:
  case 15:
    hh = "03";
    break;

  case 4:
  case 16:
    hh = "04";
    break;

  case 5:
  case 17:
    hh = "05";
    break;

  case 6:
  case 18:
    hh = "06";
    break;

  case 7:
  case 19:
    hh = "07";
    break;

  case 8:
  case 20:
    hh = "08";
    break;

  case 9:
  case 21:
    hh = "09";
    break;

  case 10:
  case 22:
    hh = "10";
    break;

  case 11:
  case 23:
    hh = "11";
    break;

  case 0:
  case 12:
  default:
    hh = "12";
    break;
}

if (mm === 1) {
  mm = "01";
} else if (mm === 2) {
  mm = "02";
} else if (mm === 3) {
  mm = "03";
} else if (mm === 4) {
  mm = "04";
} else if (mm === 5) {
  mm = "05";
} else if (mm === 6) {
  mm = "06";
} else if (mm === 7) {
  mm = "07";
} else if (mm === 8) {
  mm = "08";
} else if (mm === 9) {
  mm = "09";
}

// export const DateTime = `${yyyy}-${mmm}-${dd} - ${hh}:${mm} ${flagAMorPM}`;

export const year = yyyy;
export const month = mmm;
export const date = dd;
export const hrs = hh;
export const mins = mm;
export const eitherAMorPM = flagAMorPM;
