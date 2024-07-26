import React, { useState } from "react";
import property from "../../assets/images/wallet-icon.png";
import resident from "../../assets/images/residents.png";
import staff from "../../assets/images/staff.png";
import asset from "../../assets/images/asset.png";
import send from "../../assets/images/send.svg";
import colony from "../../assets/images/friends_colony.png";
import transfer from "../../assets/images/transfer.png";
import approve from "../../assets/images/approve.png";
import fire from "../../assets/images/fire.png";
import jide from "../../assets/images/jide.png";
import CustomLineChart from "../../components/Chart/LineChart";
import download from '../../assets/images/download.svg';
import Input from '../../components/Inputs'
import AdminLayout from '../../layouts/AdminLayout'

import { RxCaretDown, RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FiEye } from "react-icons/fi";
import Select from "../../components/Inputs/Select";
import { BiFolder, BiSearch } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Dashboard = () => {

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

  const emergencies = [
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 1,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
  ];
  const services = [
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 1,
      time: "09:20am",
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
  ];
  const checkin = [
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Resident",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
  ];
  const invoices = [
    {
        title:'Invoice Title',
        amount:'₦250,000',
        date:'12/09/2023',
    },
    {
        title:'Invoice Title',
        amount:'₦250,000',
        date:'12/09/2023',
    },
    {
        title:'Invoice Title',
        amount:'₦250,000',
        date:'12/09/2023',
    },
    {
        title:'Invoice Title',
        amount:'₦250,000',
        date:'12/09/2023',
    },
  ]

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

const [activeTab, setActiveTab] = useState(0);

const table_header_a = [
    'Invoice Number',
    'Amount',
    'Operator',
    'Service',
    'Date',
    'Status',
    ''
]
const table_data_a = [
     
    {
        invoice_no: 'Invoice #1838942022',
        amount: '₦320,057',
        operator: 'Operator name',
        service: 'Service name',
        date: '15/5/2024 ',
        status: 'Active',
    },
     
    {
        invoice_no: 'Invoice #1838942022',
        amount: '₦320,057',
        operator: 'Operator name',
        service: 'Service name',
        date: '15/5/2024 ',
        status: 'Inactive',
    },
     
    {
        invoice_no: 'Invoice #1838942022',
        amount: '₦320,057',
        operator: 'Operator name',
        service: 'Service name',
        date: '15/5/2024 ',
        status: 'Active',
    },
    {
        invoice_no: 'Invoice #1838942022',
        amount: '₦320,057',
        operator: 'Operator name',
        service: 'Service name',
        date: '15/5/2024 ',
        status: 'Active',
    },
    {
        invoice_no: 'Invoice #1838942022',
        amount: '₦320,057',
        operator: 'Operator name',
        service: 'Service name',
        date: '15/5/2024 ',
        status: 'Inactive',
    },

]  
const table_header_b = [
    'Invoice Title',
    'Transaction Ref.',
    'Amount',
    'Date issued', 
    'Due Date', 
    'Status', 
    ''
]
const table_data_b = [
    {
        ref:'148AGI6GH1',
        amount:'₦2,300',
        title:'Sample Invoice Title',
        issue:'09 Feb 2032',
        due:'09 Feb 2032',
        status:'Paid'
    },
    {
        ref:'148AGI6GH1',
        amount:'₦2,300',
        title:'Sample Invoice Title',
        issue:'09 Feb 2032',
        due:'09 Feb 2032',
        status:'Pending'
    },
    {
        ref:'148AGI6GH1',
        amount:'₦2,300',
        title:'Sample Invoice Title',
        issue:'09 Feb 2032',
        due:'09 Feb 2032',
        status:'Pending'
    },
    {
        ref:'148AGI6GH1',
        amount:'₦2,300',
        title:'Sample Invoice Title',
        issue:'09 Feb 2032',
        due:'09 Feb 2032',
        status:'Paid'
    },
    {
        ref:'148AGI6GH1',
        amount:'₦2,300',
        title:'Sample Invoice Title',
        issue:'09 Feb 2032',
        due:'09 Feb 2032',
        status:'Paid'
    },

]


  return (
    <>
      <div>  
        <div className="mb-7">
          <p className="text-xl font-semibold text-[#101828]" >Hi <span className="text-primary-light-green font-semibold" >Juma’ah</span> 👋, Wecome to NLRC</p>
          <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur. Ultrices turpis amet et id.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm mb-5">
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
        </div>
        <div className="grid gap-5 min-h-20">
          <div className="bg-white rounded-xl p-4 sm:p-7">
            <div className="flex items-center gap-10 justify-between mb-12">
              <p className="text-base font-medium text-faint-black">
                Payment against invoices
              </p>
              <div className="relative">
                <select className="min-w-20 bg-gray-300 rounded-3xl p-2 px-3 pr-4 appearance-none text-sm">
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
            <div className="chart-parent my-5 h-60 grid place-content-center -ml-12 mb-12">
              <CustomLineChart height={300} />
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
          {/* <div className="p-5 bg-white rounded-xl text-sm">
            <div className="flex gap-5 justify-between items-start">
              <div className="">
                <p className="font-medium ">Pending Invoices</p>
                <p className="text-[#828282]">
                  <span className="font-medium">5</span> pending invoices
                </p>
              </div>
              <button className="text-xs">see all</button>
            </div>
            <div className="mt-10">
                  {invoices.map((item, idx) => (
                  <div
                      key={idx}
                      className="bg-[#fdfdfd] mt-3 text-sm flex justify-between items-center p-3 rounded-lg border"
                  >
                      <div className="text-xs">
                      <p className="mb-1 text-sm font-medium">{item.title}</p>
                      <div className="flex items-center gap-2" >
                          <p className="font-medium text-faint-black"> 
                          {item.amount}
                          </p><span> | </span>
                          <p>{item.date}</p>
                      </div>
                      </div>
                      <div>
                      <button className="text-xs text-primary font-medium  bg-primary/10 px-2 py-2 rounded-xl" >Make Payment</button>
                      </div>
                  </div>
                  ))}
            </div>
          </div> */}
        </div>
      
        {/* end */}
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
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
        
        </div>
        {/* Table */}
        <div className="bg-white rounded-xl p-5 mt-5">
              <div className="text-sm flex  flex-col gap-4 justify-between ">
                  <div className="w-full flex items-center gap-10 justify-between">
                  <p className="font-medium text-base">Recent Transactions</p>
                      {/* <div className="flex p-1 items-center rounded-[28px] bg-[#f1f1f1]">
                          {
                              ['All Transactions','All Invoices'].map((item,idx) => (
                              <button onClick={() => setActiveTab(idx)} 
                                  className={` px-5 py-2 rounded-3xl  ${activeTab == idx && 'text-white bg-primary-light-green'}`}>
                                  {item}
                              </button>
                              ))
                          }
                      </div> */}
                  </div>
                  <div className="mt-3 flex gap-3">
                    <div className="relative">
                      <Input placeholder={'search transactions operator etc'} className={'rounded-[30px] pl-10'} />
                      <BiSearch size={18} className="absolute left-3 top-[55%] -translate-y-1/2" />
                    </div>
                    {/* <Select className={'rounded-3xl min-w-[100px]'} options={[{label:"Select Teyp",value:0}]} /> */}
                    <Input type={'date'} className={'rounded-3xl min-w-[100px]'} options={[{label:"Select Teyp",value:0}]} />
                  </div>
              </div>
              <div className="max-w-[calc(100vw-67px)] sm:max-w-[unset] overflow-x-auto !text-sm w-full mt-7">
              {activeTab == 0 ?  
                  <table className='w-full table-auto min-w-[800px] sm:min-w-[unset]'>
                      <thead className='bg-[#f7f7f7]'>
                          <tr>
                              {
                                  table_header_a.map((item, idx) => (
                                      <td className={`py-2 ${idx ==0 && 'pl-3'}`} key={idx}>{item}</td>
                                  ))
                              }
                          </tr>
                      </thead>
                      <tbody className='pt-5 mt-5 text-[13px]'>
                          {
                              table_data_a.map((item, idx) => (
                                  <tr className={`mt-5 pt-5 ${idx !== table_data_a.length - 1 && 'border-b'}`} key={idx}>
                                      <td className={`flex items-center gap-2 py-5 ${idx == 0 && 'pt-7'}`}>
                                      <img className="w-7" src={download} alt="download icon" />
                                      {item.invoice_no}
                                      </td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.amount}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.operator}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.service}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.date}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{statusess[item.status]}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>
                                          <button className='bg-primary-light-green/5 text-primary-light-green font-semibold p-2 rounded-3xl text-xs text-center flex items-center gap-1'>
                                              <BiFolder size={15} />
                                              <span>Download File</span>
                                          </button>
                                      </td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table> :
                  <table className='w-full table-auto min-w-[800px] sm:min-w-[unset]'>
                      <thead className='bg-[#f7f7f7]'>
                          <tr>
                              {
                                  table_header_b.map((item, idx) => (
                                      <td className='py-2' key={idx}>{item}</td>
                                  ))
                              }
                          </tr>
                      </thead>
                      <tbody className='pt-5 mt-5 text-[13px]'>
                          {
                              table_data_b.map((item, idx) => (
                                  <tr className={`mt-5 pt-5 ${idx !== table_data_b.length - 1 && 'border-b'}`} key={idx}>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.title}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.ref}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.amount}</td> 
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.issue}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.due}</td> 
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{statuses[item.status]}</td> 
                                      {/* <td className={`py-5 ${idx == 0 && 'pt-7'}`}>
                                          <div className=' text-center'>
                                              <FiEye  size={18}/>
                                          </div>
                                      </td> */}
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>}
              </div>
              <div className="mt-5 text-sm">
                  <div className="flex flex-col sm:flex-row items-center gap-10 justify-between">
                      <div className="flex items-center gap-5">
                          <div className="flex items-center gap-2">
                              <p>Rows per page</p>
                              <Select className={'!w-[50px] !px-2 !py-1 !rounded-md '} options={[{ label: '10', value: '10' }]} />
                          </div>
                          <p>10 of 320</p>
                      </div>
                      <div className="flex items-center gap-">
                          <RxCaretLeft size={20} />
                          <span>Prev</span>
                          <div className="flex items-center gap-3 mx-5">
                              <button>1</button>
                              <button className='inline-block px-2 py-1 bg-primary-gray/30 rounded-md'>2</button>
                              <button>3</button>
                          </div>
                          <span>Next</span>
                          <RxCaretRight size={20} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
