import Header from "@/components/Header";
import Post from "@/components/Post";
import StoryPerfil from "@/components/StoryPerfil";
import images from "@/assets/images/images.jpeg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="container mx-auto p-4">
        <Header />

        <section className="flex gap-2 mt-4">
          <StoryPerfil image={images} name="iran" active />
          <StoryPerfil image={images} name="iran" />
        </section>

        <Post
          image={images}
          user="iran"
          text="this is a text of example sdjfjsdjfjsdafkasjdfkaskjfkaklfjlkk"
        />

        <Footer />
      </section>
    </>
  );
}
