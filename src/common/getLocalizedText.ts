const getAlphaNumericString = (value: string): string =>
  value.replace(/[^0-9a-z]/gi, "");

/**
 * In the text we might have multiple `[:en]text[:]` blocks.
 */
const getAllTranslationBlocks = (value: string) => {
  const regex = /\[:[a-z]{2}](.*?)\[:]/gis;

  return value.match(regex);
};

const getLanguage = (text: string, language: string): string | null => {
  const regex = {
    any: `\\[:(.*?)]`,
    selected: `\\[:${language}]`,
  };

  /**
   * Match in the form of [:en]
   */
  const match = {
    any: text.match(new RegExp(regex.any, "i")),
    selected: text.match(new RegExp(regex.selected, "i")),
  };

  /**
   * Match selected @param language
   */
  if (match.selected) {
    return getAlphaNumericString(match.selected[0]);
  }

  /**
   * Match any language if existing
   */
  if (match.any) {
    return getAlphaNumericString(match.any[0]);
  }

  return null;
};

/**
 * Get single translated block based on the requested language.
 */
const getTranslateBlock = (text: string, textLanguage: string) => {
  const lang = getLanguage(text, textLanguage);

  if (!lang) {
    return "";
  }

  const regex = `\\[:${lang}](.*?)(?=\\[:[a-z]{2}]|\\[:])`;

  const match = text
    .match(new RegExp(regex, "gis"))![0]
    .split(`[:${lang}]`)[1]
    .split("[:")[0];

  return match ? match : "";
};

export const getLocalizedText = (
  text: string,
  language: string = "en"
): string => {
  const translationBlocks = getAllTranslationBlocks(text);

  /**
   * When no translations are present, return the full text as is.
   */
  if (!translationBlocks) {
    return text;
  }

  const results = translationBlocks.map(item =>
    getTranslateBlock(item, language)
  );

  const outcome = translationBlocks.reduce((acc, cur, index) => {
    const t = acc.replace(cur, results[index]);

    return t;
  }, text);

  return outcome;
};
