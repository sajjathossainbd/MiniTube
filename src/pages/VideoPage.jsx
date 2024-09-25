import RelatedVideos from "../components/videos/RelatedVideos";
import VideoDescription from "../components/videos/VideoDescription";
import VideoPlayer from "../components/videos/VideoPlayer";

function VideoPage() {
  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            <VideoPlayer />
            <VideoDescription />
          </div>

          <RelatedVideos />
        </div>
      </div>
    </section>
  );
}

export default VideoPage;
