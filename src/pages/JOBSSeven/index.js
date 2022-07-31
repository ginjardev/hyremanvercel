import React from "react";

import { Column, Row, Img, Text, Button, SelectBox, Stack } from "components";

const JOBSSevenPage = () => {
  return (
    <>
      <Column className="bg-gray_200 font-poppins items-center mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <Row className="justify-between w-[100%]">
          <aside className="items-center w-[17%]">
            <Column className="">
              <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
                <Img
                  src="images/img_group100000430.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                  alt="Group100000430"
                />
                <Row className="items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_menu.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] rounded-radius2 lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                    alt="menu"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[93%]">
                  <Img
                    src="images/img_mail_black_900.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                    alt="mail"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] my-[4px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Jobs
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_user_bluegray_100.png"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                    alt="user"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Candidates
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                  <Img
                    src="images/img_ticket.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="ticket"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Test Library
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] ml-[19px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] mt-[42px] rounded-radius5 w-[85%]">
                  <Img
                    src="images/img_home.png"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                    alt="home"
                  />
                  <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Resume Bank
                  </Text>
                </Row>
                <Row className="items-center ml-[11px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[365px] xl:mt-[418px] 2xl:mt-[470px] mt-[564px] rounded-radius5 w-[96%]">
                  <Img
                    src="images/img_settings.png"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                    alt="settings"
                  />
                  <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="items-center justify-end lg:mb-[29px] xl:mb-[34px] 2xl:mb-[38px] mb-[46px] ml-[auto] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[95%]">
                  <Img
                    src="images/img_vector.png"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[8%]"
                    alt="Vector"
                  />
                  <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                    log Out
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mb-[353px] xl:mb-[404px] 2xl:mb-[455px] mb-[546px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[82%]">
            <Row className="bg-white_A700 items-end justify-end xl:p-[5px] lg:p-[5px] 2xl:p-[6px] p-[8px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 w-[auto]">
                JOBS
              </Text>
              <Button
                className="font-medium mb-[4px] lg:ml-[500px] xl:ml-[572px] 2xl:ml-[643px] ml-[772px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[7%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add
              </Button>
              <Button
                className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] items-center justify-center xl:mb-[3px] lg:mb-[3px] 2xl:mb-[4px] mb-[5px] lg:ml-[29px] xl:ml-[34px] 2xl:ml-[38px] ml-[46px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                shape="icbCircleBorder20"
                size="smIcn"
                variant="icbFillGray300"
              >
                <Img
                  src="images/img_iconsalerts.png"
                  className="flex items-center justify-center"
                  alt="IconsAlerts"
                />
              </Button>
              <Img
                src="images/img_user_gray_600.png"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] xl:mb-[10px] 2xl:mb-[11px] mb-[14px] lg:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] ml-[41px] mr-[3px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                alt="user One"
              />
            </Row>
            <Row className="lg:ml-[32px] xl:ml-[37px] 2xl:ml-[41px] ml-[50px] 2xl:mr-[106px] mr-[128px] lg:mr-[82px] xl:mr-[94px] lg:mt-[33px] xl:mt-[37px] 2xl:mt-[42px] mt-[51px] w-[87%]">
              <SelectBox
                className="bg-transparent font-bold 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[9%]"
                placeholderClassName="bg-transparent text-black_900"
                name="AllJobs"
                placeholder="All Jobs"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.png"
                    className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                    alt="arrow_down"
                  />
                }
                shape="oundedBorder10"
                variant="dropdown0"
              ></SelectBox>
              <Row className="items-center justify-center 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[57px] xl:ml-[65px] 2xl:ml-[73px] ml-[88px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] rounded-radius10 w-[20%]">
                <Text className="font-bold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_400 w-[auto]">
                  Sort by
                </Text>
                <SelectBox
                  className="bg-transparent font-bold lg:ml-[20px] xl:ml-[22px] 2xl:ml-[25px] ml-[31px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[64%]"
                  placeholderClassName="bg-transparent text-black_900"
                  name="Group173"
                  placeholder="Date Created"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.png"
                      className="w-[10.5px] h-[4.72px] mr-[0] lg:w-[6px] lg:h-[4px] xl:w-[7px] xl:h-[4px] 2xl:w-[8px] 2xl:h-[4px] 3xl:w-[10px] 3xl:h-[5px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Row>
              <Button
                className="font-medium lg:ml-[439px] xl:ml-[502px] 2xl:ml-[565px] ml-[678px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-center w-[8%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillGray400"
              >
                Add Job
              </Button>
            </Row>
            <Column className="bg-white_A700 border-bw05 border-gray_500 border-solid justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] ml-[29px] mr-[1064px] lg:mr-[689px] xl:mr-[788px] 2xl:mr-[887px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] rounded-radius20 w-[22%]">
              <Text className="font-bold lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] mt-[7px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_612 w-[auto]">
                IT & SOFTWARE DEVELOPMENT
              </Text>
              <Text className="font-bold leading-[normal] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] text-[24px] text-black_900 w-[90%]">
                JUNIOR MOBILE <br />
                DEVELOPER
              </Text>
              <Row className="items-center justify-between lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] mt-[20px] w-[97%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Candidates
                </Text>
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-black_900 w-[auto]">
                  Status
                </Text>
              </Row>
              <Row className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[97%]">
                <Stack className="bg-gray_402 lg:h-[47px] xl:h-[53px] 2xl:h-[60px] h-[71px] 3xl:h-[72px] px-[2px] rounded-radius10 w-[47%]">
                  <Text className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] text-[36px] text-black_900 uppercase w-[max-content]">
                    25
                  </Text>
                  <Text className="absolute font-normal inset-x-[0] mx-[auto] not-italic 2xl:text-[10px] text-[12px] lg:text-[7px] xl:text-[8px] text-black_900 top-[1%] w-[max-content]">
                    TOTAL
                  </Text>
                </Stack>
                <div className="bg-gray_701 h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] mb-[36px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] mt-[25px] rounded-radius50 w-[10px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px]"></div>
                <Text className="font-medium lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] mb-[29px] ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_701 w-[auto]">
                  On-going
                </Text>
              </Row>
              <Row className="items-center justify-between lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] w-[97%]">
                <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_612 w-[auto]">
                  GH
                </Text>
                <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-gray_612 w-[auto]">
                  Full-Time
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] mb-[17px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[97%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_501 w-[auto]">
                  Published
                </Text>
                <Text className="font-semibold lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_701 w-[auto]">
                  See Details
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default JOBSSevenPage;
