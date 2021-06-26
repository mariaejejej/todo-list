import React, { useState, useEffect } from "react";
import Input from "../basicComponents/input/MIInput";
import Select from "../basicComponents/select/MISelect";

import Button from "../basicComponents/button/MIButton";
import fetchControlErrors from "../../Api/apiCalls";
import "./list-header.scss";
import { isArrayWithItems } from "../../validator/arrayValidator";
import { isStringWithCharacters } from "../../validator/stringValidator";
import { createColorsActionCreator } from "../../redux/colors/colors.actionCreator";

const ListHeader = () => {
  const [inputValue, setInputValue] = useState(undefined);
  const [selectValue, setSelectValue] = useState(undefined);
  const [selectOptions, setSelectOptions] = useState(undefined);

  useEffect(() => {
    const config = {
      endpoint: "https://www.colr.org/json/colors/random/10",
      method: "GET",
    };

    const colorsArray = [];
    fetchControlErrors(config).then((response) => {
      if (response) {
        response.json().then((body) => {
          if (isArrayWithItems(body.matching_colors)) {
            body.matching_colors.forEach(
              (color) =>
                isStringWithCharacters(color) &&
                colorsArray.push({ value: color, style: color, label: color })
            );
            setSelectOptions(colorsArray);
          }
        });
      }
    });
  }, []);

  const addColors = () => {
    if (selectValue) {
      createColorsActionCreator(selectValue);
    }
  };

  return (
    <div className="list-header-content">
      <Input
        placeholder="Placeholder"
        value={inputValue}
        onChange={(valueToChange) => setInputValue(valueToChange.value)}
      />
      <Select
        label="select"
        options={selectOptions}
        value={selectValue}
        onChange={setSelectValue}
      />
      <Button onClick={addColors} className="add-item">
        Add item
      </Button>
    </div>
  );
};
export default ListHeader;
