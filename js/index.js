"use strict";
/* TYPESCRIPT
Setup TS (cho máy tính):
Terminal:
npm i typescript -g | Setup TS
tsc -v              | Kiểm tra phiên bản TS

Tạo Folder TYPESCRIPT, sau đó Mở VSCODE + bật Terminal
Terminal: tsc --init | Cài file tsconfig.json
Trong file tsconfig.json:
{
    "compilerOptions": {
        //Thuộc tính "target": Ts biên dịch ra ES6
        "target": "es2016", //Ts biên dịch ra ES6
        "module": "commonjs",
        //Thuộc tính "outDir" (outDirection): Tất cả file biên dịch sẽ nằm trong thư mục js
        "outDir": "./js",
    }
}
Trong Folder TYPESCRIPT => Tạo Folder ts => Trong Folder ts => Tạo File index.ts
tips: tsc --help | Danh sách các câu lệnh trong tsc

- Trỏ tới file index.ts chạy lệnh để biên dịch ra file index.js
Terminal: tsc ./ts/index.ts
Kết quả: xuất hiện file index.js (chung folder ts)
Terminial: --watch
Kết quả: Xuất hiện folder js chứa file index.js
Khởi động phiên dịch từ TS -> JS
 */
console.log("Hello Typescript");
console.log("bc76");
//KDL JS: string, number, boolean, array, object...
let diemToan = 8;
let thongBao = "Chuc mung ngay 20/11";
let kiemTra = diemToan > 7;
let arrSinhVienNu = ["Thu", "Nhan", "Thanh"]; // string[] = ["Thu", "Nhan", "Thanh"]
let arrTienLuong1 = [3000, 5000, 8000];
let arrTienLuong2 = [3000, 5000, 8000];
let objectXeHoi = {
    hang: "Honda",
    mauXe: "Black",
    giaTien: 15000,
    namSanXuat: 2019,
};
let xeMazda = {
    hang: "Mazda",
    mauXe: "Black",
    giaTien: 16000,
    namSanXuat: 2020,
    soLuong: 30,
    kichThuoc: [30, 20, 30],
};
let giaoVienThao = {
    msnv: "gv01",
    ten: "Lý Minh Thảo",
    chucVu: "Giáo viên",
    soNamLamViec: 3,
    soLopDangDay: [76, 46],
    danhGia: 8,
    isActive: true,
};
let keToanNhan = {
    msnv: "kt01",
    ten: "Lý Minh Thư",
    chucVu: "Kế Toán",
    soNamLamViec: 3,
    phongBan: "Kế toán",
    thuongTet: "abc",
};
let miXuiCao = {
    tenMon: "Mi xui cao",
    soLuong: 10,
    kichThuoc: ["small", "medium", "large"],
};
// FUNTION
function tinhTong(diemToan, diemVan) {
    return diemToan + diemVan;
}
let diemTongcuaQuan = tinhTong(9, 5);
let sinhVienA = {
    diemToan: 8,
    diemAnh: 9,
    tinhTong: (diemToan, diemAnh) => {
        return diemToan + diemAnh;
    },
};
let apiGiayTheoId = {
    statusCode: 200,
    message: "Thành công",
    dateTime: "09/01/2005",
    content: {
        diemToan: 7,
        diemAnh: 7,
        tinhTong: (diemA = 5, diemB = 6) => {
            return diemA + diemB;
        },
    },
};
let chucNang = "ADMIN";
let nhanVien = {
    name: "nguyen van a",
    gender: "male",
    quantity: "19",
    age: "20",
};
// CLASS (LỚP ĐỐI TƯỢNG)
class QuanAo {
    constructor(_ten, _hang, _giaBan, _trangThai, _kichThuoc, _mauSac) {
        this.ten = _ten;
        this.hang = _hang;
        this.giaBan = _giaBan;
        this.trangThai = _trangThai;
        this.kichThuoc = _kichThuoc;
        this.mauSac = _mauSac;
    }
}
let quanTay = new QuanAo("Quần tây", "H&M", 350000, true, "S", "BLUE");
// CLASS EXTEND (Kế thừa)
class ThoiTrang extends QuanAo {
    // phương thức Hiển thị giá bán
    hienThiGiaTien() {
        console.log(this.giaBan);
    }
}
let aoThun = new ThoiTrang("Âo thun", "H&M", 350000, true, "S", "BLUE");
aoThun.hienThiGiaTien();
// MODIFY CLASS
// public: thuộc tính/phương thức đang được khai báo phía sau public có thể được sử dụng ở những Object được tạo ra từ Class này hoặc LĐT được kế thừa từ LĐT này
// private: chỉ LĐT được xài, Object và LĐT kế thừa không được xài
// protect: chỉ LĐT gốc và LĐT kế thừa được xài, Object không dược xài
class ThuCung {
    constructor(_ten) {
        this.giaTien = 5000; // Only Class
        this.soLuong = 10; // Only Class, Class extends
        this.ten = _ten;
    }
    hienThiGiaTien() {
        console.log(this.giaTien);
    }
}
let meoCon = new ThuCung("Nắng");
// Cách hiển thị console.log trong TS: chuột phải vào file index.js -> Bật terminal : node index.js (tên file muốn chạy)
meoCon.hienThiGiaTien(); // 5000
class ThuCung2 extends ThuCung {
    tinhGiaTien() {
        // this. ==> ko cho truy cập thuộc tính giaTien (do có cài private)
        this.soLuong; // ==> cho phép LĐT kế thừa ThuCung2 truy cập thuộc tính soLuong (do có cài protect) còn Object thì ko được truy cập
    }
}
// C2: chỉ cần khai báo [ (modify) Thuộc Tính: KDL ] trong phần truyền Tham số của constructor => Thuộc tính: KDL sẽ được tự hình thành
class Animal {
    constructor(ten, // Class, Class extends, Object
    giaTien = 5000, // Only Class
    soLuong = 10 // Only Class, Class extends
    ) {
        this.ten = ten;
        this.giaTien = giaTien;
        this.soLuong = soLuong;
        this.ten = ten;
    }
}
let tiger = new Animal("Cọp vằn");
console.log(tiger.ten); // Cọp vằn
class Animal2 extends Animal {
    hienThiSoLuong() {
        console.log(this.soLuong);
    }
}
/* Partial:
 - giúp thuộc tính bên trong interface Object chuyển sang dạng Optional (key: string => key?: string | bắt buộc truyền => không YC bắt buộc truyền)
 - Partial không làm thay đổi tính chất của interface Object gốc => chỉ thay đổi tại mỗi thời điểm gọi interface tới để định danh biến
let tenObject: Partial<Interface> = {}  ==> cho phép các key thuộc tính trong interface object có thể có hoặc không */
const thongTinDangNhap1 = {
    email: "thu@gmail.com",
};
const thongTinDangNhap2 = {
    email: "thu2@gmail.com",
    password: "111s",
};
const thongSo1 = {
    soA: 5,
};
const thongSo2 = {
    soA: 6,
    soB: 7,
};
const congViecHomNay = {
    title: "to do list",
};
const dataBook = {
    books: [
        {
            name: "Đường xưa mây trắng",
            quantity: 20,
        },
    ],
};
// khi gọi Ultilites Record tới -> truyền: tên key (UnionType chứa các tên key) , Type1 (KDL của key) | Type2 -> các key có thể có Type là Type 1 or Type 2 đều được
const dataLibrary = {
    book: [
        {
            name: "ABC",
            Age: 33,
        },
    ],
    user: [
        {
            name: "Hân",
            quantity: 22,
        },
    ],
};
const dataDangNhap = {
    name: "Minh Thư",
    password: "111",
};
const dataDangKy = {
    name: "Minh Thư",
    email: "thu@gmail.com",
    password: "111",
};
/* Omit<Type, Keys>
- Giúp lấy hết tất cả các key từ type gốc TRỪ 1 KEY CỤ THỂ ĐƯỢC ĐỀ CẬP */
const dataDangKy2 = {
    name: "Minh Nhân",
    email: "nhan@gmail.com",
    password: "222",
};
/* KDL any
- typescript sẽ không check những lỗi đầu vào về key, value, type của cấu trúc bên trong => không báo lỗi => user tuỳ ý xử lý
- Hạn chế sử dụng KDL any */
const data = {
    stt: "1",
    hoTen: "Nguyễn Văn A",
};
data.lopHoc = "BC76"; // Không có key lopHoc => gọi tới cũng ko báo lỗi
/* KDL enum
- Giúp khai báo dữ liệu nhận vào theo dạng list */
var Enumrole;
(function (Enumrole) {
    Enumrole["nhanVien"] = "NHANVIEN";
    Enumrole["truongPhong"] = "TRUONGPHONG";
    Enumrole["giamDoc"] = "GIAMDOC";
})(Enumrole || (Enumrole = {}));
const nhanVienThu = {
    hoTen: "Minh Thư",
    chucVu: Enumrole.truongPhong,
};
