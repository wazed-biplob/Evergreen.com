import UseScrollHooks from "@/Hooks/UseScrollHooks";
import { motion } from "framer-motion";
const Battery = () => {
  const { componentRef, style } = UseScrollHooks();
  return (
    <motion.div
      ref={componentRef}
      className="col-span-12 bg-slate-400 h-[400px] rounded"
      style={style}
    ></motion.div>
  );
};

export default Battery;
