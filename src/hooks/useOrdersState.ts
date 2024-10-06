import {
  fetchOrders,
  ordersErrorSelector,
  ordersLoadingSelector,
  ordersSelector,
} from "@/store/slices/ordersSlice";
import { useAppDispatch, useAppSelector } from "./reduxAppHooks";
import { useEffect, useMemo } from "react";

export const useOrdersState = () => {
  const dispatch = useAppDispatch();

  const orders = useAppSelector(ordersSelector);

  const ordersLoading = useAppSelector(ordersLoadingSelector);
  const ordersError = useAppSelector(ordersErrorSelector);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const memoizedOrders = useMemo(() => {
    return { orders, ordersLoading, ordersError };
  }, [orders, ordersLoading, ordersError]);

  return memoizedOrders;
};
