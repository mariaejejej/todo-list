import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import { isArrayWithItems } from "../../../validator/arrayValidator";
import "./mi-select.scss";
const { Option } = Select;

const MISelect = (props) => {
  const {
    onChange,
    options,
    value,
    placeholder,
    className,
    defaultValue,
    onSearch,
    showSearch,
    allowClear,
  } = props;

  return (
    <div>
      <Select
        className={`mi-select ${className || ""} `}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onSearch={onSearch}
        showSearch={showSearch}
        allowClear={allowClear}
      >
        {isArrayWithItems(options) &&
          options.map(({ value, label, disabled, itemClassName, children }) => (
            <Option
              key={value}
              value={value}
              label={label}
              disabled={disabled}
              className={itemClassName}
            >
              {children || label}
            </Option>
          ))}
      </Select>
    </div>
  );
};

MISelect.propTypes = {
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  options: PropTypes.arrayOf(Object),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.arrayOf(String),
  className: PropTypes.string,
  showSearch: PropTypes.bool,
  allowClear: PropTypes.bool,
  disabledAll: PropTypes.bool,
};

MISelect.defaultProps = {
  onChange: null,
  onSearch: undefined,
  options: null,
  placeholder: "Select an item",
  className: undefined,
  showSearch: null,
  defaultValue: undefined,
  allowClear: false,
  disabledAll: false,
};

export default MISelect;
export { MISelect as Select };
