import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "components/Icons";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputEl = useRef(null);
  const handleSubmit = event => {
    event.preventDefault();
    startSearch(true);
    inputEl.current.blur();
  };
  const startSearch = (userEvent = false) => {
    let string = `?q=${query}`;
    router.push(`/search${string}`);
  };
  useEffect(() => {
    if (
      router.pathname === "/search" &&
      Object.keys(router.query).length === 0
    ) {
      inputEl.current.focus();
    }
  });
  const handleChange = event => {
    let string = event.target.value;
    setQuery(string);
  };
  return (
    <>
      <div className={"container"}>
        <div className={"icon"}>
          <SearchIcon />
        </div>
        <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
          <input
            className={"SearchForm_input"}
            value={query}
            ref={inputEl}
            placeholder={"Поиск по каталогу"}
            onChange={handleChange}
          />
        </form>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          position: relative;
        }
        .icon {
          height: 30px;
          width: 30px;
          position: absolute;
          left: 10px;
          top: 2px;
        }
        .SearchForm_input {
          width: 100%;
          font-size: 15px;
          font-weight: 500;
          padding: 7px 12px;
          padding-left: 50px;
          border-radius: 5px;
          box-shadow: none;
          outline: none;
          border: 1px solid #582806;
        }
      `}</style>
    </>
  );
};

export default SearchForm;
