import styles from "./modal.module.css";
import Image from "next/image";
import removeIconRed from "@/img/remove-red.svg";
import { motion } from "framer-motion";
import { useAppSelector } from "@/hooks/reduxHooks";
import { productsInOrderSelector } from "@/store/complexSelectors";

interface IModalProps {
  id: number;
  onClose: () => void;
}

const Modal = ({ id, onClose }: IModalProps) => {
  const orderProducts = useAppSelector(productsInOrderSelector(id));

  return (
    <div className={styles["modal"]}>
      <motion.div
        className={styles["modal__content"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className={styles["modal__header"]}>
          <h2 className={styles["modal__title"]}>
            Вы уверены что хотите удалить этот приход?
          </h2>
          <button
            className={`${styles["modal__header-btn-close"]} btn-close`}
            onClick={onClose}
          ></button>
        </div>
        <div className={styles["modal__body"]}>
          <ul className={styles["modal__body-list"]}>
            {orderProducts.map((product) => (
              <li
                key={product.id}
                className={`${styles["modal__body-list-item"]} d-flex align-items-center justify-content-around gap-3`}
              >
                <div className={`${styles["modal__body-list-item-img"]}`}></div>
                <div className={`${styles["modal__body-list-item-title"]}`}>
                  <span>{product.title}</span>
                  <span>SN:{product.serialNumber}</span>
                </div>
                <div className={`${styles["modal__body-list-item-type"]}`}>
                  {product.type}
                </div>
                <div
                  className={`${styles["modal__body-list-item-specification"]}`}
                >
                  {product.specification}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["modal__footer"]}>
          <button className={styles["modal__footer-btn-agree"]}>
            <Image src={removeIconRed} alt="remove icon" />
            Удалить
          </button>

          <button
            className={styles["modal__footer-btn-cancel"]}
            onClick={onClose}
          >
            отменить
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
