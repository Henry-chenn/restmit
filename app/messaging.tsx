// Download the helper library from https://www.twilio.com/docs/node/install
// import { useState } from "react";
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
    try {
      const message = await client.messages.create({
        body: formData.get("message")! as string,
        from: "whatsapp:+14155238886", // Your Twilio phone number
        to: "whatsapp:+12063965545", // The recipient's phone number
      });

      console.log(formData.get("message"));
      return { success: true, messageSid: message.sid };
    } catch (error) {
      console.error("Error creating message:", error);
    }
  }
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = new FormData(e.currentTarget);
//     setFormData(form);
//     await createMessage(form); // Call the createMessage function with form data
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="message"
//         className="text-black"
//         placeholder="Enter your message"
//       />
//       <button type="submit">SEND MESSAGE</button>
//     </form>
//   );
// }

return (
    <form action={createMessage}>
      <input name="message" className="text-black"></input>
      <button type="submit">SEND MESSAGE</button>
    </form>
  );
}

