import Loader from "../utils/loader";

export const AddCommentSkeleton = () => {
  return (
    <div className="my-4">
      <div
        className={`px-4 py-2 my-4 w-[90%] text-stone-400 mx-auto text-left rounded-full border dark:border-stone-800 border-stone-400 cursor-pointer`}
      >
        Add a comment
      </div>
    </div>
  );
};

export const CommentsSkeleton = () => {
  return (
    <div className="flex w-full justify-center">
      <Loader />
    </div>
  );
};
