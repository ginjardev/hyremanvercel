import React from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { Column, Row, Img, Text, Button, Line, Input } from "components";

const CandidateOnboardingSignupPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

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
        <Text className="font-bold lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] mt-[59px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
          Let’s help you find your dream job easily
        </Text>
        <Text className="font-medium leading-[normal] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 text-center w-[14%]">
          Get your skill and resume matched with opportunities easily
        </Text>
        <Column className="border border-black_900 border-solid items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] p-[24px] shadow-bs w-[32%]">
          <Column className="items-center w-[39%]">
            <Button
              className="flex items-center justify-center text-center w-[100%]"
              onClick={googleSignIn}
              leftIcon={
                <Img
                  src="images/img_contrast.png"
                  className="w-[12.86px] mr-[11px] text-center lg:w-[8px] lg:mr-[7px] xl:w-[9px] xl:mr-[8px] 2xl:w-[10px] 2xl:mr-[9px] 3xl:w-[12px]"
                  alt="contrast"
                />
              }
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              <div className="common-pointer bg-transparent font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px]">
                Sign up with Google
              </div>
            </Button>
            <Button
              className="2xl:mt-[6px] flex items-center justify-center lg:mt-[5px] mt-[8px] text-center w-[100%] xl:mt-[5px]"
              leftIcon={
                <Img
                  src="images/img_map.png"
                  className="w-[13.34px] mr-[11px] text-center lg:w-[8px] lg:mr-[7px] xl:w-[9px] xl:mr-[8px] 2xl:w-[11px] 2xl:mr-[9px] 3xl:w-[13px]"
                  alt="map"
                />
              }
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              <div className="bg-transparent font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px]">
                Sign up with LinkedIn
              </div>
            </Button>
          </Column>
          <Column className="mb-[102px] lg:mb-[66px] xl:mb-[75px] 2xl:mb-[85px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[65%]">
            <Row className="justify-evenly w-[100%]">
              <Line className="bg-gray_302 h-[1px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] mb-[7px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[47%]" />
              <Text className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                or
              </Text>
              <Line className="bg-gray_302 h-[1px] lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] mb-[7px] mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[47%]" />
            </Row>
            <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]">
              <Column className="w-[47%]">
                <Text className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                  First Name
                </Text>
                <Text className="bg-white_A700 font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius10 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[100%]">
                  Enter first name
                </Text>
              </Column>
              <Column className="w-[47%]">
                <Text className="font-medium 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                  Last Name
                </Text>
                <Text className="bg-white_A700 font-medium leading-[normal] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] xl:py-[5px] lg:py-[5px] 2xl:py-[6px] py-[8px] rounded-radius10 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900_3f w-[100%]">
                  Enter last name
                </Text>
              </Column>
            </Row>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
              Email
            </Text>
            <Input
              className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
              wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
              name="Frame143 Two"
              placeholder="Enter email"
              size="sm"
              variant="FillWhiteA700"
            ></Input>
            <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
              Password
            </Text>
            <Input
              className="bg-transparent border-0 font-medium p-[0] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] placeholder:text-black_900_3f text-black_900_3f w-[100%]"
              wrapClassName="2xl:mt-[4px] lg:mt-[3px] mt-[5px] w-[100%] xl:mt-[3px]"
              name="Frame143 Three"
              placeholder="Enter password"
              size="sm"
              variant="FillWhiteA700"
            ></Input>
            <Row className="ml-[4px] xl:mt-[10px] 2xl:mt-[11px] mt-[14px] lg:mt-[9px] w-[97%]">
              <div className="bg-bluegray_100 lg:h-[10px] xl:h-[12px] 2xl:h-[13px] h-[15px] 3xl:h-[16px] mb-[2px] xl:w-[11px] 2xl:w-[12px] w-[15px] lg:w-[9px]"></div>
              <Text className="font-medium 2xl:ml-[10px] ml-[13px] lg:ml-[8px] xl:ml-[9px] text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900 w-[auto]">
                <span className="text-black_900 font-poppins">
                  I agree with the
                </span>
                <span className="text-black_900 font-poppins font-bold">
                  {" "}
                  terms of service
                </span>
                <span className="text-black_900 font-poppins"> and </span>
                <span className="text-black_900 font-poppins font-bold">
                  privacy policy
                </span>
              </Text>
            </Row>
            <Button
              className="font-medium lg:ml-[43px] xl:ml-[49px] 2xl:ml-[55px] ml-[67px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] mt-[32px] 2xl:text-[10px] text-[13px] lg:text-[8px] xl:text-[9px] text-center w-[59%]"
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              Sign up
            </Button>
            <Text className="font-medium lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] ml-[71px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] mt-[48px] text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-black_900_7f w-[auto]">
              <span className="text-black_900_7f font-poppins">
                Already have an account ?{" "}
              </span>
              <span className="text-black_900 font-poppins">Log In</span>
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CandidateOnboardingSignupPage;
