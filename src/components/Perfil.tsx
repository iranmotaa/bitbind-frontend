import images from "../assets/images/images.jpeg";

export default function Perfil() {
  return (
    <div className="rounded-full w-7 h-7">
      <img
        className="w-full h-full rounded-full object-cover"
        src={images}
        alt=""
      />
    </div>
  );
}
