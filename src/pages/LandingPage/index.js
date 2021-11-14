import React, { useEffect } from "react";
import Header from "components/Header";
import Hero from "parts/LandingPage/Hero";
import FindTallent from "parts/LandingPage/FindTallent";
import SkillTallent from "parts/LandingPage/SkillTallent";
import Opinion from "parts/LandingPage/Opinion";
import Subscribe from "parts/LandingPage/Subscribe";
import SiteInfo from "components/SiteInfo";
import useScrollTop from "hooks/useScrollTop";

export default function LandingPage(props) {
  useScrollTop();

  useEffect(() => {
    document.title = "Peworld | Landing";
  });

  return (
    <>
      <Header />
      <Hero />
      <FindTallent />
      <SkillTallent />
      <Opinion />
      <Subscribe />
      <SiteInfo />
    </>
  );
}
