module.exports = class {
  constructor(options) {
    const {
      method,
      url,
      path,
    } = options;

    this.options = {
      headers: {
        'Content-Type': 'application/json',
      },

      method,
      baseURL : url,
      url     : path,
      timeout : 3000,
    };
    return (this.options);
  }
};
