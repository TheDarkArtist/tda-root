import { Button } from "@/components/ui/button";
import DeleteDialog from "./delete-dialog";
import { Post } from "@prisma/client";

const TableRow = ({ post }: { post: Post }) => {
  return (
    <tr className="border-b border-zinc-600">
      <td className="px-6 py-4 w-full">{post.title}</td>
      <td className="px-6 py-4">0</td>
      <td className="px-6 py-4">{post.published ? "published" : "Draft"}</td>
      <td className="flex gap-2 px-6 py-4">
        <Button size="sm" variant="secondary">
          View
        </Button>
        <Button className="dark:bg-sky-600 dark:hover:bg-sky-600/90" size="sm">
          Edit
        </Button>
        <DeleteDialog post={post} />
      </td>
    </tr>
  );
};

export default TableRow;
