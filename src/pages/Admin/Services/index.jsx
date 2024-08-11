import React, { useState } from "react";
import property from "../../../assets/images/wallet-icon.png";
import resident from "../../../assets/images/residents.png";
import staff from "../../../assets/images/staff.png";
import asset from "../../../assets/images/asset.png";

import jide from "../../../assets/images/jide.png";
import CustomLineChart from "../../../components/Chart/LineChart";
import download from '../../../assets/images/download.svg';
import Input from '../../../components/Inputs'

import { RxCaretDown, RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FiEye } from "react-icons/fi";
import Select from "../../../components/Inputs/Select";
import { BiFolder, BiSearch } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

const Services = () => {


  const Active = () => (
    <div className='w-[80px] bg-primary-green/10  text-primary-light-green text-center text-xs p-1.5 py-1.5 rounded-2xl'>active</div>
)

  const Inactive = () => (
    <div className='w-[80px] bg-red-200 text-red-800 text-center text-xs p-1.5 py-1.5 rounded-2xl'>inactive</div>
)

const statusess =  {
    'Active' :  <Active />,
    'Inactive' : <Inactive />
}

const [activeTab, setActiveTab] = useState(0);

const table_header_a = [
    'Operator ID',
    'Service Name',
    'Amount',
    'Added Date',
    'Validity Period',
    'Status',
    ''
]

// const serviceOptions = [
//     { label:'SALE OF GOVERNMENT ASSETS', value:null},
//     { label:'PROMOTIONAL FEE', value:null},
//     { label:'VIOLATION FEE', value:null},
//     { label:'REGULARISATIN FEE', value:null},
//     { label:'APPROVAL IN PRINCIPLE FEE', value:null},
//     { label:'TENDER FEE', value:null},
//     { label:'ANNUAL SUBSCRIPTION FEE', value:null},
//     { label:'LICENCES FEE', value:null},
//     { label:'REFUND', value:null},
// ]

const table_data_a = [
     
    {
        invoice_no: '#1838942022',
        service: 'SALE OF GOVERNMENT ASSETS',
        period: '1 YEAR',
        date: 'Aug 12, 2024',
        amount: '₦200,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'PROMOTIONAL FEE',
        period: '6 MONTHS',
        date: 'Aug 12, 2024',
        amount: '₦55,000',
        status: 'Inactive',
    },
    {
        invoice_no: '#1838942022',
        service: 'VIOLATION FEE',
        period: '1 YEAR',
        date: 'Aug 12, 2024',
        amount: '₦200,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'REGULARISATIN FEE',
        period: 'UNLIMITED',
        date: 'Jan 01, 2000',
        amount: '₦1,000,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'APPROVAL IN PRINCIPLE FEE',
        period: '1 YEAR',
        date: 'Aug 12, 2024',
        amount: '₦200,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'TENDER FEE',
        period: 'UNLIMITED',
        date: 'Jan 01, 2000',
        amount: '₦1,000,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'ANNUAL SUBSCRIPTION FEE',
        period: '1 YEAR',
        date: 'Aug 12, 2024',
        amount: '₦200,000',
        status: 'Active',
    },
    {
        invoice_no: '#1838942022',
        service: 'REFUND',
        period: 'UNLIMITED',
        date: 'Jan 01, 2000',
        amount: '₦1,000,000',
        status: 'Active',
    },
]  



  return (
    <>
      <div>  
        <div className="mb-7">
          <p className="text-xl font-semibold text-[#101828]" >Hi <span className="text-primary-light-green font-semibold" >Juma’ah</span> 👋, Wecome to NLRC</p>
          <p className="text-xs mt-1">Lorem ipsum dolor sit amet consectetur. Ultrices turpis amet et id.</p>
        </div>

      
        {/* Table */}
        <div className="bg-white rounded-xl p-5 mt-5">
              <div className="text-sm flex  flex-col gap-4 justify-between ">
                  <div className="w-full flex items-center gap-10 justify-between">
                  <p className="font-medium text-base">Services</p>
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
                                      <td className={`leading-[2rem] flex items-center gap-2 py-5 pl-3 ${idx == 0 && 'pt-7'}`}>
                                      {/* <img className="w-7" src={download} alt="download icon" /> */}
                                      {item.invoice_no}
                                      </td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.service}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.amount}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.date}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{item.period}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>{statusess[item.status]}</td>
                                      <td className={`py-5 ${idx == 0 && 'pt-7'}`}>
                                          <button className='bg-primary-light-green/5 text-primary-light-green font-semibold p-2 rounded-3xl text-xs text-center flex items-center gap-1'>
                                              <FaEye size={15} />
                                              <span>View Details</span>
                                          </button>
                                      </td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>  
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

export default Services;
