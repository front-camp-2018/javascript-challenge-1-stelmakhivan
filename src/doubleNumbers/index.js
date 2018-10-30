export const doubleNum = num => {
  if (!Number.isNaN(num) || !Number.isFinite(num)) {
    const strNum = num.toString();
    const halfLength = strNum.length / 2;

    if (halfLength >= 1) {
      const leftSide = Array.prototype.slice.call(strNum, 0, halfLength);
      const rightSide = Array.prototype.slice.call(strNum, halfLength);

      if (leftSide.toString() === rightSide.toString()) {
        return num;
      }
      
    }
    return num * 2;
  } else {
    return 'Wrong Parameter';
  }
};
