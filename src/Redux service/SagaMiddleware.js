import { call, put, takeEvery } from "redux-saga/effects";
import { setData } from "./Reducer";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10);
  yield put(setData(formattedCatsShortened));
}

function* catSaga() {
  yield takeEvery("catReducer/fetchData", workGetCatsFetch);
}

export default catSaga;
