const mathUtils = {
  range: (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  },

  random: arr =>  {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  },

  sum: arr => {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
      s+=arr[i];
    }
    return s;
  }
};

export default mathUtils;
