import { Button } from "@/components/ui/button";
import { generateCuid } from "@/lib/utils";
import Link from "next/link";

interface CreateButtonProps {
  type: "project" | "post";
}

const CreateButton: React.FC<CreateButtonProps> = ({ type }) => {
  const id = generateCuid();

  return (
    <Button variant="outline" asChild>
      <Link href={`/${type}s/${id}/edit?tab=Edit`}>
        New {type.charAt(0).toUpperCase() + type.slice(1)}
      </Link>
    </Button>
  );
};

export default CreateButton;
