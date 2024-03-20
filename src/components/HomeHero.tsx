import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="h-[500px] flex flex-col justify-center items-center bg-white">
      <h1 className="text-2xl font-serif pt-5 text-center md:text-6xl">
        SMCCCD Student Portal
      </h1>
      <p className="text-3xl font-light mt-8">
        Web Services at Cañada College, College of San Mateo, & Skyline College.
      </p>
      <div className="grid grid-cols-3 items-center gap-5 mt-10">
        <a
          href="https://www.canadacollege.edu/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Cañada College"
        >
          <Image
            src="/logos/canada_college_logo.svg"
            alt="Cañada College Logo"
            width={200}
            height={200}
          />
        </a>
        <a
          href="https://www.collegeofsanmateo.edu/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="College of San Mateo"
        >
          <Image
            src="/logos/csm_signature_logo_blue.svg"
            alt="College of San Mateo Logo"
            width={200}
            height={200}
          />
        </a>
        <a
          href="https://www.skylinecollege.edu/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Skyline College"
        >
          <Image
            src="/logos/skyline_college_logo.png"
            alt="Skyline College Logo"
            width={200}
            height={200}
          />
        </a>
      </div>
    </section>
  );
}
