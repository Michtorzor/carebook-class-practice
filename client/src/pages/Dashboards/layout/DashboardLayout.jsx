import React from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo/logo.svg"
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiMoneyCnyCircleLine, RiNotificationBadgeFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaUndo } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa6";
import logoOnDark from "../../../assets/logo/logo-on-dark.svg"
import { MdLogout } from "react-icons/md";







const ASIDEMENUS = {
    patient: {
        heading: "MY HEALTH",
        items: [
            { to: "/patient", label: "Overview", icon: CiHome },
            { to: "/doctor", label: "Find a doctor", icon: FaSearch },
            { to: "/patient/appointment", label: "My Appointment", icon: CiCalendar },
            { to: "/patient/notes", label: "Visit notes", icon: BsFillChatRightTextFill },
            { to: "/patient/payments", label: "Payments", icon: MdOutlinePayment },
        ]
    },
    doctor: {
        heading: "DOCTOR WORKSPACE",
        items: [
            { to: "/doctor", label: "Overview", icon: CiHome },
            { to: "/doctor/schedule", label: "Schedule", icon: CiCalendar },
            { to: "/doctor/profile", label: "Profile & Availability", icon: FaRegClock },
            { to: "/doctor/notes", label: "Visit notes", icon: BsFillChatRightTextFill },
            { to: "/earnings", label: "Earnings", icon: RiMoneyCnyCircleLine },
        ]
    },
    admin: {
        heading: "ADMIN",
        items: [
            { to: "/admin", label: "Overview", icon: CiHome },
            { to: "/admin/doctors", label: "Doctor approvals", icon: FaStethoscope },
            { to: "/admin/users", label: "Users", icon: FiUsers },
            { to: "/admin/appointments", label: "Appointment", icon: CiCalendar },
            { to: "/admin/payments", label: "Payments & Refunds", icon: FaUndo, RiNotificationBadge: "refundsNeeded" },
            { to: "/admin/revenue", label: "Revenue", icon: FaChartLine },
        ]
    }
}

const ROLE_LABEL = {
    patient: "Patient",
    doctor: "Doctor",
    admin: "Administrator"
}

function DashboardLayout({role}) {
    const [open, setOpen] = useState(false);
    const menu = ASIDEMENUS[role]

    return (
        <div className="dash">
            <header className="dash-topbar">
                <Link to={"/"} className="dash-logo">
                    <img src={logo} alt="Carebook logo" />
                </Link>
                <button className="dash-menu-btn">
                    {open ? <IoClose /> : <IoMdMenu />}
                </button>
            </header>
            <aside id='dash-sidebar' className={`dash-side ${open ? 'open' : ''}`}>
                <Link to={"/"} className='dash-logo'>
                    <img src={logoOnDark} alt="CareBook logo"/>
                </Link>
                <p className="side-heading">{menu.heading}</p>
                <nav className="dash-nav">
                    {
                        menu.items.map((item) => {
                            const MenuIcon = item.icon;
                            return (
                            <NavLink to={item.to} key={item.to}>
                              {MenuIcon && <MenuIcon size={18} />}
                              <span>{item.label}</span>
                              </NavLink>
                            )
                        })
                    }
                </nav>
                <button className="dash-logout">
                  <MdLogout />
                </button>
            </aside>
            <main className="dash-main">
                
            </main>
        </div>

    )
}

export default DashboardLayout