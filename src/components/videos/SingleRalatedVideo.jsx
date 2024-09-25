function SingleRalatedVideo() {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <a href="video.html">
          <img
            src="https://img.freepik.com/premium-psd/modern-travel-youtube-thumbnail-design-web-banner-template-tourism_892970-480.jpg"
            className="object-cover"
            alt="Some video title"
          />
        </a>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          12:10
        </p>
      </div>

      <div className="flex flex-col w-full">
        <a href="#">
          <p className="text-slate-900 text-sm font-semibold">
            Top Travel Place In The World
          </p>
        </a>
        <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
          Traveler Guid
        </a>
        <p className="text-gray-400 text-xs mt-1">100K views . 23 Oct 2022</p>
      </div>
    </div>
  );
}

export default SingleRalatedVideo;
