/* eslint-disable react/prop-types */
import LikeUnlikeButton from "./LikeUnlikeButton";

function VideoDescription({ title }) {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 22 Mar 2024
        </h2>

        <LikeUnlikeButton />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        <h2 className="text-xl">
          Programming Hero Community Alumni Association Iftar Party 2024.
        </h2>{" "}
        <br /> <br />
        🕌রমজান ঐক্য, ভালোবাসা এবং সহমর্মিতা শেখায় আমাদের। কিন্তু কর্মব্যাস্ত
        জীবনে সময় নিয়ে সবার সঙ্গে একসাথে ভাব বা কুশল বিনিময় করা সব সময় সম্ভব হয়
        না। <br /> <br />
        ⚡️ তাই গত শনিবার, আমরা Programming Hero Alumni Association এর ৮০+
        প্রাক্তন শিক্ষার্থীদের নিয়ে ছোট পরিসরে ইফতার প্রোগ্রাম ও মিটআপের আয়োজন
        করেছি। <br /> <br />
        🌙 PH এর, প্রায় ৩৫০০+ বেশি সদস্যের একটি স্ট্রং Alumni নেটওয়ার্ক আছে।
        যারা বাংলাদেশ সহ বিশ্বের বিভিন্ন দেশের কোম্পানিগুলোতে জব/ইন্টার্নশিপ
        করছে। তাদের সফলতা আমাদের অনুপ্রাণিত করে। Programming Hero তে ১৩০+ টিমমেট
        সম্মিলিতভাবে সবসময় চেষ্টা করছি শিক্ষার্থীদের ক্যারিয়ারে অবদান রাখতে।
        শিক্ষার্থীদের প্রতিটি সাফল্যের গল্প আমাদের Goosebumps দেয়
        <br /> <br />
        💥 টানা ৬ মাস প্রতিদিন ৬-৮ ঘন্টা কোডিং করা এবং ৮-১০ মাসের মধ্যে
        জব/ইন্টার্নশীপ ম্যানেজ করতে পারা সত্যিই অসাধারণ। 🚀 2030 সালের মধ্যে,
        আমাদের লক্ষ্য বাংলাদেশের প্রতিটি টেক কোম্পানিতে কমপক্ষে একজন প্রোগ্রামিং
        হিরো শিক্ষার্থী যেন থাকে।
        <br /> <br />
        💯 সবাই দোয়া করবেন PH যেন এই ধারা অব্যাহত রেখে শিক্ষার্থীদের ক্যারিয়ার
        গঠনে ভুমিকা রাখতে পারে।🙏
      </div>
    </div>
  );
}

export default VideoDescription;
