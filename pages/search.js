import React, { useEffect, useState } from "react";
import Head from "next/head";
import Items from "components/Items";
import { useRouter } from "next/router";
import API from "modules/API";
import MainCatalog from "../components/MainCatalog";
import Spinner from "../components/Spinner";
import SearchForm from "components/SearchForm";

const Search = () => {
  const [state, setState] = useState({ isLoad: false, items: [] });
  const { isLoad, items, query_string } = state;
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.search.index({ q: router.query.q });
      setState({
        items: response.items,
        query_string: response.query_string,
        isLoad: true
      });
    };
    if (router.query.q) {
      fetchData();
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>Купитьв интернет-магазине Kokos</title>
        <meta content={`Купить в интернет-магазине Kokos`} name="title" />
      </Head>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={"gcatalog"}>
          <MainCatalog />
        </div>
        <div className={"gcontent"}>
          <div className={"mobileOnly"}>
            <SearchForm />
          </div>
          {router.query.q === undefined && <h1>Введите поисковый запрос</h1>}
          {!isLoad && router.query.q && <Spinner />}
          {isLoad && router.query.q && (
            <>
              {items.length > 0 && (
                <>
                  <h1 className={"groupLabel"}>
                    Результат поиска {query_string}
                  </h1>
                  <Items items={items} />
                </>
              )}
              {items.length === 0 && (
                <h1 style={{ textAlign: "center", paddingTop: 30 }}>
                  По запросу {query_string} ничего не найдено
                </h1>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
