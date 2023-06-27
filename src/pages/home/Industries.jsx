import { Card } from "../../components/Card";
import services from "../../../public/services.json";

export default function () {
  return (
    <section class="services-section">
      <div class="mb-20">
        <h1 class="services-title text-6xl sm:text-4xl font-medium mb-12 ">
        Our Industries
        </h1>
        <p class="services-desc text-xl w-1/2 sm:w-full">
         Our creative digital marketing firm has helped a diverse range of businesses and organizations achieve their advertising objectives. With extensive experience working in numerous industries, we have the insights and expertise to help you discover your true potential. 
        </p>
      </div>
      <div class="services-items">
        <Card services={services} />
      </div>
    </section>
  );
}
