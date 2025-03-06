import React from "react";
import { Box, Heading, HStack, Text, Menu, MenuButton, MenuList,MenuItem, Link } from "@chakra-ui/react";
import { IconButton, HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";

const MainLayout = ({ children }) => {
    return (
        <>
            <header>
                <Box bg={"orange.800"}>
                    <HStack
                        justify={"space-between"}
                        alignItems={"center"}
                        py={{base: 0, md: 3}}
                        px={{base: 1, md: 2}}
                    >
                        <Heading
                            as={"h1"}
                            size={{base: "xs", md: "md"}}
                            color={"white"}
                        >
                            <Link href="/home" _hover={{color:"gray.500"}}>
                                {import.meta.env.VITE_APP_NAME}
                            </Link>
                        </Heading>
                        {/* PC表示 */}
                        <HStack display={{base: "none", md: "flex"}} color={"white"} fontWeight={"bold"}>
                            <Link href="#" _hover={{color:"gray.500"}}>マイページ</Link>
                            <Link href="#" _hover={{color:"gray.500"}}>店舗の登録</Link>
                        </HStack>
                        {/* SP表示 */}
                        <Box
                            display={{base: "block", md: "none"}}
                            px={{base: 4, md: "none"}}
                            py={{base: 2, md: "none"}}
                        >
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label="Options"
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    colorScheme="white"
                                    />
                                <MenuList>
                                    <MenuItem
                                        icon={<SettingsIcon />}
                                        command=""
                                        >マイページ</MenuItem>
                                    <MenuItem>店舗の登録</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </HStack>
                </Box>
            </header>
            <Box>{children}</Box>
            {/* フッター */}
            <Box>
                <Box bg={"orange.800"} color={"white"} fontWeight={"bold"} textAlign={"center"} py={{base: "2", md: "3"}}>
                    <Text fontSize={{base: 13, md: 16}}>&copy; 2025 {import.meta.env.VITE_APP_NAME}</Text>
                </Box>
            </Box>
        </>
    );
}

export default MainLayout
