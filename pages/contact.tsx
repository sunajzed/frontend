import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p>📞 Phone: +91 9567843340</p>
        <p>📧 Connect: info@deepnetsoft.com</p>
        <p>📍 Address: First floor, Geo infopark, Infopark EXPY, Kakkanad</p>
      </main>
      <Footer />
    </>
  );
}
