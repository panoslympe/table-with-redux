const substring = (str, start, end) => {
  if (start < 0) {
    start = str.length + start;
  }
  if (end < 0) {
    end = str.length + end;
  }
  return str.substring(start, end);
}

export default substring;