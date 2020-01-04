interface ContentBlocks {
  text: string | undefined;
  blocks: BlockProps[];
}

interface BlockProps {
  typeName: string | undefined;
  [key: string]: string | undefined;
}

const getProps = (
  acc: BlockProps,
  current: string,
  index: number
): BlockProps => {
  /**
   * Get typeName as we know that the first match is the block start.
   * E.g. `[progress ...]` -> progress`
   */
  if (index === 0) {
    return {
      ...acc,
      typeName: current,
    };
  }

  const keyValue = Object.fromEntries([
    current.split("=").map(removeEscapedCharsFromStringEnds),
  ]);

  return {
    ...acc,
    ...keyValue,
  };
};

/**
 * Remove potentially mismatching quotes from the ends of the string.
 * &#8221;70&#8243; -> 70
 * &#8221;left&#8221; -> left
 */
const removeEscapedCharsFromStringEnds = (item: string) => {
  const regex = /&#.*?;(.*?)&#.*?;/i;
  const match = item.match(regex);

  if (!match) {
    return item;
  }

  return match[1];
};

const removeMatchedBlocks = (acc: string, cur: string): string =>
  acc.replace(cur, "");

const getBlockProps = (acc: BlockProps[], cur: string): BlockProps[] => {
  const regex = /\[(.*?)](?=(.*?)\[\/|)/i;

  const match = cur.match(regex);

  if (!match) {
    return acc;
  }

  const children = match[2];

  const props = match[1]
    .split(" ")
    .reduce<BlockProps>(getProps, { typeName: undefined, children });

  return [...acc, props];
};

const getMatches = (text: string) => (acc: RegExpMatchArray, cur: RegExp) => {
  const m = text.match(cur);

  if (!m) {
    return acc;
  }

  return [...acc, ...m];
};

export const getContentBlocks = (
  text: string | undefined | null
): ContentBlocks => {
  if (!text) {
    return { text: undefined, blocks: [] };
  }

  const regex = [
    /(?=\[blockquote.+?]).+?\[\/blockquote]/gi,
    /\[progress.+?]/gi,
  ];

  const matches = regex.reduce<RegExpMatchArray>(getMatches(text), []);
  const blocks = matches.reduce<BlockProps[]>(getBlockProps, []);

  return {
    text: matches.reduce(removeMatchedBlocks, text),
    blocks,
  };
};
