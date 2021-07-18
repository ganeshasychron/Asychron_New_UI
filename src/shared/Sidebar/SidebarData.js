import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: "DASHBOARD",
    path: "/",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },

  {
    title: "HOME",
    path: "#",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "PROFILE",
        path: "/home/profile",
        cName: "sub-nav",
      },
      {
        title: "DETAILS",
        path: "/home/details",
        cName: "sub-nav",
      },
      {
        title: "BANK DETAILS",
        path: "/home/bank-details",
      },
      {
        title: "REFERENCES",
        path: "/home/references",
      },
      {
        title: "CERTIFICATIONS",
        path: "/home/certifications",
      },
      {
        title: "EDUCATION",
        path: "/home/education",
      },
      {
        title: "FAMILY",
        path: "/home/family",
      },
    ],
  },
  {
    title: "TASK",
    path: "/task",
  },
  {
    title: "LEAVES",
    path: "/leaves",
  },
  {
    title: "FORMS",
    path: "/forms",
  },
  {
    title: "PERFORMANCE",
    path: "/performance",
  },
  {
    title: "POLICIES",
    path: "/policies",
  },
  {
    title: "ASSETS",
    path: "/assets",
  },
  {
    title: "SALARY DETAILS",
    path: "/salary-details",
  },
  {
    title: "CALENDAR",
    path: "/calendar",
  },
];