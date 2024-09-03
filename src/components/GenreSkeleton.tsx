import { Skeleton, Stack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Stack paddingY="5px">
      <Skeleton height="32px" />
    </Stack>
  );
};

export default GenreSkeleton;
