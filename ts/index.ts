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
let diemToan: number = 8;
let thongBao: string = "Chuc mung ngay 20/11";
let kiemTra: boolean = diemToan > 7;
let arrSinhVienNu: Array<string> = ["Thu", "Nhan", "Thanh"]; // string[] = ["Thu", "Nhan", "Thanh"]
let arrTienLuong1: Array<number> = [3000, 5000, 8000];
let arrTienLuong2: number[] = [3000, 5000, 8000];
let objectXeHoi: {
  hang: string;
  mauXe: string;
  giaTien: number;
  namSanXuat: number;
} = {
  hang: "Honda",
  mauXe: "Black",
  giaTien: 15000,
  namSanXuat: 2019,
};

// Khai báo OBJECT
// C1: INTERFACE
// Từ khoá "interface" thể hiện kiểu dữ liệu Object => Tạo ra cấu trúc của 01 Object mẫu và tái sử dụng
// interface ItenBien {key: KDL; key: KDL;.. }
interface IxeHoi {
  hang: string;
  mauXe: string;
  giaTien: number;
  namSanXuat: number;
}
let xeMazda: IxeHoi = {
  hang: "Mazda",
  mauXe: "Black",
  giaTien: 16000,
  namSanXuat: 2020,
  soLuong: 30,
  kichThuoc: [30, 20, 30],
};
//Merge interface: Gọi lại interface lần 2 => Cập nhật thêm thuộc tính cho cấu trúc của Object ban đầu
interface IxeHoi {
  soLuong: number;
  kichThuoc: number[];
}
// Extend interface: Interface 1 kế thừa từ Interface 2 và thêm thuộc tính riêng mới
// vd: Giao Vien - Ke Toan
// GV: msnv - ten - chucVu - soNamLamViec - soLopDangDay - danhGia
// KT: msnv - ten - chucVu - soNamLamViec - phongBan - thuongTet
interface Ihuman {
  msnv: string;
  ten: string;
  chucVu: "Giáo viên" | "Kế Toán"; //Ứng dụng union type
  soNamLamViec: number;
  isActive?: boolean; //optional có hay không đều được, ko bị báo lỗi khi ko gọi tới
}
interface IgiaoVien extends Ihuman {
  soLopDangDay: number[];
  danhGia: number;
}
interface IkeToan extends Ihuman {
  phongBan: string;
  thuongTet: string;
}
let giaoVienThao: IgiaoVien = {
  msnv: "gv01",
  ten: "Lý Minh Thảo",
  chucVu: "Giáo viên",
  soNamLamViec: 3,
  soLopDangDay: [76, 46],
  danhGia: 8,
  isActive: true,
};
let keToanNhan: IkeToan = {
  msnv: "kt01",
  ten: "Lý Minh Thư",
  chucVu: "Kế Toán",
  soNamLamViec: 3,
  phongBan: "Kế toán",
  thuongTet: "abc",
};

// C2: TYPE
// type TypeTenBien = {key: KDL; key: KDL;... }
type TypeMonAn = {
  tenMon: string;
  soLuong: number;
  kichThuoc: string[];
};
let miXuiCao: TypeMonAn = {
  tenMon: "Mi xui cao",
  soLuong: 10,
  kichThuoc: ["small", "medium", "large"],
};

// FUNTION
function tinhTong(diemToan: number, diemVan: number): number {
  return diemToan + diemVan;
}
let diemTongcuaQuan: number = tinhTong(9, 5);
// C2: TYPE
type TypeHamTinhTong = (diem1: number, diem2: number) => number;
interface ISinhVien {
  diemToan: number;
  diemAnh: number;
  tinhTong: TypeHamTinhTong;
}
let sinhVienA: ISinhVien = {
  diemToan: 8,
  diemAnh: 9,
  tinhTong: (diemToan: number, diemAnh: number) => {
    return diemToan + diemAnh;
  },
};

// GENERIC TYPE
// Truyền type (KDL) một cách linh động cho nhiều trường hợp
interface IResponse<T> {
  statusCode: number;
  message: string;
  dateTime: string;
  content: T; //Generic type: đặt tham số T (type) trong <> để tuỳ sử dụng
}
let apiGiayTheoId: IResponse<ISinhVien> = {
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

// UNION TYPE:
// Lưu trữ nhiều option và chỉ cho chọn 1 trong những option đó, nếu option khác thì sẽ báo lỗi => xác định dữ liệu nhận vào chính xác hơn
// VD: Chức vụ: "ADMIN" - "KETOAN" - "NHANSU"
type TypeChucVu = "ADMIN" | "KETOAN" | "NHANSU";
let chucNang: TypeChucVu = "ADMIN";
// B1: Tạo Type A là UNION TYPE chứa các ptử
// B2: Tạo Type B (KDL object) chứa các key(thuộc tính) là các ptử trong Type A (UNION TYPE) sau đó định danh đồng loại cho các key
// B3: Tạo biến C (KDL Type B tức object), lúc này các thuộc tính trong biến C sẽ được nhắc lệnh
type TypeThuocTinhObject = "name" | "gender" | "quantity" | "age";
type TypeObject = {
  [key in TypeThuocTinhObject]: string;
};
let nhanVien: TypeObject = {
  name: "nguyen van a",
  gender: "male",
  quantity: "19",
  age: "20",
};

// CLASS (LỚP ĐỐI TƯỢNG)
class QuanAo {
  ten: string;
  hang: string;
  giaBan: number;
  trangThai: boolean;
  kichThuoc: "S" | "M" | "L";
  mauSac: string;
  constructor(
    _ten: string,
    _hang: string,
    _giaBan: number,
    _trangThai: boolean,
    _kichThuoc: "S" | "M" | "L",
    _mauSac: string
  ) {
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
  public ten: string; // Class, Class extends, Object
  private giaTien: number = 5000; // Only Class
  protected soLuong: number = 10; // Only Class, Class extends

  constructor(_ten: string) {
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
  constructor(
    public ten: string, // Class, Class extends, Object
    private giaTien: number = 5000, // Only Class
    protected soLuong: number = 10 // Only Class, Class extends
  ) {
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

// ULTILITIES TYPE
interface IThongTinDangNhap {
  email: string;
  password: string;
}
/* Partial: 
 - giúp thuộc tính bên trong interface Object chuyển sang dạng Optional (key: string => key?: string | bắt buộc truyền => không YC bắt buộc truyền)
 - Partial không làm thay đổi tính chất của interface Object gốc => chỉ thay đổi tại mỗi thời điểm gọi interface tới để định danh biến
let tenObject: Partial<Interface> = {}  ==> cho phép các key thuộc tính trong interface object có thể có hoặc không */
const thongTinDangNhap1: Partial<IThongTinDangNhap> = {
  email: "thu@gmail.com",
};
const thongTinDangNhap2: IThongTinDangNhap = {
  email: "thu2@gmail.com",
  password: "111s",
};
/* Required: 
 - Giúp chuyển các key option trong interface => Bắt buộc phải có
let tenObject: Required<Interface> = {} */
interface IThongSo {
  soA?: number;
  soB?: number;
}
const thongSo1: IThongSo = {
  soA: 5,
};
const thongSo2: Required<IThongSo> = {
  soA: 6,
  soB: 7,
};
/* Readonly<type>
 - Giúp: giúp các thuộc tính trong interface được giữ nguyên KDL và giá trị khi gọi tới => ko thể thay đổi giá trị mới */
interface IToDoList {
  title: string;
}
const congViecHomNay: Readonly<IToDoList> = {
  title: "to do list",
};
// congViecHomNay.title = "hello"; // => báo lỗi cho title được

/* Record<"tenKey", type của key>
- Có 1 interface Object chứa cấu trúc key: type bên trong đã được setup
- Có 1 unionType chứa nhiều giá trị 
=> biến gọi tới Record giúp tạo ra 1 Object với key là từng giá trị trong unionType và mỗi key sẽ có cấu trúc của interface Object
 */
type UnionData = "user" | "book";
interface IBook {
  name: string;
  quantity: number;
}
interface IUser {
  name: string;
  Age: number;
}
const dataBook: Record<"books", IBook[]> = {
  books: [
    {
      name: "Đường xưa mây trắng",
      quantity: 20,
    },
  ],
};
// khi gọi Ultilites Record tới -> truyền: tên key (UnionType chứa các tên key) , Type1 (KDL của key) | Type2 -> các key có thể có Type là Type 1 or Type 2 đều được
const dataLibrary: Record<UnionData, IBook[] | IUser[]> = {
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

/* Pick<Type, Keys>  
- Giúp lấy ra 1 hoặc 1 vài key từ type gốc */
interface IAccount {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}
const dataDangNhap: Pick<IAccount, "name" | "password"> = {
  name: "Minh Thư",
  password: "111",
};
const dataDangKy: Pick<IAccount, "name" | "email" | "password"> = {
  name: "Minh Thư",
  email: "thu@gmail.com",
  password: "111",
};

/* Omit<Type, Keys>
- Giúp lấy hết tất cả các key từ type gốc TRỪ 1 KEY CỤ THỂ ĐƯỢC ĐỀ CẬP */
const dataDangKy2: Omit<IAccount, "phoneNumber"> = {
  name: "Minh Nhân",
  email: "nhan@gmail.com",
  password: "222",
};

/* KDL any
- typescript sẽ không check những lỗi đầu vào về key, value, type của cấu trúc bên trong => không báo lỗi => user tuỳ ý xử lý
- Hạn chế sử dụng KDL any */
const data: any = {
  stt: "1",
  hoTen: "Nguyễn Văn A",
};
data.lopHoc = "BC76"; // Không có key lopHoc => gọi tới cũng ko báo lỗi

/* KDL enum
- Giúp khai báo dữ liệu nhận vào theo dạng list */
enum Enumrole {
  nhanVien = "NHANVIEN",
  truongPhong = "TRUONGPHONG",
  giamDoc = "GIAMDOC",
}
interface INhanVien {
  hoTen: string;
  chucVu: Enumrole;
}
const nhanVienThu: INhanVien = {
  hoTen: "Minh Thư",
  chucVu: Enumrole.truongPhong,
};
