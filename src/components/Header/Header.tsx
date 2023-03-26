import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserCircle } from "@phosphor-icons/react";

export default function Header() {
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("user-info");

    if (storedData) {
      const loggedUserName = JSON.parse(storedData);
      setLoggedUser(loggedUserName.name);
    }
  }, []);

  return (
    <nav className="bg-blue-800 min-h-24 px-10 py-3 flex flex-wrap items-center min-[340px]:justify-between justify-center gap-5 sticky top-0 z-10">
      <a href="/">
        <img src="src/assets/pokedex.png" className="w-[11rem]"></img>
      </a>
      <div className="text-yellow-300 flex flex-col items-center gap-1">
        <UserCircle size={45} />

        {loggedUser.length > 0 ? (
          <Link to={"/UserProfile"}>
            <p className="font-semibold">{loggedUser}</p>
          </Link>
        ) : (
          <Link to={"/UserInfo"}>
            <p className="font-semibold">Sign In</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
