import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../../src/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";
const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};
const laptopAnimation = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: 20,
    rotate: -30,
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transiton: { duration: 0.5, type: "spring", bounce: 1 },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 bg-slate-300">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.h1
            variants={introChildren}
            className="text-5xl font-bold text-nowrap"
          >
            <span className="text-grey">Don't Worry,</span>
            <br />
            <span>We'll Fix it.</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="mt-[10px] mb-[10px] text-[20px] max-w-[50ch]"
          >
            Welcome to <span>iRepair</span>, your one-stop place for all kinds
            of
            <span>Macbook repairs</span> and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button className="">Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptopAnimation}
          initial="initial"
          animate="animate"
          className="mx-auto w-3/4 lg:w-full"
        >
          <img
            className="h-[90%] object-contain px-[24px]"
            src={macbook}
            alt="macbook"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
