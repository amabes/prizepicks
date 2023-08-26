const formatString = (str = '') => {
  let result = str;
  if (str.includes('-')) {
    result = str.replaceAll('-', ' ');
  }

  return result;
};

export default formatString;
