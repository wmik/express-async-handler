const asyncUtil = fn =>
  function asyncUtilWrap(...args) {
    const fnReturn = fn(...args);
    const next = args.find(arg => typeof arg === 'function');
    return Promise.resolve(fnReturn).catch(next);
  };

module.exports = asyncUtil;
