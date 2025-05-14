import React from "react";
import { FaTimes } from "react-icons/fa";
import "./FilterPanel.css";

const FilterPanel = ({
  onClose,
  onCategoryChange,
  onAgeChange,
  onSizeChange,
  onColorChange,
  onPriceChange,
  selectedFilters
}) => {
  return (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <h5>Filters</h5>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Category */}
      <div className="filter-section">
        <h6>Category</h6>
        {["Women's Clothing", "Men's Fashion", "Kid's Wear", "Accessories"].map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={selectedFilters.categories?.includes(category)}
              onChange={onCategoryChange}
            />
            <label htmlFor={category}> {category} </label>
          </div>
        ))}
      </div>

      {/* Age */}
      <div className="filter-section">
        <h6>Age</h6>
        {["0–2 years", "2–4 years", "4–6 years", "6+ years"].map((age) => (
          <div key={age}>
            <input
              type="radio"
              name="age"
              value={age}
              checked={selectedFilters.age === age}
              onChange={onAgeChange}
            />
            <label>{age}</label>
          </div>
        ))}
      </div>

      {/* Size */}
      <div className="filter-section">
        <h6>Size</h6>
        {["S", "M", "L", "XL"].map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              id={size}
              value={size}
              checked={selectedFilters.sizes?.includes(size)}
              onChange={onSizeChange}
            />
            <label htmlFor={size}> {size} </label>
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="filter-section">
        <h6>Color</h6>
        <div className="color-options">
          {["#000", "#f00", "#0f0", "#00f"].map((color) => (
            <div
              key={color}
              className={`color-circle ${
                selectedFilters.color === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
            />
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="filter-section">
        <h6>Price Range</h6>
        <input
          type="range"
          min="0"
          max="500"
          value={selectedFilters.price || 0}
          onChange={(e) => onPriceChange(e.target.value)}
        />
        <div className="price-range">
          <span>$0</span>
          <span>${selectedFilters.price || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
