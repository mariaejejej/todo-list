import { Input } from "antd";
import PropTypes from "prop-types";
import React from "react";

import "./mi-input.scss";

const MIInput = (props) => {
  const {
    size,
    placeholder,
    type,
    onChange,
    value,
    defaultValue,
    className,
    allowClear,
  } = props;

  return (
    <Input
      size={size}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      className={className}
      allowClear={allowClear}
    />
  );
};

MIInput.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  allowClear: PropTypes.bool,
};

MIInput.defaultProps = {
  size: "large",
  placeholder: undefined,
  onChange: undefined,
  value: undefined,
  defaultValue: undefined,
  className: undefined,
  allowClear: false,
};

export { MIInput as default, MIInput as Input };
