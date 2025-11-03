import nodemailer from "nodemailer";

export const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export const sendOtpEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_API_KEY,
      },
    });

    await transporter.sendMail({
      from: `"Simplified Meals" <${process.env.BREVO_USER}>`,
      to: email,
      subject: "Your OTP for Simplified Meals",
      text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    });

    console.log("✅ OTP sent successfully to:", email);
  } catch (err) {
    console.error("❌ OTP email failed:", err);
    throw err;
  }
};
