import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getProductData,
  getProductDataFilterSort,
} from "../redux/ProductReducer/ProductAction";
import "./FilterSort.css";
export const FilterSort = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();

  useEffect(() => {
    searchParams.set("page", 1);

    searchParams.set("perPage", 20);
    setSearchParams(searchParams);
  }, []);
  useEffect(() => {
    if (query) {
      dispatch(getProductDataFilterSort(query));
    }
  }, [query]);
  return (
    <div className="filter-sort">
      <select
        onChange={(e) => {
          searchParams.set("color", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, color: searchParams.get("color") });
        }}
      >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Maroon">Maroon</option>
        <option value="Violet">Violet</option>
        <option value="Orange">Orange</option>
        <option value="Purple">Purple</option>
        <option value="Aquamarine">Aquamarine</option>
        <option value="Teal">Teal</option>
        <option value="Yellow">Yellow</option>
        <option value="Goldenrod">Goldenrod</option>
        <option value="Mauv">Mauv</option>
        <option value="Fuscia">Fuscia</option>
        <option value="Puce">Puce</option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("size", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, size: searchParams.get("size") });
        }}
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XS">XS</option>
        <option value="XL">XL</option>
        <option value="3XL">3XL</option>
        <option value="2XL">2XL</option>
      </select>
      <select
        onChange={(e) => {
          searchParams.set("sort", e.target.value);
          setSearchParams(searchParams);
          setQuery({ ...query, sort: searchParams.get("sort") });
        }}
      >
        <option value="asc">Low - High</option>
        <option value="des">High- Low</option>
      </select>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${ +searchParams.get("page")-1}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Prve
      </button>
      <button
        onClick={() => {
            searchParams.set(
                "page",
                `${1+ +searchParams.get("page")}`
              );
          setSearchParams(searchParams);
          setQuery({ ...query, page: searchParams.get("page") });
        }}
      >
        Next
      </button>
    </div>
  );
};
