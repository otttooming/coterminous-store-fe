import flattenArray from "../array-flatten";

const flat = require("../__data__/flat.json");
const original = require("../__data__/original.json");

const mockObject = {
  name: "Test",
};

const mockObjectWithNestedArray = {
  ...mockObject,
  nestedArray: [mockObject],
};

const mockObjectWith3rdLevelNestedArray = {
  ...mockObject,
  nestedArray: [
    {
      ...mockObject,
      nestedArray: [mockObject],
    },
  ],
};

const mockArray = [mockObjectWithNestedArray];
const mockArrayWith3rdLevel = [mockObjectWith3rdLevelNestedArray];

describe("array-flatten", () => {
  it("should return empty array", () => {
    expect(flattenArray([], "nestedArray")).toEqual([]);
  });

  it("should return array with flattened nestedArray", () => {
    const expected = [mockObjectWithNestedArray, mockObject];

    expect(flattenArray(mockArray, "nestedArray")).toEqual(expected);
  });

  it("should return array with 3rd level flattened nestedArray", () => {
    const expected = [
      mockObjectWith3rdLevelNestedArray,
      mockObjectWithNestedArray,
      mockObject,
    ];

    expect(flattenArray(mockArrayWith3rdLevel, "nestedArray")).toEqual(
      expected
    );
  });

  it("should return array with flattened nestedArray and a primitive", () => {
    const expected = [mockObjectWithNestedArray, 1, mockObject];

    expect(flattenArray([...mockArray, 1], "nestedArray")).toEqual(expected);
  });

  it("should match mocked flat array from original", () => {
    expect(flattenArray(original, "subCategories")).toEqual(flat);
  });
});
