import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/ui/Loading";
import RelatedVideos from "../components/videos/RelatedVideos";
import VideoDescription from "../components/videos/VideoDescription";
import VideoPlayer from "../components/videos/VideoPlayer";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";

function VideoPage() {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { id, link, title, tags } = video || {};

  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No Video Found!</div>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />
          <VideoDescription video={video} />
        </div>

        <RelatedVideos currentVideoId={id} tags={tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
}

export default VideoPage;
