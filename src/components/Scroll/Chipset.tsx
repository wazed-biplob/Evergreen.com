import UseScrollHooks from "@/Hooks/UseScrollHooks";
import { motion } from "framer-motion";
const Chipset = () => {
  const { componentRef, style } = UseScrollHooks();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="col-span-6 lg:col-span-5 bg-slate-400 h-[400px] rounded"
    ></motion.div>
  );
};

export default Chipset;
