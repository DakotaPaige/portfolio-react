import { __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS } from 'styled-components';
import stringToDom from 'string-to-dom';

export const prerenderStyles = () => {
  if (window.__PRERENDERING) {
    stringToDom(
      __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS.StyleSheet.master.toHTML(),
      document.querySelector('head')
    );
  }
};
