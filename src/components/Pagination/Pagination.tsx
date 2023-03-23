export default function Pagination() {
  return (
    <div className="w-[85%] mx-auto font-bold text-lg pb-10">
      <div className="flex justify-center">
        <button className="border-[1px] border-white bg-blue-800 hover:bg-blue-600 transition duration-300 ease-out text-white rounded-l-xl py-3 px-5">
          Previous page
        </button>
        <button className="border-[1px] border-white bg-blue-800 hover:bg-blue-600 transition duration-300 ease-out text-white  rounded-r-xl py-3 px-5">
          Next
        </button>
      </div>
    </div>
  );
}
