import React from "react";
import question from "./public/images/qstn.png";
import pic from "./public/images/pic2.png";
import dollar from "./public/images/dollar.png";
import report from "./public/images/report.png";
import logo from "./public/images/logo.png";

// import profile from "../public/images/prof-removebg-preview.png"

const Header = () => {
  return (
    <div>
      <div className="bg-slate-800 flex items-center justify-between px-4">
        <div className="py-3 ml-1 flex items-center gap-3">
          <img className="w-7" src={logo} alt="" />
          <h3 className="text-white font-medium">Grave Sites Management</h3>
        </div>
        <div>
          <ul className="text-white flex gap-2 items-center">
            <li>Maintain</li>
            <button className="flex gap-1 items-center rounded-full bg-zinc-700 px-3 py-2">
              <img className="w-3 h-3 " src={dollar} alt=""/>
              <li>Payments</li>
            </button>
            <div className="flex gap-1 items-center">
              <img className="w-4 h-4" src={report} alt=""/>
              <li>Reports</li>
            </div>
          </ul>
        </div>
        <ul className="flex justify-end gap-3 py-2 items-center">
          <li>
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </li>
          <li>
            <img className="w-5" src={question} alt="" />
          </li>
          <li className="flex items-center gap-2">
            <img className="w-7" src={pic} alt="" />
            <div>
              <li className="text-sm text-white">John Snow</li>
              <li className="text-gray-500 text-sm">Municipality Officer</li>
            </div>
          </li>
          <li>
            <svg
              className="text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
