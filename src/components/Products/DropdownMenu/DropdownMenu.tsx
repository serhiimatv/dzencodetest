"use client";

import { useState } from "react";
import styles from "./dropdownmenu.module.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelect = (type: string | null) => {
    setSelectedType(type);
    setIsOpen(false);
  };

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
              onClick={() => handleSelect("Тип 1")}
            >
              Тип 1
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("Тип 2")}
            >
              Тип 2
            </button>
          </li>
          <li className={`${styles["dropdown-menu__item"]} dropdown-item`}>
            <button
              className={`${styles["dropdown-menu__btn"]}`}
              onClick={() => handleSelect("Тип 3")}
            >
              Тип 3
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
