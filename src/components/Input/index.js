import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA700: "bg-white_A700",
  OutlineGray402: "bg-white_A700 border border-gray_402 border-solid",
  OutlineBlack900: "bg-white_A700 border-black_900 border-bw02 border-solid",
  srcOutlineBlack9003f: "border-black_900_3f border-bw03 border-solid",
};
const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
  srcCircleBorder22: "rounded-radius22",
};
const sizes = {
  sm: "xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px]",
  md: "p-[11px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px]",
  lg: "xl:p-[10px] 2xl:p-[11px] p-[14px] lg:p-[9px]",
  smSrc: "p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <div
        className={`${wrapClassName} ${shapes[shape] || ""} ${
          variants[variant] || ""
        } ${sizes[size] || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.array,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder5",
    "srcCircleBorder22",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "OutlineGray402",
    "OutlineBlack900",
    "srcOutlineBlack9003f",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  errors: [],
  label: "",
  prefix: null,
  suffix: null,
  shape: "RoundedBorder10",
  variant: "OutlineGray402",
  size: "smSrc",
};

export { Input };
