import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaShoppingBag,
  FaClipboardList,
  FaChalkboardTeacher,
  FaJournalWhills,
  FaBlog,
} from "react-icons/fa";

const Hero = () => {
  const navLinks = [
    { name: "প্রশ্নব্যাংক", path: "/question-bank/archive", icon: <FaBook /> },
    { name: "স্টুডেন্ট শপ", path: "/shop", icon: <FaShoppingBag /> },
    { name: "পরীক্ষা", path: "/exams", icon: <FaClipboardList /> },
    { name: "কোর্স", path: "/courses", icon: <FaChalkboardTeacher /> },
    { name: "জার্নাল", path: "/journal", icon: <FaJournalWhills /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
  ];

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-6 md:p-12 bg-gray-900 text-gray-100 min-h-screen relative
