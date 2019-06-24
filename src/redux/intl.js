import appConfig from 'src/config/app.conf';
const { defaultLocale } = appConfig;

// Constants
export const INTL__LOCALE_CHANGED = 'INTL::LOCALE_CHANGED';

// Actions
export const changeLocale = locale => ({
  type: INTL__LOCALE_CHANGED,
  locale,
});

// Initial State
const initialState = {
  locale: defaultLocale,
  translations: require(`src/config/locales/${defaultLocale}`).default,
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INTL__LOCALE_CHANGED:
      return {
        ...state,
        locale: action.locale,
        translations: require(`src/config/locales/${action.locale}`).default,
      };
    default:
      return state;
  }
};
