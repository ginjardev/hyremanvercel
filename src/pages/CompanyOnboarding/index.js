import React from "react";

import { Column, Row, Img, Text, Input, SelectBox, Button } from "components";

const CompanyOnboardingPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pb-[115px] xl:pb-[131px] 2xl:pb-[148px] pb-[178px] w-[100%]">
        <Row className="bg-white_A700 border border-black_900 border-solid lg:p-[25px] xl:p-[29px] 2xl:p-[33px] p-[40px] w-[100%]">
          <Img
            src="images/img_flag.png"
            className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] h-[36px] 3xl:h-[37px] 2xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] ml-[25px] w-[2%]"
            alt="flag"
          />
          <Img
            src="images/img_yreman.png"
            className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] h-[30px] 3xl:h-[31px] mb-[3px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[9%]"
            alt="yreman"
          />
        </Row>
        <Row className="items-center justify-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] mt-[89px] w-[30%]">
          <div className="bg-bluegray_100 h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] rounded-radius5 w-[48%]"></div>
          <div className="bg-black_900 h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] rounded-radius5 w-[48%]"></div>
        </Row>
        <Column className="border border-black_900 border-solid items-center lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] mt-[59px] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] p-[48px] shadow-bs w-[32%]">
          <Text className="font-bold leading-[normal] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 text-center w-[82%]">
            Get started by creating an employer’s account
          </Text>
          <Column className="xl:mb-[106px] 2xl:mb-[119px] mb-[143px] lg:mb-[92px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] mt-[74px] w-[72%]">
            <Text className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
              Company name
            </Text>
            <Input
              className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
              wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
              name="Frame143"
              placeholder="Enter first name"
              size="sm"
              variant="FillWhiteA700"
            ></Input>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
              Country
            </Text>
            <SelectBox
              className="bg-transparent font-medium xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[100%]"
              placeholderClassName="bg-transparent text-black_900_3f"
              name="Frame143 One"
              placeholder="Select country"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown.png"
                  className="w-[10.5px] h-[4.72px] mr-[16px] lg:w-[6px] lg:h-[4px] lg:mr-[10px] xl:w-[7px] xl:h-[4px] xl:mr-[11px] 2xl:w-[8px] 2xl:h-[4px] 2xl:mr-[13px] 3xl:w-[10px] 3xl:h-[5px]"
                  alt="arrow_down"
                />
              }
              shape="oundedBorder10"
              size="sm"
              variant="illWhiteA700"
            ></SelectBox>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
              Number of employees
            </Text>
            <Input
              className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
              wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
              name="Frame143 Two"
              placeholder="Enter number of employees"
              size="sm"
              variant="FillWhiteA700"
            ></Input>
            <Button
              className="font-medium lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] mt-[63px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-center w-[59%]"
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              Enter Dashboard
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CompanyOnboardingPage;
