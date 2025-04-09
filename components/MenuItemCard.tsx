import { MenuItem } from "@/utils/types";

interface Props {
  item: MenuItem;
}

const MenuItemCard = ({ item }: Props) => (
  <div className="menu-card">
    <h3>
      {item.name} <span>${item.price}</span>
    </h3>
    <p>{item.description}</p>
  </div>
);

export default MenuItemCard;
