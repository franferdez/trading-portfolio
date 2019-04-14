export default {
  Query: {
    user: (root, { id }) => {
      return {
        _id: id,
        username: "jhon"
      };
    }
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
