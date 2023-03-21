import { UserCircle } from "@phosphor-icons/react";

export default function Header() {
  return (
    <nav className="bg-blue-800 w-screen h-24 px-10 flex items-center justify-between sticky top-0">
      <img src="src/assets/pokedex.png" className="h-[85%]"></img>
      <span className="text-yellow-400 flex items-center gap-4 cursor-pointer">
        <p className="font-semibold">Log in</p>
        <UserCircle size={45} />
      </span>
    </nav>
  );
}
