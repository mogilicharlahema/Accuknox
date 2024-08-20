import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/actions";
import "./Widget.css"; // Import the CSS file

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget-card">
      <h6 className="widget-remove" onClick={handleRemove}>
        X
      </h6>
      <h3 className="widget-title">
        {widget.name || "Widget Name"}
      </h3>
      <p className="widget-text">
        {widget.text || "No data available"}
      </p>
    </div>
  );
};

export default Widget;
