const BlogModel = require("../models/Blog");

// creates reusable business logic here
exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

exports.createBlog = async (blog) => {
  return await BlogModel.create(blog); // creates an instance of the model
};

exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};

exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
}