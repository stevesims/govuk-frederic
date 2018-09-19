import * as exports from '.';

describe('rowsFromArray', () => {
  it('works as expected', () => {
    const { rowsFromArray } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: value => (value || 'two') },
      { key: 'three', heading: 'Three' },
    ];
    const array = [
      {},
      { one: 'test', two: 'test' },
    ];

    let rows = rowsFromArray(array, fields, false);
    expect(rows).toEqual([[undefined, 'two', undefined], ['test', 'test', undefined]]);

    rows = rowsFromArray(array, fields, true);
    expect(rows).toEqual([['test', 'test', undefined]]);
  });
});

describe('rowsFromObject', () => {
  it('works as expected', () => {
    const { rowsFromObject } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two', transform: () => 'hardcodedstring' },
      { key: 'three', heading: 'Three' },
    ];
    const object = { one: 'test', two: 'test', three: null };
    const skipEmptyValues = true;
    const rows = rowsFromObject(object, fields, skipEmptyValues);

    expect(rows).toEqual({
      rows: [
        ['One', 'test'],
        ['Two', 'hardcodedstring'],
      ],
      names: [
        'one',
        'two',
      ],
    });
  });

  it('can use a default transform', () => {
    const { rowsFromObject } = exports;
    const fields = [
      { key: 'one', heading: 'One', names: ['firstCol', 'secondCol'] },
      { key: 'two', heading: 'Two', transform: (val) => val },
    ];
    const object = { one: 'test', two: 'some val' };
    const skipEmptyValues = true;
    const deafultTransform = (david) => `${david} david`;
    const rows = rowsFromObject(object, fields, skipEmptyValues, deafultTransform);

    expect(rows).toEqual({
      rows: [
        ['One', 'test david'],
        ['Two', 'some val'],
      ],
      names: [
        ['firstCol', 'secondCol'],
        'two',
      ],
    });
  });

  it('handles undefined values without skipping', () => {
    const { rowsFromObject } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two' },
    ];
    const object = { one: 'test', two: undefined };
    const skipEmptyValues = false;
    const rows = rowsFromObject(object, fields, skipEmptyValues);

    expect(rows).toEqual({
      rows: [
        ['One', 'test'],
        ['Two', ''],
      ],
      names: [
        'one',
        'two',
      ],
    });
  });

  it('dont render rows with null regardless of whether skipEmptyValues is set to false', () => {
    const { rowsFromObject } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', heading: 'Two' },
    ];
    const object = { one: 'test', two: null };
    const skipEmptyValues = false;
    const rows = rowsFromObject(object, fields, skipEmptyValues);

    expect(rows).toEqual({
      rows: [
        ['One', 'test'],
      ],
      names: [
        'one',
      ],
    });
  });
});

describe('titlesFromFields', () => {
  it('works as expected', () => {
    const { titlesFromFields } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', title: 'Two' },
    ];
    const result = titlesFromFields(fields);
    expect(result).toEqual(['One', 'Two']);
  });
});

describe('keysFromFields', () => {
  it('works as expected', () => {
    const { keysFromFields } = exports;
    const fields = [
      { key: 'one', heading: 'One' },
      { key: 'two', title: 'Two' },
    ];
    const result = keysFromFields(fields);
    expect(result).toEqual(['one', 'two']);
  });
});

describe('arrayHasValueForKeys', () => {
  it('returns true when expected', () => {
    const { arrayHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const array = [{ one: 'test', two: 'test' }];
    const result = arrayHasValueForKeys(array, keys);
    expect(result).toBe(true);
  });

  it('returns false when expected', () => {
    const { arrayHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const array = [{}];
    let result = arrayHasValueForKeys(array, keys);
    expect(result).toBe(false);
    result = arrayHasValueForKeys();
    expect(result).toBe(false);
  });
});

describe('objectHasValueForKeys', () => {
  it('returns true when expected', () => {
    const { objectHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const item = { one: 'test', two: 'test' };
    const result = objectHasValueForKeys(item, keys);
    expect(result).toBe(true);
  });

  it('returns false when expected', () => {
    const { objectHasValueForKeys } = exports;
    const keys = ['one', 'two'];
    const item = {};
    let result = objectHasValueForKeys(item, keys);
    expect(result).toBe(false);
    result = objectHasValueForKeys();
    expect(result).toBe(false);
  });
});
