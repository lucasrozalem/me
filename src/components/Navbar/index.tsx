import {
  Navbar,
  Button,
  Text,
  Dropdown,
  Avatar,
  Link
} from "@nextui-org/react";


import { ColorMode } from "./ColorMode";
import { useRouter } from "next/router";


const collapseItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

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
       
        <Navbar.Link isActive={pathname === "/"} href="/" css={{marginTop: -4}}>
          Currículo
        </Navbar.Link>
        <Navbar.Link isActive={pathname === "/certificates"} href="/certificates" css={{marginTop: -4}}>
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
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
