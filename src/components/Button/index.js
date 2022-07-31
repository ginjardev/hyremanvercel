import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  RoundedBorder5: "rounded-radius5",
  CircleBorder14: "rounded-radius14",
  icbCircleBorder20: "rounded-radius20285",
  icbRoundedBorder33: "rounded-radius335",
  icbCircleBorder12: "rounded-radius12",
};
const variants = {
  FillGray400: "bg-gray_400 text-black_900",
  OutlineGray402: "bg-white_A700 border border-gray_402 border-solid",
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineBlack900:
    "bg-white_A700 border border-black_900 border-solid text-black_900",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillGray406: "bg-gray_406 text-black_900",
  OutlineBlack9001_2:
    "bg-white_A700 border-black_900 border-bw05 border-solid text-black_900",
  FillBlue800: "bg-blue_800 text-white_A700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  FillBluegray102: "bg-bluegray_102",
  OutlineBluegray102:
    "border-bluegray_102 border-bw05 border-solid text-blue_800",
  FillGray303: "bg-gray_303 text-black_900",
  OutlineBlue800:
    "bg-white_A700 border-blue_800 border-bw05 border-solid text-blue_800",
  FillGray901: "bg-gray_901 text-white_A700",
  OutlineBlue7007f:
    "bg-white_A700 border border-blue_700_7f border-solid text-blue_700",
  FillBlue700: "bg-blue_700 text-white_A700",
  FillLightgreen50: "bg-light_green_50 text-light_green_A700",
  FillRed90033: "bg-red_900_33 text-red_900",
  icbFillGray300: "bg-gray_300",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineBlack9007f: "border-black_900_7f border-bw05 border-solid",
  icbFillYellow80019: "bg-yellow_800_19",
  icbFillLime50019: "bg-lime_500_19",
  icbFillLightgreenA70019: "bg-light_green_A700_19",
  icbFillDeeppurple70019: "bg-deep_purple_700_19",
  icbFillPinkA40019: "bg-pink_A400_19",
  icbFillDeeporange50019: "bg-deep_orange_500_19",
  icbFillGray201: "bg-gray_201",
};
const sizes = {
  sm: "p-[4px]",
  md: "p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px]",
  lg: "xl:p-[11px] 2xl:p-[12px] p-[15px] lg:p-[9px]",
  xl: "lg:p-[12px] xl:p-[14px] 2xl:p-[16px] p-[20px]",
  smIcn: "xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px]",
  mdIcn: "2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px]",
  lgIcn: "lg:p-[13px] xl:p-[15px] 2xl:p-[17px] p-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "RoundedBorder5",
    "CircleBorder14",
    "icbCircleBorder20",
    "icbRoundedBorder33",
    "icbCircleBorder12",
  ]),
  variant: PropTypes.oneOf([
    "FillGray400",
    "OutlineGray402",
    "FillBlack900",
    "OutlineBlack900",
    "FillWhiteA700",
    "FillGray406",
    "OutlineBlack9001_2",
    "FillBlue800",
    "FillBluegray900",
    "FillBluegray102",
    "OutlineBluegray102",
    "FillGray303",
    "OutlineBlue800",
    "FillGray901",
    "OutlineBlue7007f",
    "FillBlue700",
    "FillLightgreen50",
    "FillRed90033",
    "icbFillGray300",
    "icbFillWhiteA700",
    "icbOutlineBlack9007f",
    "icbFillYellow80019",
    "icbFillLime50019",
    "icbFillLightgreenA70019",
    "icbFillDeeppurple70019",
    "icbFillPinkA40019",
    "icbFillDeeporange50019",
    "icbFillGray201",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  leftIcon: null,
  rightIcon: null,
  shape: "",
  variant: "",
  size: "",
};

export { Button };
