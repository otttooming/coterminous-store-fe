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
    return match.selected[0];
  }

  /**
   * Match any language if existing
   */
  if (match.any) {
    return match.any[0];
  }

  return null;
};

export const getLocalizedText = (
  text: string,
  language: string = "en"
): string => {
  const textLanguage = getLanguage(text, language);

  /**
   * When no result to [:en] or applicable strings are available return full text
   */
  if (!textLanguage) {
    return text;
  }

  const regex = `\\${textLanguage}(.*?)\\[:`;

  const match = text
    .match(new RegExp(regex, "gi"))![0]
    .split(textLanguage)[1]
    .split("[:")[0];

  return match ? match : "";
};
