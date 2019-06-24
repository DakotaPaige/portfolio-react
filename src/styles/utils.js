import appConfig from 'src/config/app.conf';
const { stage } = appConfig;

export const vwMobile = width => {
  return `${(width / stage.mobile) * 100}vw`;
};

export const vwTablet = width => {
  return `${(width / stage.tablet) * 100}vw`;
};

export const vw = width => {
  return `${(width / stage.desktop) * 100}vw`;
};
