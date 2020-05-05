import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchFeature(props) {
  const [SearchTerms, setSearchTerms] = useState("");

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value);

    props.refreshFunction(event.currentTarget.value);
  };

  return (
    <div>
      <Search
        type="danger"
        value={SearchTerms}
        onChange={onChangeSearch}
        placeholder="Search By Typing..."
        style={{ marginBottom: "50px" }}
      />
    </div>
  );
}

export default SearchFeature;
