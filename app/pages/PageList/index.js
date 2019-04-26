import React, { useState, useEffect, useContext } from "react";
import ApiContext from "../../utils/api";

import List from "../../components/List";
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";

export default ({ location }) => {
  const params = new URLSearchParams(location.search);
  const page = params.get("page");
  const api = useContext(ApiContext);
  const [data, setData] = useState();
  const [pages, setPages] = useState();

  useEffect(() => {
    // we could do it without async/await, just like to use it here :)
    const fetchData = async () => {
      const res = await api.get(page ? `/?page=${page}` : "/");
      setData(res.ads);
      setPages({
        currentPage: res.page,
        totalPages: res.total_pages,
      });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Header />
      <List items={data} />
      {pages ? <Navigation {...pages} /> : null}
    </>
  );
};
