import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // store it in db
    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://admin1:vkPhmqQm.8!3Rnk@next-blog.1g5en.mongodb.net/next-blog?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();
    res.status(201).json(newMessage);
    return;
  }
}
