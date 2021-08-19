import React from "react";

export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "far fa-list-alt",
  },
  {
    name: "Home",
    exact: true,
    to: `/home/profile`,
    iconClassName: "fal fa-home-alt",
    
  },
  { name: "Task", to: `/task`, iconClassName: "fal fa-clipboard-list-check" },
  {
    name: "Leaves",
    exact: true,
    to: `/leaves`,
    iconClassName: "bi bi-clock-history",
    
  },
  { name: "Forms", to: `/forms`, iconClassName: "fal fa-file-alt" },
  {
    name: "Performance",
    to: `/performance`,
    iconClassName: "fal fa-tachometer-fastest",
  },
  {
    name: "Policies",
    to: `/policies`,
    iconClassName: "fal fa-money-check-edit",
  },
  { name: "Assets", to: `/assets`, iconClassName: "fad fa-badge-dollar" },
  {
    name: "Salary Details",
    to: `/salary-details`,
    iconClassName: "fal fa-hand-holding-usd",
  },
  { name: "Calander", to: `/calendar`, iconClassName: "fal fa-calendar-alt" },
  {
    name: "Survey",
    to: `/survey`,
    iconClassName: "bi bi-layout-text-sidebar-reverse",
  },
  {
    name: "Poll",
    to: `/polls`,
    iconClassName: "fad fa-poll-people",
  },
];
