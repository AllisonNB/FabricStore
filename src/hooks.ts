import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store/index";

// Using instead of built in hooks so don't have to manually set state = rootState and needing to import appDispatch with useDispatch every time
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
