import {
  Navbar,
  Button,
  Text,
  Dropdown,
  Avatar,
  Link,
} from "@nextui-org/react";

import { ColorMode } from "./ColorMode";
import { useRouter } from "next/router";

const collapseItems = ["Currículo", "Certificados"];

export default function Header() {
  const { pathname } = useRouter();

  console.log("pathname", pathname);
  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit" hideIn="xs">
          Lucas Rozalem
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link
          isActive={pathname === "/"}
          href="/"
          css={{ marginTop: -4 }}
        >
          Currículo
        </Navbar.Link>
        <Navbar.Link
          isActive={pathname === "/certificates"}
          href="/certificates"
          css={{ marginTop: -4 }}
        >
          Certificados
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Item>
          <ColorMode />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
       
          <Navbar.CollapseItem
           
            activeColor="secondary"
            // isActive={}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/"
            >
              Currículo
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem
           
            activeColor="secondary"
            // isActive={}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="/certificates"
            >
              Certificados
            </Link>
          </Navbar.CollapseItem>
        
      </Navbar.Collapse>
    </Navbar>
  );
}
