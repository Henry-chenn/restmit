"use client";

import { api } from "@/convex/_generated/api";
import { UploadButton } from "@/utils/uploadthing";
import { useMutation } from "convex/react";
import { useState } from "react";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState<"string">();
  const saveFileToConvex = useMutation(api.tools.updateImageURL);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
          saveFileToConvex({ imageURL: "" });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
