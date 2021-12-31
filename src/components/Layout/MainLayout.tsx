import Styled from "./Layout.styled";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  console.log("woo");
  return <Styled.MainAppLayout>{children}</Styled.MainAppLayout>;
}

export default MainLayout;
