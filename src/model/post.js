import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  boardCate: String,
  postNo: Number,
  title: String,
  writer: String,
  contents: String,
  comment: String
});

const model = mongoose.model("Post", PostSchema);

export default model;
