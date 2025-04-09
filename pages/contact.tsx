import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p style={{ maxWidth: "500px", margin: "10px auto" }}>
          You can reach us via phone at +1 (234) 567-8900 or email at info@deepnetsoft.com
        </p>
      </main>
      <Footer />
    </>
  );
}
