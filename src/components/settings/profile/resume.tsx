"use client";

import { ComponentRef, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadDropzone } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { BsFilePdf } from "react-icons/bs";
import { updateResumeUrl } from "@/lib/actions/utils/utils";
import { currentUser } from "@/lib/actions/utils/auth";

interface ResumeModalProps {
  initialResumeUrl: string;
}

const ResumeModal = ({ initialResumeUrl }: ResumeModalProps) => {
  const [resumeUrl, setResumeUrl] = useState(initialResumeUrl);
  const [isPending, startTransition] = useTransition();
  const closeRef = useRef<ComponentRef<typeof DialogClose>>(null);
  const router = useRouter();

  const onRemove = () => {
    startTransition(async () => {
      const user = await currentUser();

      await updateResumeUrl(user?.id as string, null)
        .then(() => {
          toast("Removed: Your resume has been removed");
          setResumeUrl("");
          closeRef?.current?.click();
        })
        .catch(() => {
          toast("Something went wrong");
        });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="ml-auto"
          variant="secondary"
          size="sm"
        >
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload resume</DialogTitle>
        </DialogHeader>
        <form className="space-y-14">
          {resumeUrl ? (
            <div className="relative flex justify-center items-center aspect-video rounded-xl border border-white/10 overflow-hidden">
              <BsFilePdf className="m-auto size-40" />
              <div className="absolute top-2 right-2 z-10">
                <Button
                  className="h-auto w-auto p-1.5"
                  type="button"
                  disabled={isPending}
                  onClick={onRemove}
                >
                  <Trash />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label>Resume</Label>
              <div className="rounded-xl border-black outline-dashed outline-gray-700">
                <UploadDropzone
                  endpoint="resumeUploader"
                  appearance={{
                    label: {
                      color: "white",
                    },
                    allowedContent: {
                      color: "white",
                    },
                  }}
                  onClientUploadComplete={(res) => {
                    setResumeUrl(res?.[0]?.url);
                    router.refresh();
                    closeRef?.current?.click();
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <DialogClose
              ref={closeRef}
              asChild
            >
              <Button
                type="button"
                variant="ghost"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isPending}
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
