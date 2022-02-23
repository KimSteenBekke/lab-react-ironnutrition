import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function SearchFood(props) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    props.search(e.target.value);
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-bar">
      Search:
      <input type="text" onChange={handleSearch} value={searchInput} />
    </div>
  );
}

export default SearchFood;
