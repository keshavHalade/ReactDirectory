import React from "react";

function Footer({ items }) {
  if (!items.length) {
    return (
      <div className="bg-light py-4 mt-auto text-center border-top">
        <p className="fs-5 text-muted">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      </div>
    );
  }

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((totalPacked / totalItems) * 100);

  return (
    <footer className="bg-light py-4 mt-auto text-center border-top">
      <div className="container">
        <p className="fs-6 mb-0 text-muted">
        <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${totalItems} items on your list, and you already packed ${totalPacked} (${percentage}%)`}
      </em>

        </p>
      </div>
    </footer>
  );
}

export default Footer;
