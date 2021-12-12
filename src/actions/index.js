export const addTimer = (name) => {
  return {
    type: "ADD_TIMER",
    payload: {
      name,
    },
  };
};

export const toggleTimer = (index) => {
  return {
    type: "TOGGLE_TIMER",
    payload: {
      index,
    },
  };
};

export const selectTimer = (index) => {
  return {
    type: "SElECT_TIMER",
    payload: {
      index,
    },
  };
};
