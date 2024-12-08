import axios from "axios";

const API_BASE_URL = "https://musicpich.liara.run/api";

export const fetchMusic = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/music`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت موسیقی‌ها:", error);
    throw error;
  }
};

export const fetchArtists = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/artists`);
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت هنرمندان:", error);
    throw error;
  }
};
