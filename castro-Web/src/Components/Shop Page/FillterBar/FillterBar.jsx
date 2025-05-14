import React, { useState } from "react";
import { FaFilter, FaTh, FaList } from "react-icons/fa";
import FilterPanel from "../FilterPanel/FilterPanel"; // ✅ Fixed import (correct casing and path)
import "./FilterBar.css"; // ✅ Ensure this file exists too

const FilterBar = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sortBy, setSortBy] = useState("Popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  return (
    <div className="container-md">
      <div className="filter-bar">
        <button
          className="filter-btn"
          onClick={() => setShowFilterPanel(!showFilterPanel)}
        >
          <FaFilter className="icon" />
          Filter
        </button>

        <span className="results-text">
          Showing 1–{itemsPerPage} of 50 Results
        </span>

        <div className="dropdown-group">
          <label>Short by</label>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            {[9, 12, 24, 48].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown-group">
          <label>Short by</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {["Popularity", "Price: Low to High", "Price: High to Low", "Newest"].map(
              (option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            )}
          </select>
        </div>

        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <FaTh />
          </button>
          <button
            className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Show/Hide Filter Panel */}
      {showFilterPanel && <FilterPanel />}
    </div>
  );
};

export default FilterBar;
