import { useContext } from "react";
import { SmoothScrollContext } from "@/components/SmoothScrollContext";

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};