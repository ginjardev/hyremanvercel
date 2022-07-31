import React from "react";

import { Column, Row, Text, Button, Img, List, Line } from "components";

const DASHBOARDEightPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] p-[60px] w-[100%]">
        <Row className="justify-end ml-[auto] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] w-[79%]">
          <Text className="capitalize font-normal mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px] text-black_900 w-[auto]">
            DASHBOARD
          </Text>
          <Button
            className="font-normal lg:ml-[398px] xl:ml-[455px] 2xl:ml-[512px] 3xl:ml-[615px] ml-[683px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-center w-[10%]"
            shape="RoundedBorder5"
            size="xl"
            variant="OutlineBlue7007f"
          >
            Create Test
          </Button>
          <Button
            className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] text-center w-[10%]"
            shape="RoundedBorder5"
            size="xl"
            variant="FillBlue700"
          >
            Create Job
          </Button>
          <Img
            src="images/img_user_black_900_31X27.png"
            className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] h-[31px] lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] ml-[76px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[2%]"
            alt="user"
          />
          <Img
            src="images/img_ellipse1.png"
            className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mb-[4px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] rounded-radius50 w-[auto]"
            alt="EllipseOne"
          />
        </Row>
        <Column className="lg:mb-[207px] xl:mb-[237px] 2xl:mb-[267px] 3xl:mb-[320px] mb-[356px] lg:ml-[199px] xl:ml-[228px] 2xl:ml-[256px] 3xl:ml-[307px] ml-[342px] mr-[111px] lg:mr-[64px] xl:mr-[74px] 2xl:mr-[83px] 3xl:mr-[99px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] mt-[71px] w-[75%]">
          <List
            className="lg:gap-[43px] xl:gap-[50px] 2xl:gap-[56px] 3xl:gap-[67px] gap-[75px] grid grid-cols-3 min-h-[auto] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-deep_orange_800 border hover:border-0 border-gray_402 border-solid hover:cursor-pointer items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] rounded-radius20 shadow-bs1 hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <Text className="font-medium mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                JOBS
              </Text>
              <Row className="justify-end lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] w-[51%]">
                <Text className="font-bold 3xl:mb-[10px] mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
                  1
                </Text>
                <Text className="font-medium lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] ml-[71px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] mt-[84px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700_bf w-[auto]">
                  See details
                </Text>
              </Row>
            </Column>
            <Column className="bg-indigo_600 hover:border-0 hover:cursor-pointer items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] rounded-radius20 hover:shadow-bs2 shadow-bs3 hover:w-[100%] w-[100%]">
              <Text className="font-medium lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                APPLICATION
              </Text>
              <Row className="justify-end lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[60%]">
                <Text className="font-bold xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
                  25
                </Text>
                <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] lg:mt-[46px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700_bf w-[auto]">
                  See details
                </Text>
              </Row>
            </Column>
            <Column className="bg-deep_orange_800 border hover:border-0 border-gray_402 border-solid hover:cursor-pointer items-center justify-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px] rounded-radius20 shadow-bs1 hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <Text className="font-medium lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px] text-white_A700 w-[auto]">
                TEST CREATED
              </Text>
              <Row className="justify-end lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[54%]">
                <Text className="font-bold xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-[64px] text-white_A700 w-[auto]">
                  0
                </Text>
                <Text className="font-medium lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] ml-[62px] lg:mt-[46px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] mt-[79px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700_bf w-[auto]">
                  See details
                </Text>
              </Row>
            </Column>
          </List>
          <Text className="capitalize font-medium lg:mt-[29px] xl:mt-[34px] 2xl:mt-[38px] 3xl:mt-[45px] mt-[51px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-black_900 w-[auto]">
            Active Jobs
          </Text>
          <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-gray_405 w-[auto]">
            1 active job
          </Text>
          <Row className="bg-gray_202 justify-between xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
            <Text className="font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[52px] ml-[58px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Job title
            </Text>
            <Text className="font-medium mb-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Applications
            </Text>
            <Text className="font-medium mb-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              New Applications
            </Text>
            <Text className="font-medium 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Test
            </Text>
            <Text className="font-medium mb-[2px] lg:mr-[50px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] mr-[87px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Progess
            </Text>
          </Row>
          <Row className="items-center lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] ml-[75px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] pr-[4px] py-[4px] w-[88%]">
            <Text className="font-medium mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              Junior Mobile Developer
            </Text>
            <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] ml-[47px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              25
            </Text>
            <Text className="font-medium lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] ml-[276px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              5
            </Text>
            <Text className="font-medium lg:ml-[183px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] ml-[314px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-black_900 w-[auto]">
              4
            </Text>
            <div className="bg-teal_600 h-[10px] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] ml-[188px] rounded-radius50 w-[10px] lg:w-[5px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[9px]"></div>
            <Text className="font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-teal_600 w-[auto]">
              On-going
            </Text>
          </Row>
          <Line className="bg-gray_402 h-[1px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[99%]" />
        </Column>
      </Column>
    </>
  );
};

export default DASHBOARDEightPage;
