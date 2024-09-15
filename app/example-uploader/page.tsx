"use client";

import { api } from "@/convex/_generated/api";
import { UploadButton } from "@/utils/uploadthing";
import { fetchMutation } from "convex/nextjs";

export default function ImageUpload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
          fetchMutation(api.tools.updateImageURL, {
            imageURL: res[0].url,
          });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
