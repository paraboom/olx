import React, { useState, useEffect, useContext } from "react";
import ApiContext from "../../utils/api";

import Header from "../../components/Header";
import Item from "../../components/Item";

export default ({ match }) => {
  const { params: { itemId } } = match;
  const api = useContext(ApiContext);
  const [data, setData] = useState();

  useEffect(() => {
    // we could do it without async/await, just like to use it here :)
    const fetchData = async () => {
      if (data) return;
      const res = await api.get(`/${itemId}`);
      setData(res);
    };
    fetchData();
  }, [api, data, itemId]);

  return (
    <>
      <Header withItem />
      {data ? <Item {...data} cityLabel={data.city_label} /> : null}
    </>
  );
};
