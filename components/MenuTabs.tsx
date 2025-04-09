import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const dummyData = {
  Food: [
    { name: "Burger", description: "Juicy grilled burger", price: 8.99 },
    { name: "Pasta", description: "Creamy Alfredo pasta", price: 11.49 },
  ],
  Drinks: [
    { name: "Lycheetini", description: "Lychee vodka cocktail", price: 6.99 },
    { name: "Sweet Heat", description: "Spicy-sweet tequila mix", price: 7.49 },
  ],
  Brunch: [
    { name: "Avocado Toast", description: "Sourdough with smashed avo", price: 9.25 },
    { name: "Mimosas", description: "Bottomless brunch drink", price: 5.99 },
  ],
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<"Food" | "Drinks" | "Brunch">("Food");

  return (
    <div className="menu-section">
      <div className="menu-tabs">
        {["Food", "Drinks", "Brunch"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab as "Food" | "Drinks" | "Brunch")}

          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {dummyData[activeTab].map((item, index) => (
          <MenuItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
