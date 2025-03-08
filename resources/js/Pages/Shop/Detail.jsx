import MainLayout from "@/Layouts/MainLayout";
import { Box, Heading, Image, Text, Link, Button, useToast } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import ReviewList from "@/Components/Organisms/ReviewList";
import { useEffect } from "react";

const Detail = (props) => {
    const toast = useToast();

    useEffect(() => {
        if (props.status === 'review-create') {
            toast({
                position: "top",
                title: "レビューを投稿成功",
                description: "レビューの投稿が完了しました。",
                status: "success",
                duration: 9000,
                isClosable: true
            })
        }
    }
    , [props.erroes]);
    return (
        <Box p={4}>
            <Heading as="h2" size="xl" mb="4">
                {props.shop.name}
            </Heading>
            <Image
                boxSize="300px"
                objectFit="contain"
                src="https://bit.ly/sage-adebayo"
                alt={props.shop.name}
                mb="4"
            />
            <Text mb="2">{props.shop.description}</Text>
            <Text>{props.shop.location}</Text>

            {/* レビュー */}
            <Box mt="8">
                <Heading as="h3" size="lg" mb="1">
                    レビュー
                </Heading>
                <Box>
                    <Link href={`/review/create/shop/${props.shop.id}`}>
                        <Button my="4"><SmallAddIcon />レビューを投稿</Button>
                    </Link>
                </Box>
                <Box>
                    {props.reviews.length > 0 && <Box mb={4}>
                        ({props.reviews.length})
                    </Box>
                    }
                </Box>
                <Box>
                    {props.reviews.length === 0 && <Text>レビューはありません</Text>}
                    <ReviewList reviews={props.reviews} />
                </Box>
            </Box>
        </Box>
    )
};

Detail.layout = (page) => <MainLayout children={page} title="ショップ詳細" />
export default Detail;
