import React, { useState } from "react";

import { RxCaretDown, RxCaretLeft, RxCaretRight } from "react-icons/rx";
import CustomLineChartDynamic from "../../../components/Chart/LineChartDynamic";

const CompareOperators = () => {

  const Paid = () => (
    <div className="w-[65px] text-center bg-primary-light-green/10  text-primary-light-green text-xs p-1.5 rounded-2xl">
      Paid
    </div>
  );
  const Pending = () => (
    <div className="w-[65px] text-center bg-primary-yellow/30  text-primary-yellow text-xs p-1.5 rounded-2xl">
      Pending
    </div>
  );
  const statuses = {
    'Pending': <Pending />,
    'Paid': <Paid />,
  };

  const Active = () => (
    <div className='w-[80px] bg-primary-green/10  text-primary-light-green text-center text-xs p-1.5 py-1.5 rounded-2xl'>successful</div>
)

  const Inactive = () => (
    <div className='w-[80px] bg-red-200 text-red-800 text-center text-xs p-1.5 py-1.5 rounded-2xl'>failed</div>
)

const statusess =  {
    'Active' :  <Active />,
    'Inactive' : <Inactive />
}

const [selectedOperators, setSelectedOperators ]= useState(['BETKING','1XBET']);

const operatorOptions = [
  'BETKING',
  '1XBET',
  'BET NINJA',
  'BETFUSE',
  'FAST BET',
  'SURE ODDS',
]

const toggleSelectedOperator = (item) => {
  const found = selectedOperators.indexOf(item) >= 0;
  if(found){
    const res = selectedOperators.filter(operator => operator != item);
    setSelectedOperators(res);
  }else {
    setSelectedOperators(prev => [...prev, item]);
  }
}


  return (
    <>
      <div>  
        <div className="mb-7">
          <p className="text-xl font-semibold text-[#101828]" >Hi <span className="text-primary-light-green font-semibold" >Juma’ah</span> 👋, Wecome to NLRC</p>
          <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur. Ultrices turpis amet et id.</p>
        </div>
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm mb-5">
          <div className="bg-[#5F891C] text-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p>Payment Count</p>
                <p className="mt-2 text-xl font-semibold ">₦4,500,000</p>
              </div>
              <img src={property} alt="property" />
            </div>
            <div className="flex mt-8">
              <p>
                {" "}
              <span> Last Payment </span> 
                <span className="font-medium">04/12/2022</span>
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p>Amount Paid</p>
                <p className="mt-2 text-xl font-semibold text-faint-black">₦2,550,000</p>
              </div>
              <img src={resident} alt="resident" />
            </div>
            <div className="flex mt-8">
              <p className="flex items-center gap-2">
                {" "}
                <p className="flex items-center font-medium text-primary-green"> <BsArrowUp /> 40%</p> vs last month
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p>Amount Pending</p>
                <p className="mt-2 text-xl font-semibold text-faint-black">₦1,900,700</p>
              </div>
              <img src={staff} alt="staff" />
            </div>
            <div className="flex mt-8">
              <p className="flex items-center gap-2">
                {" "}
                <p className="flex items-center font-medium text-red-800"> <BsArrowDown /> 40%</p> vs last month
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p>Total Invoice</p>
                <p className="mt-2 text-xl font-semibold text-faint-black">73</p>
              </div>
              <img src={asset} alt="assets" />
            </div>
            <div className="flex mt-8">
              <p>
                {" "}
                <span className="font-medium">32</span> pending invoices
              </p>
            </div>
          </div>
        </div> */}
        <div className="grid gap-5 min-h-20">
          <div className="bg-white rounded-xl p-4 sm:p-7">
            <div className="flex items-center gap-10 justify-between mb-7">
              <p className="text-base font-medium text-faint-black">
                Performance By Operators
              </p>
              <div className="relative">
                <select  className="min-w-20 bg-gray-300 rounded-3xl p-2 px-3 pr-4 appearance-none text-sm">
                  <option value="">year</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                </select>
                <span className="absolute top-1/2 -translate-y-1/2 right-2">
                  <RxCaretDown />
                </span>
              </div>
            </div>
              <div className="mb-5 flex gap-2 w-fit overflow-hidden bg-white">
                {
                  operatorOptions.map(item => <button onClick={() => toggleSelectedOperator(item)} className={`px-3 py-2 border rounded-lg  text-sm ${ selectedOperators.indexOf(item) >= 0 && '!bg-[#1639301F] text-primary-green'}`} key={item}>{item}</button>)
                }
            </div>
            <div className="mt-20 chart-parent my-5 h-60 grid place-content-center -ml-12 mb-12">
              <CustomLineChartDynamic selected = {selectedOperators} height={300} />
            </div>
            <div className="grid grid-cols-2 sm:flex text-sm gap-y-10 sm:gap-y-0">
              
              <div className=" items-start flex px-5 border-r mr-5">
                <div className="mt-1.5 mr-2 bg-primary-green w-2 h-2 rounded-full"></div>
                <div className="">
                  <p className="text-xs opacity-70">Amount Paid</p>
                  <p className="font-medium">₦407,980</p>
                </div>
              </div>
              <div className="flex items-start pr-5 mr-5">
                <div className="mt-1.5 mr-2 bg-primary-yellow w-2 h-2 rounded-full"></div>
                <div className="">
                  <p className="text-xs opacity-70" >Invoice Issued</p>
                  <p className="font-medium">₦125,700</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* end */}
        {/* <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white rounded-xl text-sm">
            <div className="flex gap-5 justify-between items-start">
              <div className="">
                <p className="font-medium ">Top Debtors</p>
                <p className="text-[#828282]">
                  <span className="font-medium">7</span> payments due
                  </p>
              </div>
              <button className="text-xs text-primary-light-green font-medium">see all</button>
            </div>
            {checkin.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fdfdfd] mt-3 text-[13px] flex justify-between items-center p-3 px-2 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="fire" />
                  <div>
                    <p className="font-medium text-faint-black mb-1">
                      {'Debtor Name'}
                    </p>
                    <p>Due on 02/09/2023</p>
                  </div>
                </div>
                <div>
                  <p className="text-right font-medium">{'₦70,000'}</p>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
                Manage checkins
              </button>
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl text-sm">
            <div className="flex gap-5 justify-between items-start">
              <div className="">
                <p className="font-medium ">Top Performing Operators</p>
                <p className="text-[#828282]">
                  <span className="font-medium">5</span> Operators
                  </p>
              </div>
              <button className="text-xs text-primary-light-green font-medium">see all</button>
            </div>
            {checkin.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fdfdfd] mt-3 text-[13px] flex justify-between items-center p-3 px-2 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="fire" />
                  <div>
                    <p className="font-medium text-faint-black mb-1">
                      {item.name}
                    </p>
                    <p>2% performance ratio</p>
                  </div>
                </div>
                <div>
                  <p className="text-right font-medium">{'₦70,000'}</p>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
                Manage checkins
              </button>
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl text-sm">
            <div className="flex gap-5 justify-between items-start">
              <div className="">
                <p className="font-medium ">Least Performing Operators</p>
                <p className="text-[#828282]">
                  <span className="font-medium">5</span> Operators
                  </p>
              </div>
              <button className="text-xs text-primary-light-green font-medium">see all</button>
            </div>
            {checkin.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fdfdfd] mt-3 text-[13px] flex justify-between items-center p-3 px-2 rounded-lg border"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="fire" />
                  <div>
                    <p className="font-medium text-faint-black mb-1">
                      {item.name}
                    </p>
                    <p>2% performance ratio</p>
                  </div>
                </div>
                <div>
                  <p className="text-right font-medium">{'₦70,000'}</p>
                </div>
              </div>
            ))}
            <div className="mt-5">
              <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
                Manage checkins
              </button>
            </div>
          </div>
        
        </div> */}
      </div>
    </>
  );
};

export default CompareOperators;
