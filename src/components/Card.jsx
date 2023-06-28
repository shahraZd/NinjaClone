import Link from "next/link";
import Image from "next/image";
const Card = ({ services }) => {
  return services.map((e, i) => (
    <div
      key={i}
      className="max-w-sm bg-transparent hover:bg-gradient sm:bg-gradient rounded overflow-hidden rounded-tr-3xl rounded-bl-3xl m-4 pr-2"
    >
      <Link href={e.link}>
        <div className="px-6 py-4 hover:translate-x-1 ease-in duration-300 hover:ease-in hover:duration-300 ">
          <div className="flex content-center ">
            <Image
              alt={e.title}
              decoding="async"
              data-src={e.icon}
              className=" lazyloaded"
              src={e.icon}
              width={e.size.width}
              height={e.size.height}
            />
            <noscript>
              <Image
                width={e.size.width}
                height={e.size.height}
                src={e.icon}
                alt={e.title}
                decoding="async"
              />
            </noscript>
            <div className="text-primary-900  text-xl ">{e.title}</div>
          </div>
          <p className="text-gray-700 text-base my-3">{e.content}</p>
        </div>
      </Link>
    </div>
  ));
};

export { Card };
