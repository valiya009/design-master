import React from "react";
import CategorySidebar from "./components/CategorySidebar";
import MainBanner from "./components/MainBanner";
import PromoCards from "./components/PromoCard";
import SideSuggestions from "./components/SideSuggestions";

const HomePage = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <CategorySidebar />
      <div className="flex-1 p-6 space-y-6">
        <MainBanner />
        <PromoCards />
      </div>
      <SideSuggestions />
    </div>
  );
};

export default HomePage;
