"use client";
import React, { useEffect, useState } from "react";
import TopBar from "../components/left/LeftBar";
import CvHandler from "../components/center/CvHandler";
import TemplateCarousel from "../components/right/TemplateCarousel";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import BottomBar from "../components/BottomBar";
import ComponentHandler from "../components/ComponentHandler";

const ResumePage = () => {


    return (
        <>

                <div className="hidden sm:grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-6 lg:gap-4 h-full ">
                    <div className=" hidden lg:block lg:col-span-2 xl:col-span-2 2xl:col-span-3 shadow-2xl overflow-auto scrollbar-hide">
                        <TopBar />
                    </div>
                    <div className="hidden lg:flex 2xl:col-span-4 lg:col-span-3 xl:col-span-4 overflow-auto scrollbar-hide text-white ">
                        
                        <CvHandler />
                    </div>
                    <div className="hidden lg:block col-span-1 overflow-auto scrollbar-hide lg:shadow-2xl ">
                        <TemplateCarousel />
                    </div>
                </div>
                <div className="lg:hidden  h-full">
                    <div className="">
                        <ComponentHandler />
                    </div> 
                    <div className="sticky bottom-0 z-50 ">
                        <BottomBar />
                    </div>
                </div>
        </>
    );
};

export default ResumePage;
