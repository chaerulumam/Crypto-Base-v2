import React, { useContext, useRef } from "react";
import submitIcon from "../../../assets/submit-icon.svg";
import { CryptoContext } from "../../../context/CryptoContext";

const PageSearch = () => {
  let { setPerPage } = useContext(CryptoContext);

  const inputRef = useRef(null);

  const handleSubmitPage = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };
  return (
    <div className="flex mr-7">
      <form
        className="relative flex items-center font-nunito mr-12"
        onSubmit={handleSubmitPage}
      >
        <label
          htmlFor="perpage"
          className="relative flex justify-center items-center mr-2 font-bold"
        >
          per page:{""}
          <input
            type="number"
            name="perpage"
            min={1}
            max={250}
            placeholder="10"
            className="w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-amber-300 leading-4"
            ref={inputRef}
          />
        </label>
        <button type="submit" className="ml-1 cursor-pointer">
          <img src={submitIcon} alt="submit" className="w-full h-auto" />
        </button>
      </form>
    </div>
  );
};

export default PageSearch;
