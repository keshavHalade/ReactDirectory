import { useState } from "react";
import Header from "./components/Header";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";

function App() {
  const [listItem, setListItem] = useState([]);

  function handleListItem(newItem) {
    setListItem([...listItem, newItem]);
  }

  function handleRemoveListItem(id) {
    setListItem(listItem.filter((item) => item.id !== id));
  }

  function handleClearList() {
    setListItem([]);
  }

  function handlePacked(id) {
    setListItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
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

      <Footer items={listItem} />
    </>
  );
}

export default App;