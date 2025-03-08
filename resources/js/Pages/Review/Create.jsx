import MainLayout from "@/Layouts/MainLayout";
import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Button,
    Textarea,
    HStack,
    useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { StarIcon } from "@chakra-ui/icons";

const Create = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const [loading, setLoading] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);
    const [values, setValues] = useState({
        shop_id: props.shop.id,
        rating: 1,
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    // 投稿前のモーダル表示
    const handlCheck = (e) => {
        e.preventDefault();
        onOpen();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // ボタンをスピナー
        e.target.disabled = true; // ボタンを非活性
        router.post(route('review.store'), values)
    }

    return (
        <Box
            p="4"
            m="4"
            mx="auto"
            bg="gray.50"
            borderRadius="mb"
            boxShadow="mb"
            w={{base: "90%", md: 700}}
        >
            {/* アラートダイアログ */}
            <>
                <AlertDialog
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                        <AlertDialogHeader   AlertDialogHeader>最終確認</AlertDialogHeader>
                        <AlertDialogBody>
                            この内容で投稿しますか？
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                            キャンセル
                            </Button>
                            <Button colorScheme='blue' ml={3} onClick={handleSubmit}>
                                {loading ? <Spinner /> : '投稿する'}
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>

            <Heading as="h2" size="md" mb="4" color="blue.900">レビューを投稿</Heading>
            <Text fontSize="xl" color="gray.500" mb="4">{props.shop.name}</Text>
            <form onSubmit={handlCheck}>
                <FormControl isRequired mb="4">
                    <FormLabel htmlFor="rating" fontWeight="bold">評価</FormLabel>
                    <HStack spacing="1" mb="4">
                        {Array(5).fill("").map((_, i) =>
                        (
                            <StarIcon
                                key={i}
                                color={i < values.rating || i < hoverRating
                                    ? "yellow.500" : "gray.300"}
                                cursor={"pointer"}
                                onClick={() => setValues({ ...values, rating: i + 1 })}
                                onMouseEnter={() => (setHoverRating(i + 1))}
                                onMouseLeave={() => setHoverRating(0)}
                            />
                        ))}
                    </HStack>
                </FormControl>
                <FormControl isRequired mb="4">
                    <FormLabel htmlFor="comment" fontWeight="bold">コメント</FormLabel>
                    <Textarea
                        onChange={handleChange}
                        name="comment"
                        id="comment"
                    ></Textarea>
                </FormControl>
                <Button type="submit" colorScheme="blue" mt="4">投稿する</Button>
            </form>
        </Box>
    );
}
Create.layout = (page) => <MainLayout children={page} title="レビュー投稿" />
export default Create;
