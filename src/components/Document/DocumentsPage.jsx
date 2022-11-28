import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import searchDocs from "../../store/search-docs";
import DocumentCard from "../../components/Document/DocumentCard";

const DocumentsPage = observer(() => {
  useEffect(() => {
    searchfunction();
  }, []);

  const searchfunction = async () => {
    if (
      searchDocs.query !== undefined &&
      searchDocs.query != "" &&
      searchDocs.query != null
    ) {
      await searchDocs.fetchDocs(searchDocs.query);
    } else {
      await searchDocs.fetchDocsAll();
    }
  };

  return (
    <div class="flex xs:flex-col gap-5">
      {/* <div className="flex flex-row gap-5 md:w-8/12">
        <input
          defaultValue={searchDocs.doc_title}
          placeholder="Поиск по заголовку"
          value={searchDocs.query}
          onChange={(e) => {
            searchDocs.search(e.target.value);
            searchDocs.fetchDocs(searchDocs.query);
          }}
          className="w-6/12 border rounded outline-0 px-2 py-3"
        />

        <div className="flex flex-row items-center gap-3">
          <p>Поиск по типу</p>

          <select
            onChange={(e) => {
              if (e.target.value !== "все") {
                searchDocs.query = "";
                searchDocs.setType(e.target.value);
                searchDocs.fetchDocsByTypes(searchDocs.type);
              } else {
                searchDocs.query = "";
                searchDocs.fetchDocsAll();
              }
            }}
            className="border py-3 px-2"
          >
            <option key="все" value="все">
              Все
            </option>
            {types.map((item) => {
              return (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      </div> */}

      <div className="flex flex-col gap-4 xs:w-full min-h-[25vh] md:w-8/12">
        {searchDocs.result.map((item) => {
          return (
            <DocumentCard
              key={item.id}
              id={item.id}
              name={item.title}
              date={item.signing_date}
              url={item.file.url}
              types={item.document_types}
            />
          );
        })}
      </div>
    </div>
  );
});

export default DocumentsPage;
