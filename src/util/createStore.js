import { BehaviorSubject } from "rxjs";
const createStore = (initialState) => {
  const behaviorSubject = new BehaviorSubject();
  let state = initialState;
  behaviorSubject.next(initialState);
  return {
    subscribe: (setState) =>
      behaviorSubject.subscribe((value) => setState(value)),
    currentState: () => {
      let ans;
      behaviorSubject.subscribe((value) => {
        ans = value;
      });
      return ans;
    },
    updateData: (obj = initialState) => {
      state = {
        ...state,
        ...obj
      }
      behaviorSubject.next(state);
    },
  };
};

export default createStore;