import React from "react";
import Header from "./Header";
import VotingCard from "./VotingCard/VotingCard";
import { candidates } from "../data";

import "../index.css";

const Page = () => {
  return (
    <main className="main-page-container">
      <Header />
      <section className="main-voting-area">
        <div className="cards-area">
          {candidates.map((candidate, index) => {
            const { id, imagePath, name } = candidate;
            return (
              <VotingCard key={id} img={imagePath} name={name} index={index} />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;
