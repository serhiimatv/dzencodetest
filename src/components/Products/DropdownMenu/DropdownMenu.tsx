"use client";

import { useEffect, useState } from "react";
import styles from "./dropdownmenu.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxAppHooks";
import {
  productsFiltersSelector,
  toggleFilters,
} from "@/store/slices/productsSlice";

const DropdownMenu = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector(productsFiltersSelector);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<
    "monitors" | "laptops" | "smartphones" | "tablets" | null
  >(filter);

  const handleSelect = (
    type: "monitors" | "laptops" | "smartphones" | "tablets" | null
  ) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(toggleFilters(selectedType));
  }, [selectedType, dispatch]);

  return (
    <div className="dropdown">
      <button
        className="btn btn-info dropdown-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedType ?? "Выберите тип"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu d-block">
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect(null)}
            >
              Сбросить
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("monitors")}
            >
              monitors
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("laptops")}
            >
              laptops
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("smartphones")}
            >
              smartphones
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("tablets")}
            >
              tablets
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
