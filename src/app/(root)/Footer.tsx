import React from 'react';


const Footer = () => {
  return (
    <div className="home mx-auto container ">
      {/*footer*/}
      <footer className="flex  flex-col tablet:flex-row py-4 footer ">
        {/*links*/}
        <div className="w-full flex flex-row gap-x-4 pl-8  ">
          {/*1*/}
          <div className=" flex flex-col laptop:flex-row w-1/2 gap-y-8">
            <div className="flex flex-col gap-y-8  tablet:flex-row w-full">
              {/*Products*/}
              <div className="flex flex-col w-full tablet:w-1/2  ">
                <h6 className="text-black text-base  opacity-50 mb-2">Products</h6>
                <ul className="gap-y-2 flex flex-col justify-start text-base ">
                  <li >Godly</li>
                  <li >Rejiggle</li>
                </ul>
              </div>
              {/*Use cases*/}
              <div className="flex flex-col w-full tablet:w-1/2  ">
                <h6 className="text-black text-base bold opacity-50 mb-2">Use cases</h6>
                <ul className="gap-y-2 flex flex-col text-base   ">
                  <li >SaaS</li>
                  <li >Platforms</li>
                  <li >Marketplaces</li>
                  <li >E-commerce</li>
                </ul>
              </div>
            </div>
            {/*Resources*/}
            <div className="flex flex-col w-full tablet:w-1/2 ">
              <h6 className="text-black text-base bold opacity-50 mb-2">Resources</h6>
              <ul className="gap-y-2 flex flex-col text-base bold  ">
                <li >Support</li>
                <li >Contacts</li>
                <li >Guides</li>
                <li >Privacy</li>
                <li >Trams</li>
              </ul>
            </div>
          </div>
          {/*2*/}
          <div className=" flex flex-col tablet:flex-row w-1/2 gap-y-8">
            {/*Developers*/}
            <div className="w-full tablet:w-1/2">
              <h6 className="text-black text-base bold opacity-50 mb-2">Developers</h6>
              <ul className="gap-y-2 flex flex-col text-base bold  ">
                <li >Documentation</li>
                <li >API reference</li>
                <li >Status</li>
              </ul>
            </div>
            {/*Company*/}
            <div className="w-full tablet:w-1/2">
              <h6 className="text-black text-base bold opacity-50 mb-2">Company</h6>
              <ul className="gap-y-2 flex flex-col text-base bold  ">
                <li >About</li>
                <li >Customers</li>
                <li >Partners</li>
                <li >Jobs</li>
                <li >Blog</li>
              </ul>
            </div>
          </div>
        </div>
        {/*buttons*/}
        <div className="mt-6 pr-0 tablet:pr-8">
          <button className="w-full rounded-[10px] py-2  medium text-[18px]  mb-4 border btn ">Test LinkedIn</button>
          <button className="w-full rounded-[10px]    text-[18px] py-2  border ">Test social</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
