import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {fetchAllQuotes} from "../../redux/quotesSlice"

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.quotes.items);

  useEffect(() => {
    dispatch(fetchAllQuotes())
  }, [dispatch])

  return <div>Quotes</div>;
}

export default Quotes;
