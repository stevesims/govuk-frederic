export const objectHasValueForKeys = (item = {}, keys = []) => Object.entries(item).reduce(
  (hasValue, [key, value]) => hasValue || (keys.includes(key) && (value !== undefined)), false,
);

export const arrayHasValueForKeys = (array = [], keys = []) => ((array.length > 0) && array.reduce(
  (hasValue, item) => hasValue || objectHasValueForKeys(item, keys), false,
));

export function keysFromFields(fields) {
  return fields.map(field => field.key);
}

export const titlesFromFields = fields => fields.map(field => field.heading || field.title);

export const rowsFromArray = (array, fields, skipEmptyRows, defaultTransform = value => (value || '-')) => {
  const keys = keysFromFields(fields);

  return array.reduce((rows, item) => {
    if (!skipEmptyRows || objectHasValueForKeys(item, keys)) {
      rows.push(
        fields.map(({ key, transform = defaultTransform}) => transform(item[key])),
      );
    }

    return rows;
  }, []);
};

// TODO: ALL THE DOCS
// TODO: SOME TESTS
// Empty values and keys are treated the same
export const rowsFromObject = (object, fields, skipEmptyValues, defaultTransform = value => value) => {
  return fields.reduce(
    (table, { key, heading, names, transform = defaultTransform}) => {
      // If there is a name attribute in the fields object use it, otherwise fallback to the key
      const nameAttribute = names ? names : key;
      // Run any passed transforms and normalise undefined values to an empty string
      const result = transform(object[key], object) || '';

      // Empty values are empty strings (normalised above)
      // We never render null
      if (result !== null && !(skipEmptyValues && result === '')) {
        table.rows.push([heading, result]);
        table.names.push(nameAttribute);
      }

      return table;
    },
    {
      rows: [],
      names: [],
    },
  );
};
