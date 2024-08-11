import React, { useEffect, useState } from "react";
import { VscBell } from "react-icons/vsc";
import admin from "../assets/images/admin.png";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi2";
import colony from "../assets/images/friends_colony.png";
import { IoLogOut } from "react-icons/io5";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
import { CiRollingSuitcase, CiSettings } from "react-icons/ci";
import { PiArrowElbowDownRightThin } from "react-icons/pi";
import logo from '../assets/images/nlc-logo.png';

// import LoadingModal from "../components/Loader/LoadingModal";
import {
  REMOVE_FROM_LOCALSTORAGE,
  errorToast,
  successToast,
} from "../utils/Helper";
import customToastComponent from "../components/Toast/customToast";

const DashboardLayout = () => {
  const settingsTabs = [
    {
      name: "Your profile",
      link: "/settings/profile",
      id: "profile",
    },
    {
      name: "Add Account",
      link: "/settings/add-account",
      id: "add-account",
    },
    {
      name: "Payment workflow",
      link: "/settings/payment-workflow",
      id: "payment-workflow",
    },
  ];

  const isLoading = false;
  const token = window.localStorage.getItem("token");
  const community_obj = JSON.parse(localStorage.getItem("community"));
  const communityId = community_obj?.id;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [activeCommunity, setActiveCommunity] = useState(() =>
    communities.find((item) => item.id == communityId)
  );

  const [activeTab, setActiveTab] = useState(0);
  const [activeSetting, setActiveSetting] = useState(0);
  const [activeTabItem, setActiveTabItem] = useState(null);
  const [activeChildren, setActiveChildren] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const toggleOpenSidebar = () => setSidebarOpen(!sidebarOpen);

  const authUserPermissions = [
    "view_dashboard",
    "manage_community",
    "view_community",
    "manage_collection",
    "view_service_charge",
    "view_invoice",
    "manage_staff",
    "manage_assets",
    "manage_security",
    "view_security",
    "manage_emergency",
    "view_emergency",
    "manage_maintenance",
    "view_work_order",
    "manage_assets",
    "view_residents_payments",
  ];

  function filterItemsByPermissions(items, permissions) {
    return items.filter((item) => {
      if (!item.permission || permissions.includes(item.permission)) {
        // If item has no permission or the user has the required permission, include it
        if (item.children) {
          // If item has children, filter them recursively
          item.children = filterItemsByPermissions(item.children, permissions);
        }
        return true;
      }
      return false;
    });
  }

  const logout = () => {
    REMOVE_FROM_LOCALSTORAGE("token");
    REMOVE_FROM_LOCALSTORAGE("refreshToken");
    REMOVE_FROM_LOCALSTORAGE("user");
    REMOVE_FROM_LOCALSTORAGE("partner");
    REMOVE_FROM_LOCALSTORAGE("community");
    REMOVE_FROM_LOCALSTORAGE("partner_staff_id");
    navigate("/");
  };

  const adminModules = [
    {
      name: "Users",
      route: "#",
      icon: <RxDashboard />,
      identifier: "users",
      permission: "view_dashboard",
      idx:3,
    },
    {
      name: "Operators",
      route: "#",
      icon: <RxDashboard />,
      identifier: "operators",
      permission: "view_dashboard",
      idx:4,
    },
    {
      name: "Services",
      route: "#",
      icon: <RxDashboard />,
      identifier: "services",
      permission: "view_dashboard",
      idx:5,
    },
  ]

  const reportModules = [
    {
      name: "Trnx. by Operators",
      route: "/report",
      icon: <CiRollingSuitcase size={20} />,
      identifier: "report",
      permission: "view_dashboard",
      idx:1,
    },
    {
      name: "All Transactions",
      route: "/transactions",
      icon: <HiOutlineLightBulb size={17} />,
      identifier: "transactions",
      permission: "view_dashboard",
      idx:2,
    },
  ]

  const dashboardItems = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: <RxDashboard />,
      identifier: "/dashboard",
      permission: "view_dashboard",
      idx:0,
    },

  ]

  const filteredDashboardItems = filterItemsByPermissions(
    dashboardItems,
    authUserPermissions
  );

  const handleNavigate = (idx) => {
    setActiveTab(idx);

    if (activeChildren == idx) setActiveChildren(-1);
    else setActiveChildren(idx);
  };

  const truncateText = (description, maxLength = 17) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + "...";
    }
  };

  const user = JSON.parse(window.localStorage.getItem("user"));
  const partner = JSON.parse(window.localStorage.getItem("partner"));

  useEffect(() => {
    const active_item = window.location.pathname.split("/")[1];
    console.log(active_item);

    setActiveLink(active_item);
    filteredDashboardItems.map((item) => {
      if (item.identifier === active_item) {
        setActiveChildren(item.idx);
        setActiveTab(item.idx);
      }
    });

    adminModules.map((item) => {
      if (item.identifier === active_item) {
        setActiveChildren(item.idx);
        setActiveTab(item.idx);
      }
    });

    reportModules.map((item) => {
      if (item.identifier === active_item) {
        setActiveChildren(item.idx);
        setActiveTab(item.idx);
      }
    });

  }, [window.location.pathname]);

    return (
      <div className="flex h-screen bg-dashboard-bg overflow-x-hidden">
        <aside
          className={`w-0 duration-300 ease-in-out overflow-hidden xl:w-[250px] h-full bg-white  p-5 px-0 xl:px-4 pt-8 flex flex-col 
        ${sidebarOpen ? "!min-w-[250px] !px-4" : "min-w-0"} `}
        >
          <div className="relative z-10">
            <img className="size-16" src={logo} alt="logo" />
          </div>
          <div className="mt-16 text-[13px] relative z-0">
            {filteredDashboardItems.map((item) => (
              <div key={item.idx}>
                <div
                  onClick={() => handleNavigate(item.idx)}
                  className={`mb-3 cursor-pointer py-2.5 px-4 rounded-3xl flex items-center justify-between gap-2 ${
                    activeTab == item.idx &&
                    "bg-[#1639301F] text-primary-green font-medium"
                  }`}
                >
                  <button
                    onClick={
                      item.children || !item.route
                        ? null
                        : () => navigate(item.route)
                    }
                    key={item.idx}
                    className={`whitespace-nowrap text-left w-full  flex items-center gap-3 `}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                  {item.children?.length ? <RxCaretDown size={20} /> : null}
                            
                </div>
                {/* // ${item.children?.length && activeChildren != idx && '-mt-4'} */}
                {/* <div
                  className={`flex flex-col 
                    ${item.children?.length && activeChildren == idx && "mb-5"}
                    `}
                >
                  {activeChildren == idx &&
                    item.children &&
                    item.children?.map((child, id) => (
                      <div key={id} className="mb-5">
                        <button
                          key={id}
                          className={`relative ml-6  flex gap-2 
                            ${id == 0 && ""} ${id == child.length - 1 && "mb-5"}
                            ${
                              activeTabItem?.identifier == child?.identifier
                                ? "font-medium"
                                : "font-light"
                            }`}
                        >
                          <span className="absolute -bottom-1.5 left-[1px] inline-block -ml-[5px] -mt-[3px]">
                            <PiArrowElbowDownRightThin size={18} color="gray" />
                          </span>
                          <span
                            className="pl-5 -mb-2 inline-block"
                            onClick={() => {
                              navigate(child.route);
                              setActiveTabItem(child);
                            }}
                          >
                            {" "}
                            {child.name}
                          </span>
                        </button>
                      </div>
                    ))}
                </div> */}
              </div>
            ))}
          </div>
          {/* Reporting module */}
          <div className="mt-4 text-[13px] ">
            <span className="text-base text-faint_black pl-2">Reporting Module</span>
            <div className="relative z-0 mt-5">
              {reportModules.map((item) => (
                <div key={item.idx}>
                  <div
                    onClick={() => handleNavigate(item.idx)}
                    className={`mb-3 cursor-pointer py-2.5 px-4 rounded-3xl flex items-center justify-between gap-2 
                      ${  activeTab == item.idx && "bg-[#1639301F] text-primary-green font-medium"  }
                      `
                    }
                    >
                    <button
                      onClick={
                        item.children || !item.route
                          ? null
                          : () => navigate(item.route)
                      }
                      key={item}
                      className={`whitespace-nowrap text-left w-full  flex items-center gap-3 `}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                    {item.children?.length ? <RxCaretDown size={20} /> : null}
                              
                  </div>
                  {/* // ${item.children?.length && activeChildren != idx && '-mt-4'} */}
                  {/* <div
                    className={`flex flex-col 
                      ${item.children?.length && activeChildren == idx && "mb-5"}
                      `}
                  >
                    {activeChildren == idx &&
                      item.children &&
                      item.children?.map((child, id) => (
                        <div key={id} className="mb-5">
                          <button
                            key={id}
                            className={`relative ml-6  flex gap-2 
                              ${id == 0 && ""} ${id == child.length - 1 && "mb-5"}
                              ${
                                activeTabItem?.identifier == child?.identifier
                                  ? "font-medium"
                                  : "font-light"
                              }`}
                          >
                            <span className="absolute -bottom-1.5 left-[1px] inline-block -ml-[5px] -mt-[3px]">
                              <PiArrowElbowDownRightThin size={18} color="gray" />
                            </span>
                            <span
                              className="pl-5 -mb-2 inline-block"
                              onClick={() => {
                                navigate(child.route);
                                setActiveTabItem(child);
                              }}
                            >
                              {" "}
                              {child.name}
                            </span>
                          </button>
                        </div>
                      ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          {/* Admin module */}
          <div className="mt-4 text-[13px] ">
            <span className="text-base text-faint_black pl-2">Administrative Module</span>
            <div className="relative z-0 mt-5">
              {adminModules.map((item) => (
                <div key={item.idx}>
                  <div
                    onClick={() => handleNavigate(item.idx)}
                    className={`mb-3 cursor-pointer py-2.5 px-4 rounded-3xl flex items-center justify-between gap-2 
                      `
                      // ${  activeTab == item.idx && "bg-[#1639301F] text-primary-green font-medium"  }
                    }
                    >
                    <button
                      onClick={
                        item.children || !item.route
                          ? null
                          : () => navigate(item.route)
                      }
                      key={item.idx}
                      className={`whitespace-nowrap text-left w-full  flex items-center gap-3 `}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                    {item.children?.length ? <RxCaretDown size={20} /> : null}
                              
                  </div>
                  {/* // ${item.children?.length && activeChildren != idx && '-mt-4'} */}
                  {/* <div
                    className={`flex flex-col 
                      ${item.children?.length && activeChildren == idx && "mb-5"}
                      `}
                  >
                    {activeChildren == idx &&
                      item.children &&
                      item.children?.map((child, id) => (
                        <div key={id} className="mb-5">
                          <button
                            key={id}
                            className={`relative ml-6  flex gap-2 
                              ${id == 0 && ""} ${id == child.length - 1 && "mb-5"}
                              ${
                                activeTabItem?.identifier == child?.identifier
                                  ? "font-medium"
                                  : "font-light"
                              }`}
                          >
                            <span className="absolute -bottom-1.5 left-[1px] inline-block -ml-[5px] -mt-[3px]">
                              <PiArrowElbowDownRightThin size={18} color="gray" />
                            </span>
                            <span
                              className="pl-5 -mb-2 inline-block"
                              onClick={() => {
                                navigate(child.route);
                                setActiveTabItem(child);
                              }}
                            >
                              {" "}
                              {child.name}
                            </span>
                          </button>
                        </div>
                      ))}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            {/* <button
              onClick={logout}
              className={`text-sm mt-auto text-left w-full mb-2 py-2.5 px-5 rounded-3xl flex items-center gap-3`}
            >
              <span>
                <CiSettings size={20} className="" />
              </span>
              <span>Settings</span>
            </button> */}
            <button
              onClick={logout}
              className={`text-[orange] text-sm mt-auto text-left w-full mb-2 py-2.5 px-5 rounded-3xl flex items-center gap-3`}
            >
              <span>
                <IoLogOut className="text-[orange]" />
              </span>
              <span>Logout</span>
            </button>

          </div>
        </aside>
        <div className="flex-1">
          <header className="h-[70px] bg-white flex items-center px-4 sm:px-7 justify-between xl:justify-end gap-6">
            <button className="block xl:hidden" onClick={toggleOpenSidebar}>
              <RxHamburgerMenu size={20} />
            </button>
            <div className="flex items-center gap-5">
              <div className="grid place-content-center w-10 h-10 rounded-full bg-gray-100 relative">
                <VscBell size={20} />
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 absolute top-2 -right-0.5"></div>
              </div>
              <button
                onClick={() => navigate("/settings/profile")}
                className="flex items-center text-left gap-2 bg-gray-100 rounded-3xl px-2.5 py-1.5"
              >
                <img
                  className="w-9 h-9 rounded-full"
                  src={admin}
                  alt="admin"
                />
                <div className="text-xs">
                  <p className="font-medium">
                    Isah Hamza
                  </p>
                  <p className="text-gray-500">Super Admin</p>
                </div>
                <RxCaretDown />
              </button>
            </div>
          </header>
          {activeLink == "settings" ? (
            <div className="pt-6 pb-1 bg-white border-t px-10 flex gap-10 text-sm">
              {settingsTabs.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className={`pb-4 
                  ${
                    activeSetting === idx &&
                    "border-b-2 text-primary-yellow font-medium border-primary-yellow"
                  }`}
                  onClick={() => setActiveSetting(idx)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ) : null}
          <main
            className={`p-3 sm:p-5 lg:p-7 lg:px-5 h-[calc(100vh-70px)] overflow-y-auto ${
              activeLink == "settings" && "!h-[calc(100vh-140px)]"
            }`}
          >
            <Outlet />
           {/* {children} */}
          </main>
        </div>
        {/* {switching ? <LoadingModal /> : null} */}
      </div>
    );
};

export default DashboardLayout;
