import fs from "fs/promises";
import path from "path";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, message, writer } = req.body.comment;
    if (
      !title ||
      !message ||
      !writer ||
      writer.trim() == "" ||
      message.trim() == "" ||
      title.trim() == ""
    ) {
      res.status(403).json({ message: "invalid parameters" });
      return;
    }
    const id = new Date().toISOString();
    const newComment = { title, message, writer };
    const fileData = await catchComments();
    console.log(newComment);
    const newData = { ...fileData };
    newData[id] = newComment;
    await fs.writeFile(commentsFilePath(), JSON.stringify(newData));

    console.log();
    res.status(221).json(newComment);
  } else if (req.method === "GET") {
    const fileData = await catchComments();
    const fileDataArray = [];
    for (const id in fileData) {
      fileDataArray.push({ id, ...fileData[id] });
    }
    res.status(200).json(fileDataArray);
  } else if (req.method === "DELETE") {
    const commentId = req.body;
    const data=await catchComments(commentsFilePath())
    delete data[commentId]
    fs.writeFile(commentsFilePath(),JSON.stringify(data))
    res.status(200).json(data);
  }
}
const commentsFilePath = () => {
  return path.join(process.cwd(), "data", "comments.json");
};
const catchComments = async () => {
  const filePath = commentsFilePath();
  const fileJsonData = await fs.readFile(filePath);
  return await JSON.parse(fileJsonData);
};
