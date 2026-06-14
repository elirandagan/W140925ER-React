import axios from "axios";
import { useEffect, useState } from "react";

function QuoteFetcher() {
  const [quote, setQuote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://api.quotable.io/random");
        if (response?.data) {
          setQuote(response.data?.content);
        }
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof Error) {
          setError(err?.message);
        }
      } finally {
        // לעולם נגיע לקטע קוד בתוך finally
        // גם אם הצלחנו את ה- try
        // וגם אם נכשלנו והגענו ל catch
        setIsLoading(false);
      }
    };

    fetchRandomQuote();
  }, []);

  if (isLoading) return <p> Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!quote) return <p> No quote to show</p>;

  return <p>The Quote is: {quote}</p>;
}

export default QuoteFetcher;
