'use strict';

/**
 * @param {Object} state //
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const stateResult = [];
  let matrizObj = { ...state };

  actions.forEach((element) => {
    switch (element.type) {
      case 'addProperties':
        matrizObj = { ...matrizObj, ...element.extraData };
        break;
      case 'removeProperties':
        matrizObj = { ...matrizObj };

        element.keysToRemove.forEach((key) => {
          delete matrizObj[key];
        });
        break;
      case 'clear':
        matrizObj = {};
        break;
    }
    stateResult.push({ ...matrizObj });
  });

  return stateResult;
}
module.exports = transformStateWithClones;
