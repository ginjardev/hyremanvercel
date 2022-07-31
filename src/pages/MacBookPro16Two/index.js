import React from "react";

import { Row, Column, Img, Text } from "components";

const MacBookPro16TwoPage = () => {
  return (
    <>
      <Row className="bg-gray_200 font-poppins mx-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] pr-[24px] w-[100%]">
        <aside className="items-center w-[17%]">
          <Column className="">
            <Column className="bg-black_900 lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px] w-[100%]">
              <Img
                src="images/img_group100000430.png"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[38px] h-[45px] 3xl:h-[46px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] ml-[9px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] mt-[23px] w-[70%]"
                alt="Group100000430"
              />
              <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_mail.png"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] h-[18px] 3xl:h-[19px] w-[9%]"
                  alt="mail"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Jobs
                </Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] ml-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] mt-[44px] rounded-radius5 w-[84%]">
                <Img
                  src="images/img_user_bluegray_100.png"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[14px] 3xl:h-[15px] w-[9%]"
                  alt="user"
                />
                <Text className="capitalize font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] ml-[22px] xl:text-[10px] 2xl:text-[11px] text-[14px] lg:text-[9px] text-white_A700 w-[auto]">
                  Candidates
                </Text>
              </Row>
              <Row className="items-center justify-end lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] mb-[38px] ml-[auto] lg:mt-[536px] xl:mt-[613px] 2xl:mt-[689px] mt-[827px] rounded-radius5 w-[95%]">
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
        <div className="bg-white_A700 lg:h-[47px] xl:h-[53px] 2xl:h-[60px] h-[71px] 3xl:h-[72px] mb-[1017px] lg:mb-[659px] xl:mb-[753px] 2xl:mb-[848px] xl:ml-[11px] 2xl:ml-[12px] ml-[15px] lg:ml-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] mt-[29px] w-[82%]"></div>
      </Row>
    </>
  );
};

export default MacBookPro16TwoPage;
