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

  const lastPost = await Post.find().sort({postNo: -1}).limit(1);
  const generateNewMaxPostNo = JSON.parse(JSON.stringify(lastPost))[0].postNo + 1;

  const newPost = await Post.create({
    boardCate: req.params.category ? req.params.category : '',
    postNo: generateNewMaxPostNo ? generateNewMaxPostNo : 1,
    title: req.body.title ? req.body.title : '',
    writer: req.body.writer ? req.body.writer : '',
    contents: req.body.contents ? req.body.contents : '',
    comment: req.body.comment ? req.body.comment : '',
    regTime: Date.now(),
    recommendCount: req.body.recommendCount ? req.body.recommendCount : 1,
  });
  newPost
    .save()
    .then(() => console.log('post save success!'))
    .catch((err) => console.log(err));

  res.send('humor post uploaded!!!!')
}
