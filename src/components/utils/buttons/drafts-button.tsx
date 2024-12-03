import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { UserAccess } from "@prisma/client";

interface CreateButtonProps {
  type: "project" | "post";
}

const CreateButton: React.FC<CreateButtonProps> = async ({ type }) => {
  const session = await auth();

  if (!session) return null;

  if (
    type === "project" &&
    session.user.access !== UserAccess.ROOT &&
    session.user.access !== UserAccess.ADMIN
  )
    return;

  return (
    <Link href={`/${type}s/drafts`} passHref>
      <Button className="py-5" variant="outline">
        {`Draft ${type.charAt(0).toUpperCase() + type.slice(1)}s`}
      </Button>
    </Link>
  );
};

export default CreateButton;
