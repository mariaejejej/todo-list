import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./mi-button.scss";
const MIButton = (props) => {
  const { type, children, className, size, loading, disabled, onClick } = props;


  return (
    <div className={`mi-button ${className || ""} ${type} `}>
      <Button size={size} type='text' loading={loading} disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

MIButton.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

MIButton.defaultProps = {
  loading: false,
  onClick: undefined,
  type: "default",
  className: undefined,
  size: "default",
  disabled: false,
};

export { MIButton as default, MIButton as Button };
