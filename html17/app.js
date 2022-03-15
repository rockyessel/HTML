var http = require("http");
var url = require("url");
var fs = require("fs");
// var events = require("events");
// var eventEmitter = new events.EventEmitter();
var formidable = require("formidable");
// var address = "http://localhost:8080/default.htm?year=2017&month=february";
// var q = url.parse(address, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(
//       '<form action="fileupload" method="post" enctype="multipart/form-data">'
//     );
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write("</form>");
//     return res.end();
//   })
//   .listen(8080);

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filestoupload.filepath;
        var newpath = "C/Users/User/" + files.filestoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File Uploaded!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data"> '
      );
      res.write('<input type="file" name="fileupload"><br>');
      res.write('<input type="submit">');
      res.write("</from>");
    }
  })
  .listen(8080);

//   var http = require("http");
//   var formidable = require("formidable");
//   var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     if (req.url == "/fileupload") {
//       var form = new formidable.IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         var oldpath = files.filetoupload.filepath;
//         var newpath =
//           "C:/Users/Your Name/" + files.filetoupload.originalFilename;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write("File uploaded and moved!");
//           res.end();
//         });
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8080);

// var rs = fs.createReadStream("./newIndex.txt");
// rs.on("open", function () {
//   console.log(`The file is opened!`);
// });

// var myEventHandler = function () {
//   console.log(`I hear a scream!!!`);
// };

// eventEmitter.on("scream", myEventHandler);
// eventEmitter.emit("scream");

//fs.appendFile() is used for creating a new file, if it doesn't exist, then appending the content to that file.
//fs.appendFile() is also used to update a existing file at the end of the content.
// fs.appendFile("newIndex.txt", "This is Eoin Carrick", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

//fs.open(), this method, creates a file without any content, and also takes a flag as a second argument.
// fs.open("newFiles.html", "w", function (err) {
//   if (err) throw err;
//   console.log(`Saved!`);
// });

//fs.writeFile(), this method replace an existing content completely. And if it the file doesn't exist
// it create a new file.
// fs.writeFile("index.html", "cv", function (err) {
//   if (err) throw err;
//   console.log(`Saved!`);
// });

//fs.unlink(), this method is used to delete an existing file, and if the file doesn't exist, it creates the file.
//so, remember to always use it for deleting file that exist, to prevent unwanted behavior
//fs.unlink("newIndex.txt", function (err) {
//  if (err) throw err;
//  console.log(`Deleted!`);
//});

//fs.rename(), this method is used to give a new name to an old file, and takes the first argument as path, and second as
// rename path.
//fs.rename("newFiles.html", "file.html", function (err) {
//  if (err) throw err;
//  console.log(`Renamed!`);
//});

// http
//   .createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let fileName = "." + q.pathname;
//     fs.readFile(fileName, function (err, data) {
//       if (err) {
//         res.writeHead(404, {
//           "Content-Type": "text/html",
//         });
//         return res.end("404 not Found");
//       }

//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);
