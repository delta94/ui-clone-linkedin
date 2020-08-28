import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import LeftColumn from "../../components/LeftColumn";
import MobileHeader from "../../components/MobileHeader";
import MiddleColumn from "../../components/MiddleColumn";
import RightColumn from "../../components/RightColumn";
import DesktopHeader from "../../components/DesktopHeader";
import AdBanner from "../../components/AdBanner";

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn {...{ isLoading }} />
        <MiddleColumn {...{ isLoading }} />
        <RightColumn {...{ isLoading }} />
      </main>
    </Container>
  );
};

export default Layout;
