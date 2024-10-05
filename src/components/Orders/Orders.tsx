"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import styles from "./orders.module.css";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";
import arrowIcon from "@/img/arrow.svg";
import { motion } from "framer-motion";
import SmallProductsList from "./SmallProductsList/SmallProductsList";
import Modal from "@/components/Modal/Modal";
import { useAppSelector, useAppStore } from "@/hooks/reduxHooks";
import {
  productsErrorSelector,
  fetchProducts,
  productsLoadingSelector,
  productsSelector,
} from "@/store/slices/productsSlice";
import {
  fetchOrders,
  ordersErrorSelector,
  ordersLoadingSelector,
  ordersSelector,
} from "@/store/slices/ordersSlice";

const Orders = () => {
  const store = useAppStore();

  const productsLoading = useAppSelector(productsLoadingSelector);
  const productsError = useAppSelector(productsErrorSelector);

  const ordersLoading = useAppSelector(ordersLoadingSelector);
  const ordersError = useAppSelector(ordersErrorSelector);

  const orders = useAppSelector(ordersSelector);
  const products = useAppSelector(productsSelector);

  const [selectedOrder, setSelectedOrder] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const [isDeleteOrderId, setIsDeleteOrderId] = useState<number | null>(null);

  const getTotalAmountFillPriceElements = (id: number): JSX.Element => {
    const filteredProducts = products.filter((product) => product.order === id);

    let totalAmountDollars = 0;
    let totalAmountHrivnas = 0;

    filteredProducts.forEach((product) => {
      product.price.forEach((price) => {
        if (price.symbol === "USD") {
          totalAmountDollars = price.value + totalAmountDollars;
        }
        if (price.symbol === "UAH") {
          totalAmountHrivnas = price.value + totalAmountHrivnas;
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

  const handleClick = (
    event: SyntheticEvent,
    selectOrder: { id: number; title: string }
  ) => {
    const element = event.target as HTMLElement;
    if (element.tagName === "BUTTON" || element.tagName === "IMG") {
      return;
    }

    setSelectedOrder(selectOrder);
  };

  const handleModalClose = () => {
    setIsDeleteOrderId(null);
  };

  useEffect(() => {
    store.dispatch(fetchProducts());
    store.dispatch(fetchOrders());
  }, [store]);

  if (ordersLoading || productsLoading) {
    return <div>Загрузка...</div>;
  }

  if (ordersError || productsError) {
    return <div>Ошибка загрузки</div>;
  }

  return (
    <>
      <div className={`${styles["orders"]}`}>
        <motion.div
          animate={{ width: selectedOrder ? "34%" : "100%" }}
          transition={{ duration: 0.5 }}
        >
          <ul className={`${styles["orders__list"]} d-flex flex-column gap-2`}>
            {orders.map((order) => (
              <motion.div key={order.id} whileHover={{ scale: 1.02 }}>
                <li
                  className={`${styles["orders__list-item"]} d-flex align-items-center gap-3`}
                  onClick={(e) =>
                    handleClick(e, { id: order.id, title: order.title })
                  }
                >
                  {!selectedOrder && (
                    <div className={`${styles["orders__list-item-title"]}`}>
                      {order.title}
                    </div>
                  )}
                  {!selectedOrder && (
                    <div className={`${styles["orders__list-item-date"]}`}>
                      {order.date}
                    </div>
                  )}
                  <div className={`${styles["orders__list-item-desc"]}`}>
                    {order.description}
                  </div>
                  {!selectedOrder && (
                    <div className={`${styles["orders__list-item-price"]}`}>
                      {getTotalAmountFillPriceElements(order.id)}
                    </div>
                  )}
                  {!selectedOrder && (
                    <button
                      className={`${styles["orders__list__item-btn"]}`}
                      onClick={() => setIsDeleteOrderId(order.id)}
                    >
                      <Image src={removeIcon} alt="remove icon"></Image>
                    </button>
                  )}
                  {selectedOrder?.id === order.id && (
                    <button
                      className={`${styles["orders__list__item-btn"]} ${styles["orders__list__item-btn--arrow"]}`}
                      onClick={() => {
                        setSelectedOrder(null);
                      }}
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
        {selectedOrder && (
          <SmallProductsList
            id={selectedOrder.id}
            title={selectedOrder.title}
            setSelectedOrder={setSelectedOrder}
          />
        )}
      </div>
      {isDeleteOrderId && (
        <Modal id={isDeleteOrderId} onClose={handleModalClose} />
      )}
    </>
  );
};

export default Orders;
