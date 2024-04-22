import { useState, useContext, useMemo } from "react";

import { AppContext } from "../App";
import ListProduct from "../components/ListProduct";
import PerPageControl from "../components/PerPageControl";
import SortControl from "../components/SortControl";
import ListTypeControl from "../components/ListTypeControl";
import PaginationControl from "../components/PaginationControl";
import Filters from "../components/Filters";

function Products() {
  const { products, userFilters } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [listType, setListType] = useState("list");
  const [sort, setSort] = useState("price-asc");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (userFilters.brand.length === 0 ||
          userFilters.brand.includes(product.brand)) &&
        (userFilters.category.length === 0 ||
          userFilters.category.includes(product.category)) &&
        product.price >= userFilters.price[0] &&
        product.price <= userFilters.price[1] &&
        (userFilters.discountPercentage.length === 0 ||
          userFilters.discountPercentage.includes(
            product.discountPercentage,
          )) &&
        (userFilters.rating.length === 0 ||
          userFilters.rating.includes(product.rating)) &&
        (userFilters.colors.length === 0 ||
          userFilters.colors.some((color) => product.colors.includes(color)))
      );
    });
  }, [products, userFilters]);

  const handleSortChange = (event) => {
    setSort(event.target.value);
    setPage(1);
  };

  const sortedProducts = useMemo(() => {
    return filteredProducts.slice().sort((a, b) => {
      if (sort === "price-desc") {
        return b.price - a.price;
      } else if (sort === "price-asc") {
        return a.price - b.price;
      }
    });
  }, [filteredProducts, sort]);

  const numberOfPages = Math.ceil(sortedProducts.length / rowsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const paginatedProducts = sortedProducts.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  const handleViewChange = (viewType) => {
    setListType(viewType);
  };

  return (
    <main className="flex flex-col items-center ">
      <div className="mb-[80px] flex flex-col gap-6">
        <h1 className="text-[52px] font-bold text-textPrimary">Products</h1>
        <div className="flex w-[142px] items-center justify-between self-center">
          <span className="text-grey-3 text-base font-light">Home</span>
          <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
          <span className="text-base font-light text-primary">Products</span>
        </div>
      </div>

      <div className="flex gap-12">
        <Filters />
        <div className="flex flex-col">
          <div className="mb-8 flex gap-10 self-end">
            <PerPageControl
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              rowsPerPage={rowsPerPage}
            />
            <SortControl sort={sort} handleSortChange={handleSortChange} />
            <ListTypeControl
              handleViewChange={handleViewChange}
              listType={listType}
            />
          </div>
          <div
            className={`grid gap-8 ${listType === "list" ? "grid-cols-1" : "grid-cols-3"}`}
          >
            {paginatedProducts.map((product) => (
              <ListProduct key={product.id} product={product} type={listType} />
            ))}
          </div>

          <div className="self-end py-10">
            <PaginationControl
              page={page}
              numberOfPages={numberOfPages}
              handleChangePage={handleChangePage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
