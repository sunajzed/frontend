import { useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  category: "Food" | "Drinks" | "Brunch";
};

const dummyItems: MenuItem[] = [
  { name: "Cheeseburger", price: "$10", category: "Food" },
  { name: "Pasta Alfredo", price: "$12", category: "Food" },
  { name: "Lycheetini", price: "$8", category: "Drinks" },
  { name: "Sweet Heat", price: "$9", category: "Drinks" },
  { name: "Avocado Toast", price: "$11", category: "Brunch" },
  { name: "French Toast", price: "$10", category: "Brunch" },
];

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<"Food" | "Drinks" | "Brunch">("Food");
  const tabs: ("Food" | "Drinks" | "Brunch")[] = ["Food", "Drinks", "Brunch"];
  const filteredItems = dummyItems.filter((item) => item.category === activeTab);

  return (
    <div style={{ padding: "30px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              border: "2px solid #f4c430",
              backgroundColor: activeTab === tab ? "#f4c430" : "transparent",
              color: activeTab === tab ? "#000" : "#f4c430",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredItems.map((item: MenuItem, index: number) => (
          <div
            key={index}
            style={{
              width: "280px",
              padding: "20px",
              backgroundColor: "#1e1e1e",
              color: "#ddd",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3 style={{ color: "#f4c430", marginBottom: "10px", fontSize: "1.3rem" }}>{item.name}</h3>
            <p style={{ fontSize: "0.95rem", marginBottom: "8px", color: "#aaa" }}>
              A tasty selection of {item.category.toLowerCase()}.
            </p>
            <p style={{ fontWeight: "bold", fontSize: "1.1rem", color: "#fff" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
