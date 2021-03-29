function multiplyData(data) {
  const newData = [];
  data.forEach(e => newData.push({ value: e.value * e.multiplier, multiplier: e.multiplier }));
  return newData;
}

export default multiplyData;
