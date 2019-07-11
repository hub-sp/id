const newID = (length, concat) => {
  let id =
    (
      0.24 *
      ((Math.random() *
        Number.MAX_SAFE_INTEGER *
        (Math.random() * Number.MIN_SAFE_INTEGER)) /
        Math.random()) *
      -1
    )
      .toString(36)
      .replace(/0+$/, '') +
    (concat &&
    typeof concat.value === 'string' &&
    concat.from === 'id-generator'
      ? concat.value
      : '');

  if (typeof length === 'number') {
    return Math.abs(length) > id.length
      ? newID(length, { from: 'id-generator', value: id })
      : id.slice(0, length);
  }

  return id;
};

module.exports = newID;
