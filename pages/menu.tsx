import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuTabs from '@/components/MenuTabs';
import MenuItemCard from '@/components/MenuTabs';
import { MenuItem } from '@/utils/types';
import { fetchMenuItems } from '@/services/api';

export default function MenuPage() {
  const [selectedTab, setSelectedTab] = useState<'Food' | 'Drinks' | 'Brunch'>('Drinks');
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      const allItems = await fetchMenuItems();
      setItems(allItems);
    };
    getData();
  }, []);

  const filteredItems = items.filter((item) => item.category === selectedTab);

  return (
    <>
      <Header />
      <section style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#111', color: '#fff' }}>
        <h1 style={{ fontSize: '48px', marginBottom: 10 }}>MENU</h1>
        <p>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
        <MenuTabs selected={selectedTab} onSelect={(tab) => setSelectedTab(tab as any)} />
        <div style={{ maxWidth: 800, margin: '0 auto', background: '#222', borderRadius: 8, padding: 16 }}>
          {filteredItems.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
