const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");
const connectString = `mongodb://${host}:${port}/${name}`;

class Database {
  // trong js chỉ có 1 hàm khởi tạo => constructor => được gọi khi khởi tạo
  constructor() {
    // tự động kết nối
    this.connect();
  }

  //  phương thức: kết nối với db mongodb
  connect(type = "mongoose") {
    // dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected Mongodb Success`))
      .catch((err) => console.log(`Error Connect`, err));
  }

  // Phương thức tĩnh getInstance được thể hiện dưới mẫu thiết kế SINGLETON
  // Trả về 1 class duy nhất => Trong bài: đảm bảo chỉ có 1 kết nối duy nhất vào DB
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

// trong js, các phương thức tĩnh (static) được khai báo thẳng mà ko cần tạo class
const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
