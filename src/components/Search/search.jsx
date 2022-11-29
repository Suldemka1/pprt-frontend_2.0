import { observer } from "mobx-react-lite";
import PostCard from "../Posts/PostCard";
import searchQuery from "../../store/search-query";
import { useEffect } from "react";

const SearchPage = observer(() => {
  function searchfunction() {
    if (
      searchQuery.query !== "undefined"
    ) {
      searchQuery.fetchPosts(searchQuery.query);
    } else {
      searchQuery.fetchPostsAll();
    }
  };

  useEffect(() => {
    searchfunction();
  }, [searchQuery.query]);

  const datamap = searchQuery?.result?.map((item) => {
    return (
      <a href={`/news/${item.id}`} key={item.id} className="news">
        <PostCard
          id={item.id}
          title={item.title}
          preview_image={import.meta.env.PUBLIC_URL + item.preview_image.url}
          news_preview={item.news_preview}
          body={item.body}
          createdAt={item.createdAt}
        />
      </a>
    );
  });

  return (
    <div className="flex flex-col gap-4 w-3/5 py-5">
      <div className="flex justify-content-between border rounded">
        <input
          defaultValue={searchQuery.query}
          onChange={(e) => {
            searchQuery.search(e.target.value);
          }}
          className="w-full rounded-l px-2 outline-0"
        />
        <button
          onClick={() => {
            searchfunction();
          }}
          className="w-fit hfit text-white bg-blue-900 rounded-r px-3 py-2"
        >
          Поиск
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {searchQuery.result.length < 1 ? (
          <div>
            <p>По вашему запросу ничего не найдено</p>
            <p>Попробуйте ввести другой запрос</p>
          </div>
        ) : (
          datamap
        )}
      </div>
    </div>
  );
});

export default SearchPage;
