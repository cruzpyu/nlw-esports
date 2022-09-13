import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    {
      id: 2,
      name: "ciro",
    },
    { id: 1, name: "lula" },
    {id: 3, name: "dilme"}
  ]);
});
app.listen(3333);
