import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux service/Reducer";

const App = () => {
  const cats = useSelector((state) => state.catReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log("cats", cats);
  return <div>Hii CAT , Check Console</div>;
};

export default App;
