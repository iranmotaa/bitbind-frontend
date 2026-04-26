import { House, MessageCircleMore, PlusCircle } from "lucide-react";
import Perfil from "./Perfil";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="flex justify-between bg-background items-center z-10 fixed bottom-0 left-0 w-full py-2 px-4">
      <House
        onClick={() => navigate("/messages")}
        className="text-background-foreground"
        size={28}
      />
      <MessageCircleMore className="text-background-foreground" size={28} />
      <PlusCircle className="text-background-foreground" size={28} />
      <Perfil />
    </footer>
  );
}
