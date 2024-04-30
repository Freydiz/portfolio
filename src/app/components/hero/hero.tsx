import Image from "next/image";

/**
 *
 * TODO: add a description with animated text
 */

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between md:gap-0 h-screen bg-white">
      <div className="text-left self-start md:self-center w-full md:w-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Hello!{" "}
          <span className="block md:inline">
            I&apos;m <span className="font-mono text-[#869895]">Henriette</span> 👋
          </span>
        </h1>
      </div>

      <div className="rounded-full overflow-hidden flex justify-center items-center">
        <Image src="/freydiz.png" alt="Henriette" width={230} height={230} priority />
      </div>
    </div>
  );
};
