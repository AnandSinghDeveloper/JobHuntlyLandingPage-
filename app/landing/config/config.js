import { MdDesignServices } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { IoDesktopOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


export const Headeritem = [
  {
    id: "FindJobs",
    name: "Find Jobs",
    path: "*",
  },
  {
    id: "BrowseCompanies",
    name: "Browse Companies",
    path: "*",
  },
];

export const exploreByCategory = [
  {
    id: "design",
    name: "Design",
    numberOfJobs: "325",
    icon: <MdDesignServices/> ,
    description: "Jobs available",
  },
  {
    id: "sales",
    name: "Sales",
    numberOfJobs: "325",
    icon: < FaChartLine /> ,
    description: "Jobs available",
  },
  {
    id: "marketing",
    name: "Marketing",
    numberOfJobs: "325",
    icon: <GrAnnounce /> ,
    description: "Jobs available",
  },
  {
    id: "finance",
    name: "Finance",
    icon: <HiOutlineCash /> ,
    numberOfJobs: "325",
    description: " Jobs available",
  },
  {
    id: "tachnology",
    name: "Tachnology",
    numberOfJobs: "325",
    icon: <IoDesktopOutline /> ,
    description: "Jobs available",
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: <FaCode /> ,
    description: "Jobs available",
  },
  {
    id: "business",
    name: "Business",
    numberOfJobs: "325",
    icon: <MdBusinessCenter /> ,
    description: "Jobs available",
  },
  {
    id: "human resource",
    name: "Human Resource",
    numberOfJobs: "325",
    icon: <FaUsers /> ,
    description: "Jobs available",
  }
];
