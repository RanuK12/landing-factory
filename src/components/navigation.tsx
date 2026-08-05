"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-blue-600">Landing Factory</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/preview" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Generador
            </Link>
            <Link href="/generate" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Demo
            </Link>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};