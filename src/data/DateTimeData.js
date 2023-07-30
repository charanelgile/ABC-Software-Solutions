let date = new Date();

export let yyyy = date.getFullYear();
export let mm = date.getMonth();
export let dd = date.getDate();
export let hrs = date.getHours();
export let mins = date.getMinutes();

export let flagAMorPM = "PM";

switch (mm) {
  case 0:
    mm = "JAN";
    break;
  case 1:
    mm = "FEB";
    break;
  case 2:
    mm = "MAR";
    break;
  case 3:
    mm = "APR";
    break;
  case 4:
    mm = "MAY";
    break;
  case 5:
    mm = "JUN";
    break;
  case 6:
    mm = "JUL";
    break;
  case 7:
    mm = "AUG";
    break;
  case 8:
    mm = "SEPT";
    break;
  case 9:
    mm = "OCT";
    break;
  case 10:
    mm = "NOV";
    break;
  default:
    mm = "DEC";
    break;
}

if (hrs >= 0 && hrs <= 11) {
  flagAMorPM = "AM";
}

switch (hrs) {
  case 1:
  case 13:
    hrs = "01";
    break;

  case 2:
  case 14:
    hrs = "02";
    break;

  case 3:
  case 15:
    hrs = "03";
    break;

  case 4:
  case 16:
    hrs = "04";
    break;

  case 5:
  case 17:
    hrs = "05";
    break;

  case 6:
  case 18:
    hrs = "06";
    break;

  case 7:
  case 19:
    hrs = "07";
    break;

  case 8:
  case 20:
    hrs = "08";
    break;

  case 9:
  case 21:
    hrs = "09";
    break;

  case 10:
  case 22:
    hrs = "10";
    break;

  case 11:
  case 23:
    hrs = "11";
    break;

  case 0:
  case 12:
  default:
    hrs = "12";
    break;
}

if (mins === 1) {
  mins = "01";
} else if (mins === 2) {
  mins = "02";
} else if (mins === 3) {
  mins = "03";
} else if (mins === 4) {
  mins = "04";
} else if (mins === 5) {
  mins = "05";
} else if (mins === 6) {
  mins = "06";
} else if (mins === 7) {
  mins = "07";
} else if (mins === 8) {
  mins = "08";
} else if (mins === 9) {
  mins = "09";
}

// export const DateTime = `${yyyy}-${mm}-${dd} - ${hrs}:${mins} ${flagAMorPM}`;
