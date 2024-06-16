import React from "react";

function PocastDetails({ params }: { params: { podcastId: string } }) {
  return <p className="text-white-1">PodcastDetails for {params.podcastId}</p>;
}

export default PocastDetails;
