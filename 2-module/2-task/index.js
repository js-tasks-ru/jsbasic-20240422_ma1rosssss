let schedule = {};

function isEmpty(obj) {
  let arr = Object.keys(obj);

  if (arr.length === 0) {
    return true;
  } else if (arr.length > 0) {
    return false;
  }
}

isEmpty(schedule);
