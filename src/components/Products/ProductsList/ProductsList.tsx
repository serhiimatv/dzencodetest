"use client";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import styles from "./productslist.module.css";
import "overlayscrollbars/overlayscrollbars.css";
import { IProducts } from "@/models/products";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";

interface IProductsListProps {
  products: IProducts[];
}

const ProductsList = ({ products }: IProductsListProps) => {
  return (
    <div className={`${styles["products-list-wrapper"]} pt-5`}>
      <OverlayScrollbarsComponent
        element="div"
        options={{ scrollbars: { autoHide: "never" } }}
        defer
      >
        <ul className={`${styles["products-list"]}`}>
          {products.map((product) => (
            <li className={`${styles["products-list__item"]}`} key={product.id}>
              <div className={`${styles["products-list__item-img"]}`}></div>
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
