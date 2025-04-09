import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuTabs from "@/components/MenuTabs";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: "30px", textAlign: "center" }}>
        <h1>Menu</h1>
        <p style={{ maxWidth: "600px", margin: "10px auto" }}>
          Please take a look at our menu featuring food, drinks, and brunch. If you&apos;d like to place an order, use the &quot;Order Online&quot; button located below the menu.
        </p>
        <MenuTabs />
      </main>
      <Footer />
    </>
  );
}
