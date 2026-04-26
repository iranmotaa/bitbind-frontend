type StoryPerfilProps = {
  image: string;
  name: string;
  active?: boolean;
};

export default function StoryPerfil({
  image,
  name,
  active = false,
}: StoryPerfilProps) {
  return (
    <div className="w-20">
      <div
        className={`rounded-full flex justify-center items-center w-20 h-20 border-3 cursor-pointer ${active ? "border-primary" : "border-gray-400"}`}
      >
        <img
          className="w-16 h-16 bg-gray-100 rounded-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <p className="text-center text-background-foreground">{name}</p>
    </div>
  );
}
