import Link from "next/link";

/**
 * TODO: Link to the different sections of the page correctly.
 */

export const Navbar: React.FC = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#projects">Projects</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
};
