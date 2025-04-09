import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Make a Reservation</h1>
        <p style={{ maxWidth: "500px", margin: "10px auto" }}>
          To reserve a table, please call us or use the contact form.
        </p>
      </main>
      <Footer />
    </>
  );
}
