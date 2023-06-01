const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "templates"), (err) => {
//   //   if (err) throw new Error();

//   console.log("Folder created successfully");
// });

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();

//   console.log("Folder created successfully");
// });

fs.writeFile(
  path.join(__dirname, "notes", "gitCommands.txt"),
  "cd ../ => go back to previous folder",
  (err) => {
    if (err) throw new Error();

    console.log("File was created successfully");

    fs.appendFile(
      path.join(__dirname, "notes", "gitCommands.txt"),
      " ; mkdir => create new folder",
      (err) => {
        if (err) throw new Error();

        console.log("File was changes successfully");

        fs.readFile(
          path.join(__dirname, "notes", "gitCommands.txt"),
          "utf-8",
          (err, data) => {
            if (err) throw new Error();

            console.log(data);
          }
        );
      }
    );
  }
);
