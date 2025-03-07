import { Text } from "@chakra-ui/react";
import React from "react";

const UserName = ({ name }) => {
    return (
        <Text textAlign="right" fontSize="sm">{name}</Text>
    )
}

export default UserName;
