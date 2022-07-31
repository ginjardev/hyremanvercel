import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const AboutpagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] lg:p-[42px] xl:p-[48px] 2xl:p-[54px] p-[65px] w-[100%]">
        <Row className="w-[86%]">
          <Img
            src="images/img_group100000430_blue_800.png"
            className="lg:h-[43px] xl:h-[49px] 2xl:h-[55px] h-[65px] 3xl:h-[66px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[8px] w-[19%]"
            alt="Group100000430"
          />
          <Text className="font-medium lg:mb-[20px] xl:mb-[22px] 2xl:mb-[25px] mb-[31px] lg:ml-[577px] xl:ml-[660px] 2xl:ml-[743px] ml-[891px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] mt-[18px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-gray_901 w-[auto]">
            About
          </Text>
          <Button
            className="capitalize font-medium 2xl:mb-[10px] mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] ml-[58px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[9%]"
            shape="RoundedBorder10"
            size="xl"
            variant="FillGray901"
          >
            Register
          </Button>
        </Row>
        <Row className="lg:mb-[32px] xl:mb-[37px] 2xl:mb-[41px] mb-[50px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] mt-[21px] w-[87%]">
          <Column className="lg:mb-[160px] xl:mb-[183px] 2xl:mb-[205px] mb-[247px] 2xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:pr-[44px] xl:pr-[50px] 2xl:pr-[56px] pr-[68px] w-[34%]">
            <Text className="font-bold lg:text-[32px] xl:text-[37px] 2xl:text-[41px] text-[50px] text-black_900 w-[auto]">
              About
            </Text>
            <Text className="font-normal leading-[normal] not-italic xl:text-[11px] 2xl:text-[12px] text-[15px] lg:text-[9px] text-black_900 w-[94%]">
              There is a significant unemployment gap in Africa. Most job
              seekers are easily conned by elusive recruiters in their state of
              desperation, all in the name of getting them a job.
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic xl:text-[11px] 2xl:text-[12px] text-[15px] lg:text-[9px] text-black_900 w-[94%]">
              The individuals who are most qualified for these positions go
              unnoticed because around 70% of the jobs in Africa are not
              publicized. In the majority of businesses, this leaves a big gap
              for unfilled roles.
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic xl:text-[11px] 2xl:text-[12px] text-[15px] lg:text-[9px] text-black_900 w-[94%]">
              Our goal at Hyreman is to conveniently and without charge connect
              candidates with recruiters' requirements. Hyreman aims to reduce
              the employment gap by making it simple for candidates and
              employers to connect.
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] mt-[16px] not-italic xl:text-[11px] 2xl:text-[12px] text-[15px] lg:text-[9px] text-black_900 w-[85%]">
              Want to be matched to a recruiter? Register and be part
            </Text>
            <Button
              className="capitalize font-medium lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] mt-[56px] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] text-[16px] text-center w-[100%]"
              shape="RoundedBorder10"
              size="xl"
              variant="FillGray901"
            >
              Register
            </Button>
          </Column>
          <Column className="w-[66%]">
            <Img
              src="images/img_pexelsphotoby.png"
              className="lg:h-[397px] xl:h-[454px] 2xl:h-[511px] h-[612px] 3xl:h-[613px] rounded-radius10 w-[100%]"
              alt="PexelsPhotoby"
            />
            <Text className="font-normal lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] ml-[90px] lg:mr-[364px] xl:mr-[417px] 2xl:mr-[469px] mr-[563px] lg:mt-[130px] xl:mt-[149px] 2xl:mt-[167px] mt-[201px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[20px] text-gray_901 w-[auto]">
              Copyright Hyreman © 2022
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AboutpagePage;
