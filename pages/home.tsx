import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Welcome to Our Restaurant</h1>
        <p>
          Discover our delicious menus filled with handcrafted cocktails, brunch favorites, and gourmet dishes. We pride ourselves on quality, atmosphere, and service.
        </p>
        <p>
          Whether you're joining us for a quiet dinner, a family brunch, or a night out with friends, we’re here to serve you an unforgettable experience.
        </p>
      </main>
      <Footer />
    </>
  );
}
