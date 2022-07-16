const stringLength = (string) => {

  if(string.length > 0 && string.length <= 10)
  return string.length;
  if(string.length > 10)
  return 'input string is more than 10';
}

export default stringLength;