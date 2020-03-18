export const TRANSITION_IN = 'TRANSITION_IN';
export const TRANSITION_OUT = 'TRANSITION_OUT';

export const transitionIn = () => ({
  type: TRANSITION_IN,
});

export const transitionOut = () => ({
  type: TRANSITION_OUT,
});

const initialState = {
  isTransitioning: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TRANSITION_IN:
      return {
        ...state,
        isTransitioning: true,
      };
    case TRANSITION_OUT:
      return {
        ...state,
        isTransitioning: false,
      };
    default:
      return state;
  }
};
