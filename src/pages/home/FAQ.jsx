"use client";
import Accordion from "@/components/Accordion";
import faq from "pub/faq.json";
const FAQ = () => {
  return (
    <section className="bg-primary-1000 text-white py-12 text-center flex flex-col justify-center align-center px-7">
      <h1 className="text-2xl my-10 ">
        <span className="text-5xl">FAQ. </span>Popular Question From Our Clients
      </h1>
      <div className="mx-auto w-1/2 sm:w-full">
        {faq.map((e) => (
          <Accordion item={e} key={e.order} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
