import React from 'react';


interface MenuItems {
    id: number;
    label: string;
    url: string;
  }
  
  interface MenuItemsList {
    menuItems: MenuItems[];
  }
  
  interface MenuItemListProps {
    menuItemsList: MenuItemsList;
  }

  type MenuItemList = MenuItems[] | MenuItems;

  

const MenuItemList: React.FC<MenuItemListProps> = ({ menuItemsList }) => {
    const items = Array.isArray(menuItemsList) ? menuItemsList : menuItemsList.menuItems;

  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-l-box">
      {items.map((item: MenuItems) => (
        <li key={item.id}>
        <a href={item.url}>{item.label}</a>
      </li>
      ))}
    </ul>
  );
};

export default MenuItemList;