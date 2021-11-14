import React from "react";
import propTypes from "prop-types";

import "./index.scss";

const InputText = React.forwardRef(
  (
    {
      name,
      type,
      value,
      isDisabled,
      placeholder,
      outerClassName,
      inputTextClassName,
      prepend,
      append,
      inputClassName,
      onKeyUp,
      onKeyPress,
      onChange,
    },
    ref
  ) => (
    <>
      <div className={["input-text", outerClassName].join(" ")}>
        <div className="input-group">
          {prepend && (
            <div className="input-group-prepend">
              <span className="input-group-text">{prepend}</span>
            </div>
          )}
          <input
            type={type}
            name={name}
            value={value}
            disabled={isDisabled}
            className={["form-control", inputClassName].join(" ")}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUp}
            onKeyPress={onKeyPress}
            ref={ref}
          />
          {append && (
            <div className="input-group-append">
              <span
                className={["input-group-text", inputTextClassName].join(" ")}
              >
                {append}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
);

export default InputText;

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  isDisabled: propTypes.bool,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  onKeyUp: propTypes.func,
  onKeyPress: propTypes.func,
  inputClassName: propTypes.string,
};
