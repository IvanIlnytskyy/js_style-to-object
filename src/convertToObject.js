'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';').filter(Boolean);

  return styleArray.reduce((styleObj, style) => {
    const [key, value] = style.split(':').map((segment) => {
      return segment.trim();
    });

    if (key && value) {
      styleObj[key] = value;
    }

    return styleObj;
  }, {});
}

module.exports = convertToObject;
