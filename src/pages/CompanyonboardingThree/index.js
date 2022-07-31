import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Input, CheckBox, Button } from "components";

const CompanyonboardingThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/companyonboardingtwo");
  }
  function handleNavigate14() {
    navigate("/companyonboardingtwo");
  }

  return (
    <>
      <Column
        className="common-pointer bg-white_A700 font-poppins mx-[auto] lg:pb-[213px] xl:pb-[243px] 2xl:pb-[274px] pb-[329px] w-[100%]"
        onClick={handleNavigate13}
      >
        <Column className="items-center w-[100%]">
          <Row className="bg-white_A700 border border-black_900 border-solid xl:p-[10px] 2xl:p-[11px] p-[14px] lg:p-[9px] w-[100%]">
            <Img
              src="images/img_flag_blue_800.png"
              className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] h-[36px] 3xl:h-[37px] xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] mb-[8px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] w-[2%]"
              alt="flag"
            />
            <Img
              src="images/img_yreman_blue_800.png"
              className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] h-[30px] 3xl:h-[31px] xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] ml-[5px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] mt-[39px] w-[9%]"
              alt="yreman"
            />
          </Row>
        </Column>
        <Row className="items-center 2xl:ml-[100px] ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:mr-[129px] xl:mr-[148px] 2xl:mr-[166px] mr-[200px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] mt-[57px] w-[81%]">
          <Img
            src="images/img_flag_blue_800.png"
            className="lg:h-[426px] xl:h-[488px] 2xl:h-[548px] h-[657px] 3xl:h-[658px] w-[34%]"
            alt="LayerOne"
          />
          <Column className="items-center lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] ml-[353px] w-[40%]">
            <Row className="items-center justify-center w-[21%]">
              <div className="bg-blue_800 xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] rounded-radius2 w-[41%]"></div>
              <div className="bg-bluegray_100 xl:h-[3px] lg:h-[3px] h-[4px] 3xl:h-[5px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] rounded-radius2 w-[41%]"></div>
            </Row>
            <Column className="bg-bluegray_102 lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] lg:p-[41px] xl:p-[47px] 2xl:p-[53px] p-[64px] shadow-bs w-[100%]">
              <Text className="font-semibold lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] ml-[37px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-blue_800 w-[auto]">
                Creat an account
              </Text>
              <Text className="font-normal lg:ml-[23px] xl:ml-[27px] 2xl:ml-[30px] ml-[37px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-bluegray_901 w-[auto]">
                Get started by creating an recruiter’s account
              </Text>
              <Row className="items-center justify-center lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] ml-[57px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[74%]">
                <Column className="w-[47%]">
                  <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    First Name
                  </Text>
                  <Text className="bg-white_A700 border-black_900 border-bw02 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius10 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[100%]">
                    Enter first name
                  </Text>
                </Column>
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] w-[47%]">
                  <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Last Name
                  </Text>
                  <Text className="bg-white_A700 border-black_900 border-bw02 border-solid font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius10 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[100%]">
                    Enter last name
                  </Text>
                </Column>
              </Row>
              <Text className="font-normal lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] ml-[57px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Email
              </Text>
              <Input
                className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
                wrapClassName="2xl:ml-[47px] 2xl:mt-[4px] lg:ml-[36px] lg:mt-[3px] ml-[57px] mt-[5px] w-[74%] xl:ml-[42px] xl:mt-[3px]"
                name="Frame143 Two"
                placeholder="Enter email"
                size="sm"
                variant="OutlineBlack900"
              ></Input>
              <Text className="font-normal lg:ml-[36px] xl:ml-[42px] 2xl:ml-[47px] ml-[57px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Password
              </Text>
              <Input
                className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
                wrapClassName="2xl:ml-[47px] 2xl:mt-[4px] lg:ml-[36px] lg:mt-[3px] ml-[57px] mt-[5px] w-[74%] xl:ml-[42px] xl:mt-[3px]"
                name="Frame143 Three"
                placeholder="Enter password"
                size="sm"
                variant="OutlineBlack900"
              ></Input>
              <CheckBox
                className="font-medium lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:pl-[4px] 2xl:pl-[5px] xl:pl-[5px] pl-[7px] text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="Iagreewithth"
                label="I agree with the terms of service and privacy policy"
                variant="OutlineBlack9001_2"
              ></CheckBox>
              <Button
                className="common-pointer font-normal ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] mt-[40px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[48%]"
                onClick={handleNavigate14}
                shape="RoundedBorder10"
                size="md"
                variant="FillBlue800"
              >
                Sign up
              </Button>
              <Text className="font-medium mb-[1px] 2xl:ml-[106px] ml-[128px] lg:ml-[82px] xl:ml-[94px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-black_900_7f w-[auto]">
                <span className="text-bluegray_400_7f font-poppins">
                  Already have an account ?
                </span>
                <span className="text-black_900_7f font-poppins"> </span>
                <span className="text-bluegray_900 font-poppins">Log In</span>
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CompanyonboardingThreePage;
