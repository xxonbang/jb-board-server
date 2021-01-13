import Post from "../model/post.js";

export const search = async (req, res) => {
  // Post.findById(req.params.postNo)
  //   .then((post) => res.json(post))
  //   .catch((err) => res.status(400).json("ERROR: " + err));


  res.send('this is humor search!!')
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
