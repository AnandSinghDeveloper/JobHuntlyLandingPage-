import { MdDesignServices } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { IoDesktopOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbBrandRevolut } from "react-icons/tb";
import { SiCanva } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { GiAbstract065 } from "react-icons/gi";
import { GiAstronautHelmet } from "react-icons/gi";
import { SiGodaddy } from "react-icons/si";





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

export const FeturedJobs = [
   {
      id: 'canva',
      jobRole : 'Lead Designer',
      companyName : 'Canva',
      location : 'ontario , canada',
      description : 'Canva is a graphic design platform that helps you create stunning designs for social media, presentations, documents, and more.',
      logo : <SiCanva color="#4EC4C6" />,
      workType : ['Design','Business'],
      duration :'Full Time',
   },
   {
      id: 'revolut',
      jobRole : 'Email Marketer',
      companyName : 'Revolut',
      location : 'Madrid , spain',
      description : 'Revolut is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
      logo : <TbBrandRevolut />,
      workType : ['Design','Marketing'],
      duration :'Full Time',
   },
   {
      id: 'twitter',
      jobRole : 'Social Media Manager',
      companyName : 'Twitter',
      location : 'New York , usa',
      description : 'Twitter is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
      logo : <FaTwitter color="#219CEE" />,
      workType : ['Technology'],
      duration :'Full Time',
   },
   {
    id: 'dropbox',
    jobRole : 'Brand Manager',
    companyName : 'Dropbox',
    location : 'tokyo , japan',
    description : 'Dropbox is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
    logo : <FaDropbox color="#0062FF" />,
    workType : ['Design','Business'],
    duration :'Full Time',
 },
 {
  id: 'pinterest',
  jobRole : 'Business Analyst',
  companyName : 'Pinterest',
  location : 'Mexico City , mexico',
  description : 'Pitch is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
  logo : <FaPinterestP color="#E70729" />,
  workType : ['Marketing','Business'],
  duration :'Full Time',
},
{
  id: 'blanklist',
  jobRole : 'Virtual Designer',
  companyName : 'Blanklist',
  location : 'jersey , usa',
  description : 'Blanklist is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
  logo : <GiAbstract065 color="#c173c6" />,
  workType : ['Design'],
  duration :'Full Time',
},
{
  id: 'classpass',
  jobRole : 'Project manager',
  companyName : 'Classpass',
  location : 'Paris , france',
  description : 'Classpass is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
  logo : <GiAstronautHelmet color="#2CDE80" />,
  workType : ['Marketing','Business'],
  duration :'Full Time',
},
{
  id: 'godaddy',
  jobRole : 'Platform Manager',
  companyName : 'Godaddy',
  location : 'New Delhi , india',
  description : 'Godaddy is a digital bank that helps you create stunning designs for social media, presentations, documents, and more.',
  logo : <SiGodaddy />,
  workType : ['Marketing','Business'],
  duration :'Full Time',
},
]
