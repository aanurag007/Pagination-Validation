import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import ItemList from "./components/ItemList";
import ReCAPTCHA from "react-google-recaptcha";
import { mockData } from "./mockData";
import "./App.css";

const ITEMS_PER_PAGE = 10;

const App = () => {
  const [items, setItems] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [captchaValidated, setCaptchaValidated] = useState(false);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const handleCaptcha = (value) => {
    if (value) setCaptchaValidated(true);
  };

  return (
    <div className="app">
      <h1>Drag-and-Drop Item List</h1>

      {!captchaValidated && (
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={handleCaptcha}
        />
      )}

      {captchaValidated && (
        <>
          <SearchBar onSearch={handleSearch} />
          <ItemList items={currentItems} setItems={setFilteredItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
