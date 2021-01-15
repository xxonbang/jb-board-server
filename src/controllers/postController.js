import Post from "../model/post.js";

export const search = async (req, res) => {
  await Post.find({postNo: req.query.postNo})
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("ERROR: " + err));
}

export const searchAll = async (req, res) => {
  await Post.find({boardCate: req.params.category})
    .then((post) => res.send(post))
    // .then((post) => res.json(post))
    .catch((err) => res.status(400).json("ERROR: " + err));
}

export const postUpload = async (req, res) => {
  const newPost = await Post.create({
    boardCate: req.body.boardCate,
    postNo: req.body.postNo,
    title: req.body.title,
    writer: req.body.writer,
    contents: req.body.contents,
    comment: req.body.comment
  });
  newPost
    .save()
    .then(() => console.log('post save success!'))
    .catch((err) => console.log(err));

  res.send('humor post uploaded!!!!')
}
