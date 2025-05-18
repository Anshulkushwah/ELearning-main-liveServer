# 🚀 Elearning - Interactive Learning Platform

**Elearning** is a dynamic EdTech platform that enhances online learning by providing students with seamless access to courses and interactive content. Instructors can showcase their expertise while engaging with learners worldwide.

---

## 📌 Key Features
✅ **User Authentication** - Secure login, OTP verification & password reset  
✅ **Course Management** - Create, update & manage courses with multimedia content  
✅ **Payment Integration** - Seamless checkout via Razorpay  
✅ **Wishlist & Cart** - Users can save and purchase courses easily  
✅ **Cloud-based Media Storage** - Course videos/images managed via Cloudinary  
✅ **Real-time Insights** - Instructors can track course analytics  

---

## 🏗️ System Architecture
Elearning follows a **client-server architecture**, consisting of:
1. **Front-end:** Built using **ReactJS**, ensuring a responsive UI
2. **Back-end:** Powered by **Node.js & Express.js**, handling API interactions
3. **Database:** **MongoDB**, providing scalable and flexible data storage

---

## 🎨 Front-end Overview
### **Tech Stack**
🔹 **ReactJS** - Dynamic UI Components  
🔹 **Tailwind CSS** - Modern styling framework  
🔹 **Redux** - State management  

### **Pages**
📌 **For Students**  
- 🏠 Homepage | 📜 Course List | 💖 Wishlist | 🛒 Checkout | 🎓 Course Content | 👤 Profile & Edit  

📌 **For Instructors**  
- 📊 Dashboard | 🔍 Insights | ✏️ Course Management | 👤 Profile Editing  

---

## 🖥️ Back-end Overview
### **Tech Stack**
🔹 **Node.js & Express.js** - API framework  
🔹 **MongoDB** - NoSQL database for scalable data storage  
🔹 **JWT & Bcrypt** - Secure authentication & password encryption  
🔹 **Mongoose** - ODM for MongoDB  

### **Key Functionalities**
🔑 **User Authentication & Security** - OTP, JWT-based login, password recovery  
📚 **Course Management** - CRUD operations, media storage  
💳 **Payment Gateway** - Razorpay integration for checkout  
☁️ **Cloud-based Content Storage** - Cloudinary for course media  

---

## 📂 Database Schema
### **Data Models**
- **Student Schema:** `name, email, password, enrolledCourses`
- **Instructor Schema:** `name, email, password, createdCourses`
- **Course Schema:** `title, description, instructor, mediaFiles, price, ratings`

---

## 📡 API Design
Elearning follows **REST architecture**, using **Express.js** for API endpoints.

### **Supported API Methods**
🔹 `GET` - Fetch courses, user details  
🔹 `POST` - Create new courses, enroll users  
🔹 `PUT` - Update course details  
🔹 `DELETE` - Remove courses/user accounts  

---

## ⚡ Installation & Setup
### **Prerequisites**
🔹 Install **Node.js**  
🔹 Install **MongoDB**  
🔹 Clone the repository:
```sh
git clone https://github.com/your-repo/elearning.git
cd elearning
