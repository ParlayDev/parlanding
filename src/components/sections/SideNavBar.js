import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "About US", icon: HomeIcon, href: "#", current: true },
  { name: "Contact Us", icon: UsersIcon, href: "#", count: 3, current: false },
  { name: "Services", icon: CalendarIcon, href: "#", current: false },
  { name: "Settings", icon: InboxIcon, href: "#", current: false },
  { name: "Blog", icon: FolderIcon, href: "#", count: 4, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNavBar() {
  return (
    <main className="fixed flex flex-col justify-center w-48">
      <section className="flex flex-col flex-1 mt-32">
        <nav className="flex-1 space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current
                      ? "bg-gray-800"
                      : "bg-gray-900 group-hover:bg-gray-800",
                    "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </section>
    </main>
  );
}
