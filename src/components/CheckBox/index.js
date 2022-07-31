import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray402: "bg-white_A700 border border-gray_402 border-solid",
  OutlineBlack900: "border border-black_900 border-solid",
  OutlineBlack9001_2: "bg-white_A700 border-black_900 border-bw02 border-solid",
  OutlineGray4021_2: "bg-white_A700 border border-gray_402 border-solid",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      variant,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} `}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.array,
  variant: PropTypes.oneOf([
    "OutlineGray402",
    "OutlineBlack900",
    "OutlineBlack9001_2",
    "OutlineGray4021_2",
  ]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  errors: [],
  variant: "OutlineGray402",
};

export { CheckBox };
