import { Bookmark, Dot, Heart, MessageCircle, Share2 } from "lucide-react";
import Perfil from "./Perfil";

type PostProps = {
  image: string;
  user: string;
  text: string;
};

export default function Post({ image, user, text }: PostProps) {
  return (
    <section className="flex flex-col justify-self-center gap-3 my-4">
      <header className="flex gap-3 items-center">
        <Perfil />
        <div className="flex items-center">
          <p className="text-background-foreground font-semibold">{user}</p>
          <Dot className="w-3 h-3 text-gray-400" />
          <p className="text-gray-400">1h</p>
        </div>
      </header>
      <main>
        <img
          className="w-full aspect-4/5 object-cover bg-gray-100"
          src={image}
          alt="user"
        />
      </main>
      <footer className="flex justify-between">
        <div className="flex gap-2">
          <Heart className="text-background-foreground" />
          <MessageCircle className="text-background-foreground" />
          <Share2 className="text-background-foreground" />
        </div>

        <div>
          <Bookmark className="text-background-foreground" />
        </div>
      </footer>
      <span className="text-background-foreground">
        <span className="font-semibold">{user}</span> {text}
      </span>
    </section>
  );
}
