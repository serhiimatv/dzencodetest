"use client";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import styles from "./productslist.module.css";
import "overlayscrollbars/overlayscrollbars.css";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";
import { useAppSelector } from "@/hooks/reduxAppHooks";
import { useProductsState } from "@/hooks/useProductsState";
import { productsSelector } from "@/store/slices/productsSlice";

const ProductsList = () => {
  const { productsError, productsLoading, productsFilters } =
    useProductsState();

  const filteredProducts = useAppSelector((state) => {
    const products = productsSelector(state);
    if (!productsFilters) {
      return products;
    }
    return products.filter(
      (product) =>
        product.type.toLocaleLowerCase() === productsFilters.toLocaleLowerCase()
    );
  });

  if (productsLoading) {
    return <div>Загрузка...</div>;
  }

  if (productsError) {
    return <div>Ошибка загрузки</div>;
  }

  return (
    <div className={`${styles["products-list-wrapper"]} pt-5`}>
      <OverlayScrollbarsComponent
        element="div"
        options={{ scrollbars: { autoHide: "never" } }}
        defer
      >
        <ul className={`${styles["products-list"]}`}>
          {filteredProducts.map((product) => (
            <li className={`${styles["products-list__item"]}`} key={product.id}>
              <div className={`${styles["products-list__item-img-container"]}`}>
                <span className={`${styles["products-list__item-img"]}`}></span>
              </div>
              <div className={`${styles["products-list__item-title-sn"]}`}>
                <span>{product.title}</span>
                <span>SN:{product.serialNumber}</span>
              </div>
              <div className={`${styles["products-list__item-type"]}`}>
                {product.type}
              </div>
              <div className={`${styles["products-list__item-warranty"]}`}>
                <span>c {product.guarantee.start}</span>
                <span>до {product.guarantee.end}</span>
              </div>
              <div className={`${styles["products-list__item-accommodation"]}`}>
                {product.isNew ? "Новый" : "Б/У"}
              </div>
              <div className={`${styles["products-list__item-price"]}`}>
                {[...product.price]
                  .sort((a, b) => a.isDefault - b.isDefault)
                  .map((price) => (
                    <span key={price.value + price.symbol}>
                      {price.value} {price.symbol}
                    </span>
                  ))}
              </div>
              <div className={`${styles["products-list__item-order"]}`}>
                Название прихода, в котором был принят этот товар
              </div>
              <div className={`${styles["products-list__item-specification"]}`}>
                {product.specification}
              </div>
              <div>{product.date}</div>
              <button className={`${styles["products-list__item-btn"]}`}>
                <Image src={removeIcon} alt="remove icon"></Image>
              </button>
            </li>
          ))}
        </ul>
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default ProductsList;
