import { SET_FILTER } from "../../reducer/visibilityFilterReducer/actions";
import { VISIBILITY_FILTER } from "../../../constants";

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilterReducer;
