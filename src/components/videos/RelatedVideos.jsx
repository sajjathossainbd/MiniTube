/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import SingleRalatedVideo from "./SingleRalatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

function RelatedVideos({ tags, currentVideoId }) {
  const dispatch = useDispatch();

  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No Related Videos Found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <SingleRalatedVideo key={video.id} video={video} />
    ));
  }

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}

export default RelatedVideos;
