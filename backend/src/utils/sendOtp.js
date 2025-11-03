import axios from "axios";

export const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export const sendOtpEmail = async (email, otp) => {
  try {
    const data = {
      sender: { name: "Simplified Meals", email: process.env.BREVO_USER },
      to: [{ email }],
      subject: "Your OTP for Simplified Meals",
      textContent: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    };

    const res = await axios.post("https://api.brevo.com/v3/smtp/email", data, {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log("✅ OTP sent successfully to:", email, res.data);
  } catch (err) {
    console.error("❌ OTP email failed:", err.message);
    throw err;
  }
};
