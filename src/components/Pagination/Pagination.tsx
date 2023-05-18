import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

interface PaginationProps {
  setHidden: boolean;
}

export default function Pagination({ setHidden }: PaginationProps) {
  const { limit, offset, setOffset } = useContext(AppContext);

  return (
    <div className={setHidden ? "w-[85%] mx-auto font-bold text-lg" : "hidden"}>
      <div className="flex justify-center pb-10">
        <button
          onClick={() => setOffset(offset - limit)}
          className="border-[1px] border-white bg-blue-800 hover:bg-blue-600 transition duration-300 ease-out text-white rounded-l-xl py-3 px-5"
        >
          Previous
        </button>
        <button
          onClick={() => setOffset(offset + limit)}
          className="border-[1px] border-white bg-blue-800 hover:bg-blue-600 transition duration-300 ease-out text-white  rounded-r-xl py-3 px-5"
        >
          Next
        </button>
      </div>
    </div>
  );
}
