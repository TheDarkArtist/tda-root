import { generateCuid } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

interface CreateButtonProps {
  type: "project" | "post";
}

const CreateButton: React.FC<CreateButtonProps> = async ({ type }) => {
  const session = await auth();

  if (!session) return null;

  const slug = generateCuid();

  return (
    <Link href={`/${type}s/${slug}/edit`} passHref>
      <Button className="py-5" variant="outline">
        {`New ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      </Button>
    </Link>
  );
};

export default CreateButton;
