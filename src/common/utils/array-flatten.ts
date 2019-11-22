function flatten(cur: any[], nestedArrayName: string): any[] {
  if (cur.hasOwnProperty(nestedArrayName)) {
    const currentObject = cur as { [key: string]: any };
    const nestedArray: any[] = currentObject[nestedArrayName];

    const subCategories = nestedArray.reduce(
      (acc, cur) => [...acc, ...flatten(cur, nestedArrayName)],
      [],
    );

    return [...currentObject[nestedArrayName], ...subCategories];
  }

  return [];
}

export default function flattenArray(
  array: any[],
  nestedArrayName: string,
): any[] {
  const all: any[] = array.reduce(
    (acc, cur) => [...acc, ...flatten(cur, nestedArrayName)],
    array,
  );

  return all;
}
