exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "This the first post.",
        imageUrl: "images/prod1.jpg",
        creator: { name: "Ming" },
        createdAt: new Date()
      }
    ]
  });
  // .catch(err => next(err));
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
