function isNumber(val) {
  val = val + "";
  if (val.length < 1) return false;
  else return true;
}

function isInteger(val) {
  if (isNumber(val)) {
    return val % 1 === 0;
  } else {
    return false;
  }
}

function formatNum(inNum) {
  outStr = "" + inNum;
  inNum = parseFloat(outStr);
  if (outStr.length > 10) {
    outStr = "" + inNum.toPrecision(10);
  }
  if (outStr.indexOf(".") > -1) {
    while (outStr.charAt(outStr.length - 1) == "0") {
      outStr = outStr.substr(0, outStr.length - 1);
    }
    if (outStr.charAt(outStr.length - 1) == ".")
      outStr = outStr.substr(0, outStr.length - 1);
    return outStr;
  } else {
    return outStr;
  }
}
