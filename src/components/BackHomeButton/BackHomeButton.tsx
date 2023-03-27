import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export default function BackHomeButton() {
  return (
    <div className="text-yellow-300">
      <Link to={"/"}>
        <ArrowLeft size={32} />
      </Link>
    </div>
  );
}
