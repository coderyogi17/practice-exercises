function boundFuncTimer(obj, func, delay) {
  // Your code here
const boundPurr = func.bind(obj);

global.setTimeout(boundPurr, delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;