import Container from "@/components/Container";
import Battery from "@/components/Scroll/Battery";
import Chipset from "@/components/Scroll/Chipset";

const ServiceSecton = () => {
  return (
    <Container className="my-40 px-0">
      <div className="text-center flex flex-col justify-between items-center">
        <h1 className="text-7xl">Services</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Battery />
        <Chipset />
        <div className="col-span-6 lg:col-span-7 bg-slate-400 h-[400px] rounded"></div>
        <div className="col-span-12 lg:col-span-4 bg-slate-400 h-[400px] rounded"></div>
        <div className="col-span-12 lg:col-span-4 bg-slate-400 h-[400px] rounded"></div>
        <div className="col-span-12 lg:col-span-4 bg-slate-400 h-[400px] rounded"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default ServiceSecton;
