import MainLayout from "@/Layouts/MainLayout";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ReviewList from "@/Components/Organisms/ReviewList";

const Detail = (props) => {
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
