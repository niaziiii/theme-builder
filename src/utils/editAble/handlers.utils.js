export const globalButtonStyle = (custmizeStyle, globalStyle) => {
  const buttonStyle = globalStyle.button;

  const _padding = `${buttonStyle.padding.normal.y}px ${buttonStyle.padding.normal.x}px`;
  const _fontSize = `${buttonStyle.fontSize.normal}px`;
  const _borderRadius = `${buttonStyle.borderRadius.normal}px`;

  const style = {
    fontFamily: buttonStyle.fontFamily ?? "",
    fontSize: _fontSize ?? "",
    padding: _padding ?? "",
    borderRadius: _borderRadius ?? "",
    primaryStyle: buttonStyle.primaryStyle ?? "",
    secondaryStyle: buttonStyle.secondaryStyle ?? "",
  };

  return style;
};

export const globalHeadingStyle = (custmizeStyle, globalStyle) => {
  const headingStyle = globalStyle.heading;

  const _padding = `${headingStyle.padding.normal.y}px ${headingStyle.padding.normal.x}px`;
  const _margin = `${headingStyle.margin.normal.y}px ${headingStyle.margin.normal.x}px`;
  const _fontSize = `${headingStyle.fontSize.normal}px`;

  const style = {
    fontFamily: headingStyle.fontFamily ?? "",
    fontSize: _fontSize ?? "",
    margin: _margin ?? "",
    padding: _padding ?? "",
  };

  return style;
};

export const globalParagraphStyle = (custmizeStyle, globalStyle) => {
  const paragraphStyle = globalStyle.paragraph;

  const _padding = `${paragraphStyle.padding.normal.y}px ${paragraphStyle.padding.normal.x}px`;
  const _margin = `${paragraphStyle.margin.normal.y}px ${paragraphStyle.margin.normal.x}px`;
  const _fontSize = `${paragraphStyle.fontSize.normal}px`;

  const style = {
    fontFamily: paragraphStyle.fontFamily ?? "",
    fontSize: _fontSize ?? "",
    margin: _margin ?? "",
    padding: _padding ?? "",
  };

  return style;
};

export const globalThemeColors = (custmizeStyle, globalStyle) => {
  const theme = globalStyle.colors;

  const params = {
    name: globalStyle.name,
    bg: {
      primary: theme.bg.primary,
      secondary: theme.bg.secondary,
    },
    text: {
      primary: theme.text.primary,
      secondary: theme.text.secondary,
    },
  };

  return params;
};
