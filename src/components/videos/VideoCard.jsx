import { Link } from "react-router-dom";

function VideoCard() {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03] rounded-lg">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to="/videos/1">
            <img
              src="https://www.picmaker.com/templates/_next/image?url=https%3A%2F%2Fstatic.picmaker.com%2Fscene-prebuilts%2Fthumbnails%2FYT-0090.png&w=3840&q=75"
              className="w-full h-auto rounded-lg"
              alt="Some video title"
            />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            02:10
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to="/videos/1" className="shrink-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EYGpoi9wjzmEVHAfOEOuMvW_iLepQ-vTgw&s"
              className="rounded-full h-6 w-6"
              alt="travel author"
            />
          </Link>

          <div className="flex flex-col">
            <Link to="/videos/1">
              <p className="text-slate-900 text-sm font-semibold">
                12 Best Places to Visit in Vietnam
              </p>
            </Link>
            <Link
              to="/videos/1"
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
              Travel Author
            </Link>
            <p className="text-gray-400 text-xs mt-1">2k views . Jun 3, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
