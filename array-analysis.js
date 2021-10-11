const arrayAnalysis = (array) => {
  return {
    average: array.reduce((prev, current) => prev + current) / array.length,
    min: array.reduce((prev, current) => current < prev ? current : prev),
    max: array.reduce((prev, current) => current > prev ? current : prev),
    length: array.length
  };
};

export { arrayAnalysis as default };
