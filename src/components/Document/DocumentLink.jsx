import { GrDocumentPdf } from "react-icons/gr/index.js";

const DocumentLink = (params) => {
  return (
    <div className="grid grid-rows-1 xs:grid-cols-none md:grid-cols-[30px_1fr] items-center gap-3">
      <div className="xs:hidden md:block min-w-8 min-h-8 w-8 h-8 max-w-8 max-h-8 cursor-pointer">
        <GrDocumentPdf className="min-w-full min-h-full w-full h-full max-w-10 max-h-10" />
      </div>
      <div className="hover:text-blue-900 cursor-pointer">
        <a href={params.url}>
          <p>{params.filename}</p>
        </a>
      </div>
    </div>
  );
};

export default DocumentLink;
