function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(
        `You selected month no "${monthNumber}" and it's a "January"`
      );
      break;
    case 2:
      console.log(
        `you selected month no "${monthNumber}" and it's a "February"`
      );
      break;
    case 3:
      console.log(`you selected month no "${monthNumber}" and it's a "march"`);
      break;
    case 4:
      console.log(`you selected month no "${monthNumber}" and it's a "April"`);
      break;
    case 5:
      console.log(`you selected month no "${monthNumber}" and it's a "may"`);
      break;
    case 6:
      console.log(`you selected month no "${monthNumber}" and it's "jun"`);
      break;
    case 7:
      console.log(`you selected month no "${monthNumber}" and it's "july"`);
      break;
    case 8:
      console.log(`you selected month no "${monthNumber}" and it's "August"`);
      break;
    case 9:
      console.log(
        `you selected month no "${monthNumber}" and it's "September"`
      );
      break;
    case 10:
      console.log(`you selected month no "${monthNumber}" and it's "October"`);
      break;
    case 11:
      console.log(`you selected month no "${monthNumber}" and it's "November"`);
      break;
    case 12:
      console.log(`you selected month no "${monthNumber}" and it's "December"`);
      break;
    default:
      console.log(
        `you selected month no "${monthNumber}", Please enter a valid month number`
      );
      break;
  }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
