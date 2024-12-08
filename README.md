### README برای پروژه MusicPich

---

# 🎵 MusicPich

**MusicPich** یک پلتفرم اشتراک‌گذاری موسیقی است که تمرکز اصلی آن روی موسیقی کلاسیک ایرانی می‌باشد. این پروژه امکان گوش دادن به موسیقی‌های مختلف، پخش تصادفی، مدیریت لیست موسیقی و نمایش اطلاعات هنرمندان را فراهم می‌کند.

**لینک پروژه:** [MusicPich](https://musicpich.vercel.app/)

---

## 📖 ویژگی‌ها

1. **پخش‌کننده موسیقی:**
   - قابلیت پخش، توقف، جابجایی ۱۵ ثانیه‌ای، و نمایش زمان موسیقی.
   - امکان مشاهده اطلاعات آهنگ مانند نام هنرمند و تصویر کاور.
2. **پخش تصادفی موسیقی:**
   - یک دکمه برای انتخاب و پخش آهنگ به صورت تصادفی.
3. **لیست هنرمندان:**
   - نمایش هنرمندان با تصاویر اختصاصی.
   - اسکرول به بخش موسیقی‌های هر هنرمند.
4. **واکنش‌گرا:**
   - طراحی مناسب برای دستگاه‌های موبایل و دسکتاپ.
5. **ارتباط با پایگاه داده MongoDB:**
   - دریافت داده‌های موسیقی و هنرمندان از یک API با استفاده از Express.js.
6. **هاستینگ:**
   - Frontend: میزبانی روی **Vercel**.
   - Backend: میزبانی روی **Liara**.

---

## 🛠️ تکنولوژی‌های استفاده‌شده

### Frontend
- **React.js**
- **TailwindCSS**
- **Swiper.js**
- **React Icons**
- **Vite.js**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**

### ابزارها و سرویس‌ها
- **Vercel**: میزبانی Frontend
- **Liara**: میزبانی Backend
- **ArvanCloud**: ذخیره‌سازی فایل‌های موسیقی و تصاویر

---

## 🚀 نصب و اجرا

### پیش‌نیازها:
- Node.js
- MongoDB

### 1. کلون کردن پروژه:
```bash
git clone https://github.com/username/musicpich.git
cd musicpich
```

### 2. نصب وابستگی‌ها:
```bash
npm install
```

### 3. اجرای پروژه:
```bash
npm run dev
```

### 4. تنظیم محیط:
- فایل `.env` ایجاد کنید و مقادیر زیر را تنظیم کنید:
```
REACT_APP_BACKEND_URL=https://musicpich.liara.run/api
```

---

## 🧩 ساختار پروژه

```
musicpich/
├── public/
│   ├── images/           # تصاویر استاتیک
├── src/
│   ├── Page/             # صفحات اصلی
│   ├── Ui/               # کامپوننت‌های UI
│   ├── services/         # فایل‌های ارتباط با API
│   ├── App.jsx           # کامپوننت اصلی اپلیکیشن
├── tailwind.config.js    # تنظیمات TailwindCSS
├── vite.config.js        # تنظیمات Vite
└── package.json          # وابستگی‌ها و اسکریپت‌ها
```

---

## 📜 API Endpoints

### **Base URL:** `https://musicpich.liara.run/api`

1. **GET /music**: دریافت لیست تمامی موسیقی‌ها.
2. **GET /music/:id**: دریافت اطلاعات یک آهنگ خاص.
3. **GET /music/random**: دریافت یک آهنگ به صورت تصادفی.
4. **GET /artists**: دریافت لیست هنرمندان.

---

## 🖼️ تصاویر پروژه

### صفحه اصلی
![Landing Page](https://via.placeholder.com/800x400)

### پخش‌کننده موسیقی
![Music Player](https://via.placeholder.com/800x400)

---

## 🤝 مشارکت

اگر قصد دارید به این پروژه کمک کنید:
1. یک Fork از پروژه بسازید.
2. تغییرات خود را اعمال کرده و Commit کنید.
3. یک Pull Request ایجاد کنید.

---

## 🛡️ لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است. 

---

## 📞 ارتباط

اگر سوالی دارید یا با مشکلی مواجه شده‌اید:
- **ایمیل:** varmanliamirhosein@gmail.com
- **گیت‌هاب:** [github.com/username/musicpich](https://github.com/username/musicpich)

---

### **با عشق ساخته شده برای موسیقی 🎶**
