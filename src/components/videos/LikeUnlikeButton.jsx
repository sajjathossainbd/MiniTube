import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

function LikeUnlikeButton() {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1 items-center">
        <div className="shrink-0">
          <AiTwotoneLike className="w-5 block cursor-pointer" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="shrink-0">
          <AiTwotoneDislike className="w-5 block cursor-pointer" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
}

export default LikeUnlikeButton;
