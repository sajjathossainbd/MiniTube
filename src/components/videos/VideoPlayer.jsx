function VideoPlayer() {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src="https://www.youtube.com/embed/QKAuiC2EnBg?si=Pdk8OF1gHUXmMV51"
      title="Some video title"
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
    ></iframe>
  );
}

export default VideoPlayer;
