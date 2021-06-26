import React, { useState, useEffect } from "react";
import ListHeader from "../listHeader/ListHeader";
import List from "../basicComponents/list/MIList";
import Button from "../basicComponents/button/MIButton";
import { useSelector } from "react-redux";
import { isArrayWithItems } from "../../validator/arrayValidator";
import { deleteColorsActionCreator } from "../../redux/colors/colors.actionCreator";
const FrontPage = () => {
  const [data, setData] = useState([]);
  const colors = useSelector((state) => {
    return state && state.colorsReducer.colorsFromApi;
  });

  const deleteColor = (color) => {
    deleteColorsActionCreator(color);
  };

  useEffect(() => {
    const dataUpdated = isArrayWithItems(colors)
      ? colors.map((color) => {
          return {
            item: color,
            style: { "backgroundColor": `#${color}` },
            action: <Button onClick={() => deleteColor(color)}> Delete</Button>,
          };
        })
      : [];
    setData(dataUpdated);
  }, [colors]);

  const header = <div className="header">List</div>;

  return (
    <div>
      <h1> Simple TODO List App</h1>

      <ListHeader />
      <List data={data} header={header} />
    </div>
  );
};

export default FrontPage;
