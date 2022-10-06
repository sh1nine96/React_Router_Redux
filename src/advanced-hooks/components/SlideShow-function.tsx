import {
  useEffect,
  cloneElement,
  ReactElement,
  useReducer,
  Reducer,
} from "react";

type Props = {
  children: ReactElement[];
};

type Action =
  | { type: "PREVIOUS_SLIDE" }
  | { type: "NEXT_SLIDE" }
  | { type: "CHILDREN_CHANGE"; payload: number };

type State = {
  activeSlide: number;
  numChildren: number;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "PREVIOUS_SLIDE":
      return {
        ...state,
        activeSlide: Math.max(state.activeSlide - 1, 0),
      };

    case "NEXT_SLIDE":
      return {
        ...state,
        activeSlide: Math.min(state.activeSlide + 1, state.numChildren - 1),
      };

    case "CHILDREN_CHANGE":
      return {
        ...state,
        numChildren: action.payload,
      };

    default:
      return state;
  }
};

const SlideShow = ({ children }: Props) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, {
    activeSlide: 0,
    numChildren: children.length,
  });

  useEffect(() => {
    dispatch({
      type: "CHILDREN_CHANGE",
      payload: children.length,
    });
  }, [children]);

  return (
    <>
      <div style={{ float: "right" }}>
        <button onClick={() => dispatch({ type: "PREVIOUS_SLIDE" })}>
          Previous
        </button>
        <button onClick={() => dispatch({ type: "NEXT_SLIDE" })}>Next</button>
      </div>
      {cloneElement(children[state.activeSlide], {
        page: {
          current: state.activeSlide + 1,
          total: children.length,
        },
      })}
    </>
  );
};

export default SlideShow;
