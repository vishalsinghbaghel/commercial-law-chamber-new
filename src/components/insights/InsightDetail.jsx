import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
export const InsightDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📝 Insight Detail</h2>
      <p>
        You’re viewing: <strong>{id.replace(/-/g, " ")}</strong>
      </p>
      <p>This is where you can render full content based on the ID.</p>
    </div>
  );
};
