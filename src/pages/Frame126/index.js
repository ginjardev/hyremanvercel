import React from "react";

import { Stack, Row, Text, Column, Img } from "components";

const Frame126Page = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-poppins lg:h-[178px] xl:h-[203px] h-[218px] 2xl:h-[228px] 3xl:h-[274px] mx-[auto] lg:px-[16px] xl:px-[18px] px-[20px] 3xl:px-[25px] w-[100%]">
        <Row className="absolute items-center justify-between left-[0] top-[0] w-[78%]">
          <Text className="capitalize font-medium lg:text-[19px] xl:text-[22px] text-[24px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
            Welcome Mista Boakye
          </Text>
          <Text className="capitalize font-medium lg:text-[19px] xl:text-[22px] text-[24px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
            Need Help ?
          </Text>
        </Row>
        <Row className="absolute justify-between left-[0] top-[20%] w-[37%]">
          <Text className="font-medium xl:mb-[4px] lg:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Let’s quickly setup with the following for checklist
          </Text>
          <Text className="font-bold xl:mt-[4px] lg:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Quick Add
          </Text>
        </Row>
        <Row className="absolute items-center right-[3%] top-[18%] w-[50%]">
          <Text className="font-bold lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Quick Search
          </Text>
          <Text className="font-medium leading-[normal] lg:ml-[162px] xl:ml-[185px] ml-[200px] 2xl:ml-[208px] 3xl:ml-[250px] lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[57%]">
            <span className="text-black_900 font-poppins">
              Send us a message quickly with our{" "}
            </span>
            <span className="text-black_900 font-poppins font-bold">
              chartbot
            </span>
            <span className="text-black_900 font-poppins">
              {" "}
              below and quick get response
            </span>
          </Text>
        </Row>
        <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[16%]">
          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Resume Bank
          </Text>
          <Text className="font-bold lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Connect
          </Text>
        </Row>
        <Column className="absolute bottom-[0] items-center left-[0] w-[40%]">
          <Row className="w-[100%]">
            <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Invite Team
            </Text>
            <Text className="font-bold mb-[1px] lg:ml-[64px] xl:ml-[73px] ml-[79px] 2xl:ml-[82px] 3xl:ml-[99px] lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Invite
            </Text>
            <Img
              src="images/img_user_black_900.png"
              className="lg:h-[12px] h-[14px] 2xl:h-[15px] 3xl:h-[18px] mb-[1px] lg:ml-[196px] xl:ml-[224px] ml-[242px] 2xl:ml-[252px] 3xl:ml-[303px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[4%]"
              alt="user"
            />
            <Text className="font-normal lg:ml-[10px] xl:ml-[12px] ml-[13px] 3xl:ml-[16px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Candidate
            </Text>
          </Row>
          <Row className="lg:mt-[15px] xl:mt-[17px] mt-[19px] 3xl:mt-[23px] w-[99%]">
            <Text className="font-normal mt-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Test Library
            </Text>
            <Text className="font-bold 3xl:ml-[101px] lg:ml-[65px] xl:ml-[75px] ml-[81px] 2xl:ml-[84px] mt-[2px] lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Connect
            </Text>
            <Img
              src="images/img_calendar_black_900.png"
              className="lg:h-[15px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[23px] lg:ml-[181px] xl:ml-[208px] ml-[224px] 2xl:ml-[234px] 3xl:ml-[280px] my-[2px] w-[4%]"
              alt="calendar"
            />
            <Text className="font-normal mb-[2px] ml-[10px] 3xl:ml-[12px] lg:ml-[8px] xl:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Company
            </Text>
          </Row>
        </Column>
        <Row className="absolute bottom-[33%] left-[32%] w-[26%]">
          <Img
            src="images/img_mail_black_900.png"
            className="lg:h-[15px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[23px] my-[3px] w-[6%]"
            alt="mail"
          />
          <Text className="font-normal lg:ml-[10px] xl:ml-[12px] ml-[13px] 3xl:ml-[16px] my-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Job
          </Text>
          <Img
            src="images/img_home_black_900.png"
            className="lg:h-[20px] xl:h-[23px] h-[24px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[101px] xl:ml-[116px] ml-[125px] 2xl:ml-[130px] 3xl:ml-[156px] lg:w-[19px] xl:w-[22px] w-[24px] 2xl:w-[25px] 3xl:w-[30px]"
            alt="home"
          />
          <Text className="font-normal xl:ml-[10px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] my-[2px] not-italic lg:text-[10px] xl:text-[12px] text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
            Search resume bank
          </Text>
        </Row>
      </Stack>
    </>
  );
};

export default Frame126Page;
