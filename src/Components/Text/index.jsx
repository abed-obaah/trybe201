import React from "react";

const sizeClasses = {
  txtMontserratMedium22: "font-medium font-montserrat",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular64: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtInterMedium16Gray800: "font-inter font-medium",
  txtInterRegular14Gray300: "font-inter font-normal",
  txtMontserratRomanSemiBold20Gray800: "font-montserrat font-semibold",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterRegular40Gray800: "font-inter font-normal",
  txtMontserratRomanRegular9Indigo900: "font-montserrat font-normal",
  txtInterBold28: "font-bold font-inter",
  txtMontserratRomanBold22: "font-bold font-montserrat",
  txtMontserratRomanRegular14: "font-montserrat font-normal",
  txtInterBold22: "font-bold font-inter",
  txtMontserratRomanRegular13: "font-montserrat font-normal",
  txtMontserratRomanSemiBold14: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold15: "font-montserrat font-semibold",
  txtInterMedium16Indigo900: "font-inter font-medium",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtInterRegular24: "font-inter font-normal",
  txtMontserratRomanMedium11: "font-medium font-montserrat",
  txtInterRegular28: "font-inter font-normal",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMontserratMedium32: "font-medium font-montserrat",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtInterRegular32: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold36: "font-bold font-inter",
  txtInterSemiBold36: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtMontserratRomanRegular9: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtMontserratRomanRegular9AmberA400: "font-montserrat font-normal",
  txtMontserratRomanRegular9Deeppurple400: "font-montserrat font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16Gray800: "font-inter font-normal",
  txtMontserratRomanRegular9Green400: "font-montserrat font-normal",
  txtMontserratRomanSemiBold14Gray800: "font-montserrat font-semibold",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
