import React, { useEffect, useState } from "react";
import { Box, Heading, VStack, Text, useToast } from "@chakra-ui/react";

const PlaylistsPage: React.FC = () => {
  const [playlists, setPlaylists] = useState<any[] | null>(null);
  const toast = useToast();

  useEffect(() => {
    const accessToken = localStorage.getItem("spotify_access_token");
    fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((data) => {
        setPlaylists(data.items);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Unable to fetch playlists. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, [toast]);

  return (
    <VStack spacing={4} p={5}>
      <Heading>Your Spotify Playlists</Heading>
      {/*} TODO::
        // 1. Sort out styling to be a lot cleaner / minimal
        // 2. Add a button to go to the playlist on spotify website
        // 3. Ability to search for a playlist
        */}
      {playlists &&
        playlists.map((playlist, index) => (
          <Box
            key={index}
            p={3}
            boxShadow="base"
            borderRadius="md"
            width="100%"
          >
            <Text fontSize="xl">{playlist.name}</Text>
            {playlist.images[0] && (
              <img src={playlist.images[0].url} alt={playlist.name} />
            )}
            <Text color="gray.500">Tracks: {playlist.tracks.total}</Text>
          </Box>
        ))}
    </VStack>
  );
};

export default PlaylistsPage;
