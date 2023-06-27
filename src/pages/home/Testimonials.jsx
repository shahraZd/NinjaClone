"use client";

import testimonials from "pub/testimonials.json";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Testimonials = () => {
  const ref2 = useRef();
  const { events: events2 } = useDraggable(ref2, {
    applyRubberBandEffect: true,
  });

  return (
    <section className="bg-primary-1000 text-white py-12 px-7">
      <h1 className="text-5xl my-10">Feedback from Our Clients</h1>
      {/* <div className="flex justify-around mx-10  overflow-x-scroll  "> */}
      <div
        className="flex space-x-3 py-3 overflow-x-scroll scrollbar-hide scroll_box"
        {...events2}
        ref={ref2}
      >
        {testimonials.map((e, i) => (
          <div key={i} className="reviews_item ">
            {/* <div class=""> */}
            <p class="text-base text-left my-9">{e.content}</p>
            <div>
              <p class="text-primary-200 font-xl">
                <span>{e.name}</span>
              </p>
              <p class="text-primary-200">
                <span>{e.position}</span>
              </p>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
