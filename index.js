import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectdb.js";
import { Todo } from "./schema/todoschema.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("<h1>this is my todo app</h1>");
});

app.use(express.json());

app.post("/todo", async (req, res) => {
    const {title, description, date_time} = req.body;
  const todo = await Todo.create({
      title,
      description,
      date_time
  });
  if (todo) {
    return res.status(201).json({
      success: true,
      data: todo,
      message: "Todo created successfully",
    });
  } else {
    return res.status(3000).json({
      success: false,
      message: "Todo not created",
    });
  }
});  

app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    if (todos) {
        return res.status(200).json({
            success:true,
            data:todos,
            message: "Todos retrieved successfully",
        });
    } else {
        return res.status(500).json({
            success:fales,
            message: "Todos not retrieved",
        });
    }
});

app.patch("/todos/:id", (req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    const todo = Todo.updateOne({status}).where({_id:id});
    if (todo) {
        return res.status(200).json({
            success:true,
            data:todo,
            message: "todo updated",
        });
    }
  
}),


app.delete("/todos", async (req, res) => {
  const {id} = req.params;
  await Todo.deleteOne({_id:id});
  return res.status(200).json({
      success:true,
      message:"todo not updaded",
  });
});

app.listen(port, () => {
  console.log(`server is running on post ${port}`);
});
