"use client";
import React, { SyntheticEvent, useState } from "react";
import styles from "./orders.module.css";
import Image from "next/image";
import removeIcon from "@/img/remove.svg";
import arrowIcon from "@/img/arrow.svg";
import { motion } from "framer-motion";
import SmallProductsList from "./SmallProductsList/SmallProductsList";
import Modal from "@/components/Modal/Modal";
import { getTotalAmountFillPriceElements } from "./orders.helpers";
import { useProductsState } from "@/hooks/useProductsState";
import { useOrdersState } from "@/hooks/useOrdersState";

const Orders = () => {
  const { products, productsLoading, productsError } = useProductsState();
  const { orders, ordersLoading, ordersError } = useOrdersState();

  const [selectedOrder, setSelectedOrder] = useState<{
    id: number;
    title: string;
  } | null>(null);

  const [isDeleteOrderId, setIsDeleteOrderId] = useState<number | null>(null);

  const handleListClose = (e: SyntheticEvent) => {
    e.stopPropagation();
    setSelectedOrder(null);
  };

  const handleModalClose = () => {
    setIsDeleteOrderId(null);
  };

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
            {orders.map((order) => {
              const totalAmount = getTotalAmountFillPriceElements(
                products,
                order.id
              );

              return (
                <motion.div key={order.id} whileHover={{ scale: 1.02 }}>
                  <li
                    className={`${styles["orders__list-item"]} d-flex align-items-center gap-3`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedOrder({ id: order.id, title: order.title });
                    }}
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
                        <span>{totalAmount.totalAmountDollars} USD</span>
                        <span>{totalAmount.totalAmountHrivnas} UAH</span>
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
                        onClick={handleListClose}
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
              );
            })}
          </ul>
        </motion.div>
        {selectedOrder && (
          <SmallProductsList
            id={selectedOrder.id}
            title={selectedOrder.title}
            onClose={handleListClose}
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
