import React from "react";
import { List } from "antd";
import { isArrayWithItems } from "../../../validator/arrayValidator";
import './mi-list.scss'

const MIList = (props) => {
  const { data,header, footer } = props;
  

  return isArrayWithItems(data) &&(
    <List
      header={header}
      footer={footer}
      bordered
      dataSource={data}
      renderItem={(itemData) => {
        const { item, action, style } = itemData;
        return (
          <List.Item style={style} actions={[action]}>
            <div>{item}</div>
          </List.Item>
        );
      }}
    />
  );
};

export { MIList as default, MIList as Lxist };
