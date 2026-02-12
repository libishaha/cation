import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col max-w-5xl items-center justify-center">
      <div className="mt-8 sm:mt-10">
        <Image
          src="/cat1.svg"
          width={320}
          height={240}
          className="mx-auto dark:hidden"
          alt="Illustrated cat sitting happily"
        />
        <Image
          src="/cat1-dark.svg"
          width={320}
          height={240}
          className="mx-auto hidden dark:block"
          alt="Illustrated cat sitting happily"
        />
      </div>
    </div>
  );
};