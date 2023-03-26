import { Link } from "react-router-dom";
import { UserCircle } from "@phosphor-icons/react";

export default function Header() {
  return (
    <nav className="bg-blue-800 min-h-24 px-10 py-3 flex flex-wrap items-center min-[340px]:justify-between justify-center gap-5 sticky top-0 z-10">
      <a href="/">
        <img src="src/assets/pokedex.png" className="w-[11rem]"></img>
      </a>
      <div className="text-yellow-300 flex flex-col items-center gap-1">
        <UserCircle size={45} />
        <Link to={"/SignIn"}>
          <p className="font-semibold">Sign In</p>
        </Link>
      </div>
    </nav>
  );
}
