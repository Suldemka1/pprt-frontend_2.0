import React from "react";
import { FaSearch } from "react-icons/fa/index.js";
import { observer } from "mobx-react-lite";
import searchQuery from "../../../store/search-query";

const HeaderSearchField = observer(() => {
  return (
    <div className="flex flex-row justify-center items-center bg-white cursor-pointer">
      <input
        type="text"
        placeholder="Поиск"
        onChange={(e) => searchQuery.search(e.target.value)}
        className="text-xs text-black outline-none border-none"
      />

      <a href="/search">
        <FaSearch
          onClick={(e) => {
            searchQuery.fetchPosts(searchQuery.query);
          }}
          className="z-10 text-black"
        />
      </a>
    </div>
  );
});

export default HeaderSearchField;
