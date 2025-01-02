import React from "react";
import "./SortButtons.css";

const SortButtons = ({ children, btn }) => {
  const handleUpdateActiveTabs = (id) => {
    console.log(id);
  };

  return (
    <button
      onClick={() => handleUpdateActiveTabs(btn.id)}
      className={
        btn.hovered
          ? "sortButtonContainer_buttons activeTab"
          : "sortButtonContainer_buttons"
      }
      value={btn.id}>
      {children}
    </button>
  );
};

export default SortButtons;
