import { Card } from "@/components/Card";
import services from "pub/services.json";

export default function () {
  return (
    <section class="services-section">
      <div class="mb-20">
        <h1 class="services-title text-6xl sm:text-4xl font-medium mb-12 ">
          Our Digital <br /> Marketing Services
        </h1>
        <p class="services-desc text-xl w-1/2 sm:w-full">
          We're experts in all things marketing. Business-to-business,
          cryptocurrency, NFT, and high-growth startup brands are our sweet
          spot. Discover how we can scale your business to new heights through
          our strategic services below:
        </p>
      </div>
      <div class="services-items">
        <Card services={services} />
      </div>
    </section>
  );
}
