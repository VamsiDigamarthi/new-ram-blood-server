import express from "express";
import {
  bannersTwo,
  bloodbankCount,
  donorsCount,
  editPic,
  editProfile,
  getBanners,
  getFeeds,
  getUser,
  getUserById,
  patinetCount,
  registorAsDonor,
  registorBloodBank,
  sendOtp,
  uploadBannersTwo,
  uploadFeed,
  uploadPic,
  userAvailable,
  userLogin,
  verifyOtp,
} from "../Controllers/AuthController.js";
import { authenticateToken } from "../middelware/AuthMiddelware.js";
import { upload } from "../middelware/fileUpload.js";

const router = express.Router();

router.post("/send-otp", sendOtp);

router.post("/verify-otp", verifyOtp);

router.post("/donor", registorAsDonor);

// router.patch("/reason",)
// registor ad blood bank

router.post("/blood/bank", registorBloodBank);

// login

router.post("/login", userLogin);

// get profile

router.get("/getUser", authenticateToken, getUser);

router.patch(
  "/edit/profile",
  authenticateToken,
  // upload.single("image"),
  editProfile
);

router.patch("/edit/pic", authenticateToken, upload.single("image"), editPic);

router.patch("/update/user/available", authenticateToken, userAvailable);

router.get("/getuser/:id", getUserById);
// baners

router.post("/post/pic", upload.single("image"), uploadPic);

router.get("/banners", authenticateToken, getBanners);
// feets

router.post("/feed/pic", upload.single("image"), uploadFeed);

router.get("/feeds", authenticateToken, getFeeds);

router.post("/bannerstwo", upload.single("image"), uploadBannersTwo);
router.get("/bannersTwo", authenticateToken, bannersTwo);

// donors count

router.get("/donors/count", donorsCount);

router.get("/bloodbank/count", bloodbankCount);
router.get("/patinet/count", patinetCount);

export default router;
