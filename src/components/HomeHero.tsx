import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const campusLinks = [
  {
    name: "Cañada College",
    url: "https://www.canadacollege.edu/",
    logo: "/logos/canada_college_logo.svg",
  },
  {
    name: "College of San Mateo",
    url: "https://www.collegeofsanmateo.edu/",
    logo: "/logos/csm_signature_logo_blue.svg",
  },
  {
    name: "Skyline College",
    url: "https://www.skylinecollege.edu/",
    logo: "/logos/skyline_college_logo.png",
  },
];

export default function HomeHero() {
  return (
    <section className="h-[500px] flex flex-col justify-center items-center bg-white p-5 md:p-0">
      <div className="container">
        <h1 className="text-2xl font-serif pt-5 text-center md:text-6xl">
          SMCCCD Student Portal
        </h1>
        <p className="text-center text-lg md:text-3xl font-extralight mt-8">
          Web Services at Cañada College, College of San Mateo, & Skyline
          College.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 mt-10">
        {campusLinks.map((campus) => (
          <a
            key={campus.name}
            href={campus.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={campus.name}
            className="flex items-center justify-center w-full"
          >
            <Image
              src={campus.logo}
              alt={`${campus.name} Logo`}
              width={200}
              height={200}
              className="hidden md:flex object-contain overflow-hidden"
            />
            <span
              className={`${buttonVariants({
                variant: "default",
              })} md:hidden w-full`}
            >
              {campus.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
