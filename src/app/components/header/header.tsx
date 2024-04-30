import { Logo } from "./logo";
import { Navbar } from "./navbar";

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow">
      <div className="flex justify-center w-full">
        <div className="container mx-auto py-2 w-11/12 md:w-4/5 max-w-5xl">
          <div className="flex justify-between items-center">
            <Logo />
            <Navbar />
          </div>
        </div>
      </div>
    </nav>
  );
};
