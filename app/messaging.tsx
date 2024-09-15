// Download the helper library from https://www.twilio.com/docs/node/install
// import { useState } from "react";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

export default function TextMessagingComponent() {
  //   const [formData, setFormData] = useState(new FormData());
  async function createMessage(formData: FormData) {
    "use server";
    const accountSid = process.env.TWILIO_AUTH_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    const user = await fetchQuery(api.tools.fetchAllUsers);
    const phoneNumbers = user.users.map((user) => {
      return user.phoneNumber;
    });

    try {
      phoneNumbers.forEach(function (number) {
        var message = client.messages
          .create({
            body: formData.get("message")! as string,
            from: "whatsapp:+14155238886",
            to: "whatsapp:" + number,
          })
          .then((message) => console.log(message.status));
      });
    } catch (error) {
      console.error("Error creating message:", error);
    }
  }

  return (
    <form action={createMessage}>
      <input name="message" className="text-black"></input>
      <button type="submit">SEND MESSAGE</button>
    </form>
  );
}
