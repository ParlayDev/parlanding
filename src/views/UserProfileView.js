import React from "react";

import CarouselComp from "../components/sections/CarouselComp.js";
import TabsRender from "../components/sections/TabsRender.js";
import SideNavBar from "../components/sections/SideNavBar.js";
import Test from "../components/sections/Test.js";
import { Content2Xl } from "../layouts/Layouts.js";
import { useState } from "react";

const UserProfileView = () => {
  return (
    <div tw="flex">
      <div className="shadow" tw="flex w-48">
        <SideNavBar />
      </div>

      <div tw="flex flex-col mx-auto">
        <Content2Xl>
          <CarouselComp />
          <TabsRender />
        </Content2Xl>
      </div>
    </div>
  );
};

export default UserProfileView;
