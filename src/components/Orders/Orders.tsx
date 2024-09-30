"use client";
import React, { useState } from "react";
import styles from "./orders.module.css";
import dataOrders from "../../../mocorders.json";
import dataProducts from "../../../mocparoducts.json";
import { IOrder } from "@/models/order";
import { IProduct } from "@/models/product";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";
import arrowIcon from "@/img/arrow.svg";
import { motion } from "framer-motion";

const Orders = () => {
  const orders: IOrder[] = dataOrders;
  const products: IProduct[] = dataProducts;
  const [isShow, setIsShow] = useState<number | null>(null);

  const getTotalAmountFillPriceElements = (id: number): JSX.Element => {
    const filteredProducts = products.filter((product) => product.order === id);

    let totalAmountDollars = 0;
    let totalAmountHrivnas = 0;

    filteredProducts.every((product) => {
      product.price.forEach((price) => {
        if (price.symbol === "USD") {
          totalAmountDollars += price.value;
        }
        if (price.symbol === "UAH") {
          totalAmountHrivnas += price.value;
        }
      });
    });

    return (
      <React.Fragment>
        <span>{totalAmountDollars} USD</span>
        <span>{totalAmountHrivnas} UAH</span>
      </React.Fragment>
    );
  };

  const handleShow = (id: number) => {
    if (!isShow) {
      setIsShow(id);
    }
  };

  return (
    <div className={`${styles["orders"]}`}>
      <motion.div
        animate={{ width: isShow ? "34%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <ul className={`${styles["orders__list"]} d-flex flex-column gap-2`}>
          {orders.map((order) => (
            <motion.div key={order.id} whileHover={{ scale: 1.02 }}>
              <li
                className={`${styles["orders__list-item"]} d-flex align-items-center gap-3`}
                onClick={() => handleShow(order.id)}
              >
                {!isShow && (
                  <div className={`${styles["orders__list-item-title"]}`}>
                    {order.title}
                  </div>
                )}
                {!isShow && (
                  <div className={`${styles["orders__list-item-date"]}`}>
                    {order.date}
                  </div>
                )}
                <div className={`${styles["orders__list-item-desc"]}`}>
                  {order.description}
                </div>
                {!isShow && (
                  <div className={`${styles["orders__list-item-price"]}`}>
                    {getTotalAmountFillPriceElements(order.id)}
                  </div>
                )}
                {!isShow && (
                  <button className={`${styles["orders__list__item-btn"]}`}>
                    <Image src={removeIcon} alt="remove icon"></Image>
                  </button>
                )}
                {isShow && (
                  <button
                    className={`${styles["orders__list__item-btn"]} ${styles["orders__list__item-btn--arrow"]}`}
                    onClick={() => setIsShow(null)}
                  >
                    <Image
                      src={arrowIcon}
                      width={30}
                      height={30}
                      alt=""
                    ></Image>
                  </button>
                )}
              </li>
            </motion.div>
          ))}
        </ul>
      </motion.div>
      {isShow && (
        <motion.div
          style={{ width: "64%", height: "1000px", backgroundColor: "red" }}
        ></motion.div>
      )}
    </div>
  );
};

export default Orders;
