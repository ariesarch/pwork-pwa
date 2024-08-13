import { peoples } from "@/constants/home";
import React from "react";
import PeopleCard from "../atoms/PeopleCard";

const SuggestedPeople = () => {
  return (
    <div className="mt-6">
      <h3 className="font-bold">Suggested People</h3>
      <div className="flex items-center flex-nowrap overflow-x-auto no-scrollbar gap-3 my-6 -mr-6">
        {peoples.map((people) => {
          return <PeopleCard data={people} key={people.id} />;
        })}
        {peoples.map((people) => {
          return <PeopleCard data={people} key={people.id} />;
        })}
      </div>
    </div>
  );
};

export default SuggestedPeople;
