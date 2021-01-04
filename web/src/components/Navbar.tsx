import { Box, Button, Flex, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { useMeQuery } from "../generated/graphql";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  // data is loading
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    //user is logged in
    body = (
      <>
        <NextLink href="/login">
          <Link color="white" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex>
        <Box mr={2} color="white">
          {data.me.username}
        </Box>
        <Button variant="link" ouline color="white">
          {" "}
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="teal.400" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};

export default Navbar;
