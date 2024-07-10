import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./Reducer";
import catSaga from "./SagaMiddleware";

import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { catReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(catSaga);

export default store;
