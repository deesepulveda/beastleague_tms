import React from "react";
import "./SortButtons.css";

const SortButtons = ({ children, btns }) => {
  const handleUpdateActiveTabs = (id) => {
    console.log(id);
  };

  return (
    <button
      onClick={() => handleUpdateActiveTabs(btns.id)}
      className={
        btns.hovered
          ? "sortButtonsContainer_buttons activeTab"
          : "sortButtonsContainer_buttons"
      }
      value={btns.id}>
      {children}
    </button>
  );
};

export default SortButtons;
