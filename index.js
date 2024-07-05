const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

//Counter
function increaseCounter() {
  //Action
  return {
    type: "INCREASE_COUNTER",
  };
}

function decreaseCounter() {
  //Action
  return {
    type: "DECREASE_COUNTER",
  };
}

//Number
function increaseNumber() {
  //Action
  return {
    type: "INCREASE_NUMBER",
  };
}

function decreaseNumber() {
  //Action
  return {
    type: "DECREASE_NUMBER",
  };
}

function increaseByNumber(data = 3) {
  //Action
  return {
    type: "INCREASE_BY_NUMBER",
    payload: data,
  };
}

const initialCounterState = {
  counter: 0,
};

//reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREASE_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const initialNumberState = {
  number: 0,
};

//reducer
const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREASE_NUMBER":
      return {
        ...state,
        counter: state.number + 1,
      };

    case "DECREASE_NUMBER":
      return {
        ...state,
        counter: state.number - 1,
      };

    case "INCREASE_BY_NUMBER":
      return {
        ...state,
        counter: state.number + action.payload,
      };

    default:
      return state;
  }
};

//combine Reducer
const rootReducer = combineReducer({
  counterQyt: counterReducer,
  numberQyt: numberReducer,
});

//store
const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store.getState());
//dispatch
store.dispatch(increaseCounter());
store.dispatch(increaseNumber());
store.dispatch(decreaseCounter());
store.dispatch(decreaseNumber());
store.dispatch(increaseByNumber(5));
