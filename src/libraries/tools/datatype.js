/* eslint-disable no-else-return */
module.exports = {

  snakeToCamel: (stringSnake) => {
    const wordStringValue = stringSnake.split('_');
    let stringCamel;

    wordStringValue.forEach((stringValue, i) => {
      if (i === 0) {
        stringCamel = stringValue;
      } else {
        stringCamel += stringValue.charAt(0).toUpperCase() + stringValue.slice(1);
      }
    });
    return stringCamel;
  },

  clearUndefineParams: (params) => {
    const objectToClean = { ...params };

    Object.keys(objectToClean).forEach((key) => {
      const isUndefined = typeof objectToClean[key] === 'undefined';
      if (isUndefined) { delete objectToClean[key]; }
    });

    return objectToClean;
  },
};
