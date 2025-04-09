import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Make a Reservation</h1>
        <p>Please call us at <strong>123-456-7890</strong> or email <strong>reservations@restaurant.com</strong> to make a reservation.</p>
      </main>
      <Footer />
    </>
  );
}
