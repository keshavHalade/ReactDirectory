// import { useState} from "react";
// import Header from "./components/Header";
// import PackingList from "./components/PackingList";
// import Footer from "./components/Footer";
// import Logo from "./components/Logo";

// function AppLayout() {
//   const [listItem, setListItem] = useState([]);

//   function handleListItem(newItem) {
//     setListItem([...listItem, newItem]);
//   }
//   function handleRemoveListItem(id) {
//     setListItem(listItem.filter((item) => item.id !== id));
//   }

//   function handleClearList() {
//     setListItem([]);
//   }

//   function handlePacked(id) {
//     setListItem((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   return (
//     <>
//       <Logo />
//       <Header onSetListItem={handleListItem} />

//       <div className="d-flex flex-column">
//         <div
//           className="flex-grow-1 d-flex flex-column"

//         >
//           <PackingList
//             items={listItem}
//             onClearList={handleClearList}
//             onRemoveListItem={handleRemoveListItem}
//             onPacked={handlePacked}
//           />
//         </div>
//       </div>
//       <div>
//         <Footer items={listItem} />
//       </div>
//     </>
//   );
// }

// export default AppLayout;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

function AppLayout() {
  // Load initial state from localStorage or default to an empty array
  const [listItem, setListItem] = useState(() => {
    const storedItems = localStorage.getItem("listItem");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Save data to localStorage whenever listItem changes
  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(listItem));
  }, [listItem]);

  // Add new item to the list
  function handleListItem(newItem) {
    setListItem([...listItem, newItem]);
  }

  function handleRemoveListItem(id) {
    setListItem(listItem.filter((item) => item.id !== id));
  }

  function handlePacked(id) {
    setListItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setListItem([]);
    localStorage.removeItem("listItem");
  }

  return (
    <>
      <Logo />
      <Header onSetListItem={handleListItem} />

      <div className="d-flex flex-column">
        <div className="flex-grow-1 d-flex flex-column">
          <PackingList
            items={listItem}
            onClearList={handleClearList}
            onRemoveListItem={handleRemoveListItem}
            onPacked={handlePacked}
          />
        </div>
      </div>
      <div>
        <Footer items={listItem} />
      </div>
    </>
  );
}

export default AppLayout;
