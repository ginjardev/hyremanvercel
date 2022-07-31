import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button } from "components";

const TESTLIBRARYPage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    navigate("/candidatesthree");
  }
  function handleNavigate24() {
    navigate("/resumebanksix");
  }
  function handleNavigate33() {
    navigate("/dashboardseven");
  }
  function handleNavigate34() {
    navigate("/jobsten");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:pr-[25px] xl:pr-[29px] 2xl:pr-[33px] pr-[40px] w-[100%]">
        <Row className="justify-evenly w-[100%]">
          <aside className="lg:pr-[33px] xl:pr-[37px] 2xl:pr-[42px] pr-[51px] w-[19%]">
            <Column className="">
              <Column className="bg-bluegray_900 2xl:p-[10px] p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                <Img
                  src="images/img_group100000430_white_A700.png"
                  className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] mr-[36px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]"
                  alt="Group100000430"
                />
                <Column className="items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] mt-[35px] mx-[auto] w-[90%]">
                  <Row
                    className="common-pointer items-center rounded-radius5 w-[100%]"
                    onClick={handleNavigate33}
                  >
                    <Img
                      src="images/img_plus_white_A700.png"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] w-[18px]"
                      alt="plus"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Dashboard
                    </Text>
                  </Row>
                  <div className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Row
                        className="common-pointer items-center rounded-radius5 w-[100%]"
                        onClick={handleNavigate34}
                      >
                        <Img
                          src="images/img_mail.png"
                          className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                          alt="mail"
                        />
                        <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Jobs
                        </Text>
                      </Row>
                      <Row
                        className="common-pointer items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] mt-[27px] rounded-radius5 w-[100%]"
                        onClick={handleNavigate23}
                      >
                        <Img
                          src="images/img_user_white_A700.png"
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                          alt="user"
                        />
                        <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                          Candidates
                        </Text>
                      </Row>
                    </Column>
                  </div>
                </Column>
                <Row className="bg-white_A700 items-center justify-evenly lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] mt-[17px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] p-[9px] rounded-radius5 w-[100%]">
                  <Img
                    src="images/img_mobile_black_900.png"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] h-[20px] 3xl:h-[21px] my-[0] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] w-[20px]"
                    alt="mobile"
                  />
                  <Text className="capitalize font-medium xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Test Library
                  </Text>
                </Row>
                <Column className="items-center lg:mb-[44px] xl:mb-[51px] 2xl:mb-[57px] mb-[69px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] mx-[auto] w-[94%]">
                  <div className="w-[97%]">
                    <Row
                      className="common-pointer items-center rounded-radius5 w-[100%]"
                      onClick={handleNavigate24}
                    >
                      <Img
                        src="images/img_home_white_A700.png"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] w-[24px]"
                        alt="home"
                      />
                      <Text className="capitalize font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] ml-[20px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                        Resume Bank
                      </Text>
                    </Row>
                  </div>
                  <Row className="items-center lg:mt-[430px] xl:mt-[492px] 2xl:mt-[553px] mt-[664px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_settings_white_A700.png"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                      alt="settings"
                    />
                    <Text className="capitalize font-medium lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] my-[0] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] mt-[36px] rounded-radius5 w-[100%]">
                    <Img
                      src="images/img_vector.png"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                      alt="Vector"
                    />
                    <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                      log Out
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mb-[488px] xl:mb-[558px] 2xl:mb-[628px] mb-[754px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] mt-[24px] w-[81%]">
            <Row className="bg-white_A700 border border-gray_600_19 border-solid items-center lg:p-[4px] 2xl:p-[5px] xl:p-[5px] p-[7px] rounded-radius10 w-[100%]">
              <Text className="capitalize font-medium mb-[1px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] ml-[23px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] text-[30px] text-black_900 w-[auto]">
                tEST LIBRARY
              </Text>
              <Button
                className="2xl:ml-[737px] flex items-center justify-center lg:ml-[572px] ml-[884px] text-center w-[5%] xl:ml-[655px]"
                leftIcon={
                  <Img
                    src="images/img_grid_white_A700.png"
                    className="w-[10px] h-[10px] mr-[10px] text-center lg:w-[6px] lg:h-[7px] lg:mr-[6px] xl:w-[7px] xl:h-[8px] xl:mr-[7px] 2xl:w-[8px] 2xl:h-[9px] 2xl:mr-[8px] 3xl:h-[11px]"
                    alt="grid"
                  />
                }
                shape="RoundedBorder10"
                size="md"
                variant="FillBlue800"
              >
                <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px]">
                  Add
                </div>
              </Button>
              <Button
                className="flex lg:h-[26px] xl:h-[30px] 2xl:h-[34px] h-[40px] 3xl:h-[41px] items-center justify-center lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] ml-[40px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] w-[40px]"
                shape="icbCircleBorder20"
                size="smIcn"
                variant="icbFillGray300"
              >
                <Img
                  src="images/img_iconsalerts_gray_646.png"
                  className="flex items-center justify-center"
                  alt="IconsAlerts"
                />
              </Button>
              <Img
                src="images/img_user_2.png"
                className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] h-[22px] 3xl:h-[23px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] ml-[49px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] w-[22px]"
                alt="user One"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] w-[100%]">
              <Column className="bg-white_A700 border-bw082 border-gray_402 border-solid items-center lg:p-[35px] xl:p-[40px] 2xl:p-[45px] p-[55px] rounded-radius164 w-[20%]">
                <Img
                  src="images/img_group.png"
                  className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] h-[30px] 3xl:h-[31px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] w-[30px]"
                  alt="Group"
                />
                <Text className="capitalize font-normal 2xl:mt-[10px] mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Multiple Choice
                </Text>
              </Column>
              <Column className="bg-white_A700 border-bw082 border-gray_402 border-solid items-center lg:p-[35px] xl:p-[40px] 2xl:p-[45px] p-[55px] rounded-radius164 w-[20%]">
                <Img
                  src="images/img_menu_blue_800.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] w-[20%]"
                  alt="menu"
                />
                <Text className="capitalize font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Single Choice
                </Text>
              </Column>
              <Column className="bg-white_A700 border-bw082 border-gray_402 border-solid items-center lg:p-[35px] xl:p-[40px] 2xl:p-[45px] p-[55px] rounded-radius164 w-[20%]">
                <Img
                  src="images/img_vector_blue_800.png"
                  className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] h-[32px] 3xl:h-[33px] mt-[4px] w-[15%]"
                  alt="Vector One"
                />
                <Text className="capitalize font-normal 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Fill in the blank
                </Text>
              </Column>
              <Column className="bg-white_A700 border-bw082 border-gray_402 border-solid items-center lg:p-[35px] xl:p-[40px] 2xl:p-[45px] p-[55px] rounded-radius1643 w-[20%]">
                <Img
                  src="images/img_menu_blue_800_24X33.png"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] h-[24px] 3xl:h-[25px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[9px] w-[21%]"
                  alt="menu One"
                />
                <Text className="capitalize font-normal xl:mt-[11px] 2xl:mt-[12px] mt-[15px] lg:mt-[9px] not-italic xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                  Open Ended
                </Text>
              </Column>
            </Row>
            <Text className="capitalize font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] mt-[30px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-black_900 w-[auto]">
              Active Assessment
            </Text>
            <Text className="font-medium mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_405 w-[auto]">
              No assessment available
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TESTLIBRARYPage;
