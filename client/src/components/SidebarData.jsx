// import React from "react";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// import { AiFillDatabase } from "react-icons/ai";
// import config from "../config.json";

// const tabNames = Object.values(config.databases).map(database => (database.db_name));
// const subTab = Object.values(config.databases).map(database => Object.values(database.db_columns));

// const sidebarItems = tabNames.map((dataBaseName, index) => ({
// 	title: dataBaseName,
// 	path: index === 0 ? "/" : `/${dataBaseName}`,
// 	icon: <AiFillDatabase className="sidebar-icon" />,
// 	iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
// 	iconOpened: <RiIcons.RiArrowUpSFill className="sidebar-icon" />,
// 	subNav: subTab[index]
// 	  .filter((tableName) => tableName !== "Timestamp") // Exclude "Timestamp" table
// 	  .map((tableName) => ({
// 		title: tableName,
// 		path: `/${dataBaseName}/${tableName}`,
// 		icon: <IoIcons.IoIosPaper className="sidebar-icon" />,
// 		iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
// 		iconOpened: <RiIcons.RiArrowUpSFill className="sidebar-icon" />,
// 	  })),
//   }));
  

// export const SidebarData = sidebarItems;

import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";

export const SidebarData = [
{
	title: "SPF_F1_DAY",
	path: "/",
	icon: <AiFillDatabase className="sidebar-icon" />,
	iconClosed: <RiIcons.RiArrowDownSFill className="sidebar-icon" />,
	iconOpened: <RiIcons.RiArrowUpSFill className="sidebar-icon" />,

	subNav: [
	{
		id: "1",
		title: "Pump-1 current",
		path: "/SPF_F1_DAY/Pump-1 current",
		icon: <IoIcons.IoIosPaper className="sidebar-icon" />,
	},
	{
		id: "2",
		title: "Pump-2 current",
		path: "/SPF_F1_DAY/Pump-2 current",
		icon: <IoIcons.IoIosPaper className="sidebar-icon" />,
	},
	{
		id: "3",
		title: "Pump-3 current",
		path: "/SPF_F1_DAY/Pump-3 current",
		icon: <IoIcons.IoIosPaper className="sidebar-icon" />,
	},
	],
},
];