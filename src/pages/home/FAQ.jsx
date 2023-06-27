"use client";

import faq from "pub/faq.json";

const FAQ = () => {
  return (
    <section className="bg-primary-1000 text-white py-12 px-7">
      <h1 className="text-2xl my-10 text-center">
        <span className="text-5xl">FAQ. </span>Popular Question From Clients
      </h1>
      {faq.map((e, i) => (
        <div
          id="accordion-flush"
          data-accordion="open"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
            >
              <span>{e.question}</span>
              <svg
                data-accordion-icon
                class="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-flush-body-1"
            class="hidden"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">{e.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
