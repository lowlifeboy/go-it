import { PaginationStyles } from './PaginationStyles';

interface PaginationProps {
  currentPage: number;
  pagesQuantity: number;
  handleChangePage: (page: number) => void;
}

export default function Pagination({ currentPage, pagesQuantity, handleChangePage }: PaginationProps) {
  function openPage(page: number) {
    handleChangePage(page);
  }

  function handlePrev() {
    handleChangePage(currentPage - 1);
  }

  function handleNext() {
    handleChangePage(currentPage + 1);
  }

  function renderPagination(quantity: number) {
    if (quantity <= 6) {
      return (
        <div className="pagination">
          {Array.from(Array(quantity).keys()).map((pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              className={pageIndex === currentPage - 1 ? "active" : ""}
              onClick={() => openPage(pageIndex)}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      );
    }

    if (quantity > 6) {
      if (currentPage <= 4) {
        const needDots = currentPage + 2 + 1 < quantity;
        const displayLastPage = currentPage + 2 + 1 === quantity;

        return (
          <div className="pagination">
            {Array.from(Array(6).keys()).map((pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                className={pageIndex === currentPage - 1 ? "active" : ""}
                onClick={() => openPage(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            ))}
            {needDots ? (
              <>
                <div className="dots">. . .</div>
                <button type="button" onClick={() => openPage(quantity - 1)}>
                  {quantity}
                </button>
              </>
            ) : displayLastPage ? (
              <button type="button" onClick={() => openPage(quantity - 1)}>
                {quantity}
              </button>
            ) : null}
          </div>
        );
      }

      if (currentPage > 4 && currentPage < quantity - 3) {
        return (
          <div className="pagination">
            <button type="button" onClick={() => openPage(0)}>
              1
            </button>
            <div className="dots">. . .</div>
            {Array.from(Array(currentPage + 2).keys())
              .slice(currentPage - 3)
              .map((pageIndex) => (
                <button
                  key={pageIndex}
                  type="button"
                  className={pageIndex === currentPage - 1 ? "active" : ""}
                  onClick={() => openPage(pageIndex)}
                >
                  {pageIndex + 1}
                </button>
              ))}
            <div className="dots">. . .</div>
            <button type="button" onClick={() => openPage(quantity - 1)}>
              {quantity}
            </button>
          </div>
        );
      }

      return (
        <div className="pagination">
          <button type="button" onClick={() => openPage(0)}>
            1
          </button>
          <div className="dots">. . .</div>
          {Array.from(Array(6).keys()).map((pageIndex) => (
            <button
              key={quantity - 6 + pageIndex}
              type="button"
              className={quantity - 6 + pageIndex === currentPage - 1 ? "active" : ""}
              onClick={() => openPage(quantity - 6 + pageIndex)}
            >
              {quantity - 5 + pageIndex}
            </button>
          ))}
        </div>
      );
    }
  }

  return (
    <PaginationStyles>
      <button type="button" onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
      {renderPagination(pagesQuantity)}
      <button type="button" onClick={handleNext} disabled={currentPage === pagesQuantity}>Next</button>
    </PaginationStyles>
  )
}
