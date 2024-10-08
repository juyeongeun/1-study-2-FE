import { useState, useEffect } from "react";
import axios from "axios";

function useFetchEmoji(studyId) {
  const baseUrl = "https://study-api-m36o.onrender.com/api/reactions";
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmoji = async () => {
      try {
        const response = await axios.get(`${baseUrl}/${studyId}`);
        const data = response.data.map((item) => ({
          emoji: item.emoji,
          count: item.count,
        }));
        setEmojis(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmoji();
  }, [baseUrl, studyId]);

  const saveEmoji = async (emoji) => {
    try {
      const response = await axios.post(`${baseUrl}/${studyId}`, { emoji });
      const updatedEmoji = response.data;

      setEmojis((prevEmojis) => {
        const existingEmojiIndex = prevEmojis.findIndex(
          (item) => item.emoji === updatedEmoji.emoji
        );

        if (existingEmojiIndex !== -1) {
          const updatedEmojis = [...prevEmojis];
          updatedEmojis[existingEmojiIndex] = updatedEmoji;
          return updatedEmojis;
        } else {
          return [...prevEmojis, updatedEmoji];
        }
      });
    } catch (error) {
      setError(error.message);
      console.error("Error saving emoji:", error);
    }
  };

  return { emojis, loading, error, saveEmoji };
}

export default useFetchEmoji;
