import React, { useContext } from "react";
import paginationArrow from "../../../assets/pagination-arrow.svg";
import { CryptoContext } from "../../../context/CryptoContext";
import PageSearch from "../PageSearch";

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  const totalNumber = Math.ceil(totalPages / perPage);

  const nextButton = () => {
    if (page === totalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prevButton = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multipleNextPage = () => {
    if (page + 3 >= totalNumber) {
      setPage(totalNumber - 1);
    } else {
      setPage(totalNumber + 3);
    }
  };

  const multiplePrevPage = () => {
    if (page - 3 <= 1) {
      setPage(page + 1);
    } else {
      setPage(page - 2);
    }
  };
  if (cryptoData >= perPage) {
    return <PageSearch />;
  } else {
    return (
      <>
        <div className="flex items-center">
          <ul className="flex items-center justify-end text-sm">
            <li className="flex items-center">
              <button
                onClick={prevButton}
                className="outline-0 hover:text-cyan w-8"
              >
                <img
                  src={paginationArrow}
                  alt="pagination right"
                  className="w-full h-auto rotate-180"
                />
              </button>
            </li>
            {page + 1 === totalNumber || page === totalNumber ? (
              <li>
                <button
                  onClick={multiplePrevPage}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  ...
                </button>
              </li>
            ) : null}

            {page - 1 !== 0 ? (
              <li>
                <button
                  onClick={prevButton}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {page - 1}
                </button>
              </li>
            ) : null}
            <li>
              <button
                disabled
                className="outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
              >
                {page}
              </button>
            </li>
            {page + 1 !== totalNumber && page !== totalNumber ? (
              <li>
                <button
                  onClick={nextButton}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {page + 1}
                </button>
              </li>
            ) : null}
            {page + 1 !== totalNumber && page !== totalNumber ? (
              <li>
                <button
                  onClick={multipleNextPage}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  ...
                </button>
              </li>
            ) : null}
            {page !== totalNumber ? (
              <li>
                <button
                  onClick={() => setPage(totalNumber)}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {totalNumber}
                </button>
              </li>
            ) : null}
            <li className="flex items-center">
              <button
                onClick={nextButton}
                className="outline-0 hover:text-cyan w-8"
              >
                <img
                  src={paginationArrow}
                  alt="pagination left"
                  className="w-full h-auto"
                />
              </button>
            </li>
          </ul>
        </div>
        <PageSearch />
      </>
    );
  }
};

export default Pagination;
