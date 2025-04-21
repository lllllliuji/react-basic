import { useSearchParams } from "react-router-dom";

const Article = () => {
  const [params] = useSearchParams();
  // const params = useParams();
  return (
    <div>
      我是文章-{params.get("id")}-{params.get("name")}
      {/* 我是文章-{params.id}-{params.name} */}
    </div>
  );
};

export default Article;
