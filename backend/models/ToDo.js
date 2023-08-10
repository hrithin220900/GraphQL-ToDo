const ToDOSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },

    completed: {
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("ToDO", ToDoSchema);
