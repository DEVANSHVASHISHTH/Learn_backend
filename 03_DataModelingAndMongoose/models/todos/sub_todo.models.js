import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { TimeStamps: true },
); 

export const SubTodo = mongoose.model("SubTdo",subTodoSchema)