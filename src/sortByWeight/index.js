export const sortByWeight = arr => {
  if (Array.isArray(arr)) {
    const elSum = el => {
      return [...el].reduce((a, b) => a + parseInt(b), 0);
    };
  
    return arr.sort((a, b) => {
      if (elSum(a) <= elSum(b)) {
        return -1;
      }
      return 1;
    });
  } else {
    return 'Wrong Parameter';
  }
};
