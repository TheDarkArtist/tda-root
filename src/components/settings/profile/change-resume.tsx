import ResumeModal from "./resume";
import { currentUser } from "@/lib/actions/utils/auth";
import Note from "@/components/utils/note";
import { getUserByUsername } from "@/lib/actions/users/get-user";

const ChangeResume = async () => {
  const u = await currentUser();
  const user = await getUserByUsername(u?.username as string);

  return (
    <div className="border rounded-sm dark:bg-zinc-950 border-gray-300 dark:border-zinc-700 p-4 shadow">
      <div className="flex items-center justify-between ml-auto my-2 gap-2">
        <h2 className="font-semibold">Resume</h2>
        <ResumeModal initialResumeUrl={user?.resumeUrl as string} />
      </div>
      {user?.resumeUrl ? (
        <a
          href={user?.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400"
        >
          View resume
        </a>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">
          You haven&apos;t uploaded any resume yet.
        </p>
      )}
      <Note
        title="TIP"
        description="You can host your resume on a platform like Google Drive, Dropbox, or
        Notion and paste the link here."
      />
    </div>
  );
};

export default ChangeResume;
