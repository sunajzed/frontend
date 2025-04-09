import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuTabs from "@/components/MenuTabs";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: "30px 16px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "8px" }}>MENU</h1>
        <p style={{ color: "#ccc", maxWidth: "600px", margin: "0 auto" }}>
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
        </p>
        <MenuTabs />
      </main>
      <Footer />
    </div>
  );
}
