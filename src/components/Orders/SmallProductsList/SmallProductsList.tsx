import { motion } from "framer-motion";
import styles from "./smallproductslist.module.css";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";
import { Dispatch } from "react";
import { useAppSelector } from "@/hooks/reduxHooks";

interface ISmallProductsListProps {
  id: number;
  title: string;
  setSelectedOrder: Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
    } | null>
  >;
}

const SmallProductsList = ({
  id,
  title,
  setSelectedOrder,
}: ISmallProductsListProps) => {
  const products = useAppSelector((state) =>
    state.products.products.filter((product) => product.order === id)
  );

  return (
    <motion.div className={`${styles["small-products-list"]}`}>
      <button
        className={`${styles["small-products-list-btn"]} btn-close`}
        onClick={() => setSelectedOrder(null)}
      ></button>
      <h2 className={`${styles["small-products-list__title"]}`}>{title}</h2>
      <ul
        className={`${styles["small-products-list__list"]} d-flex flex-column gap-2`}
      >
        {products.map((product) => (
          <li
            key={product.id}
            className={`${styles["small-products-list__list-item"]} d-flex align-items-center gap-3`}
          >
            <div
              className={`${styles["small-products-list__list-item-img"]}`}
            ></div>
            <div
              className={`${styles["small-products-list__list-item-title"]}`}
            >
              <span>{product.title}</span>
              <span>SN:{product.serialNumber}</span>
            </div>
            <div className={`${styles["small-products-list__list-item-type"]}`}>
              {product.type}
            </div>
            <div
              className={`${styles["small-products-list__list-item-specification"]}`}
            >
              {product.specification}
            </div>
            <button className={`${styles["small-products-list__item-btn"]}`}>
              <Image src={removeIcon} alt="remove icon"></Image>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SmallProductsList;
