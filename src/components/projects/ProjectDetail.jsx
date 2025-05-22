import "./projectDetail.scss";
import { useParams } from "react-router-dom";
import projectArticles from "./projectArticles";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const article = projectArticles[id];

  if (!article) {
    return <div className="article-container">Article not found</div>;
  }

  return (
    <div className="article-wrapper">
      <div className="article-container">
        <h1>{article.title}</h1>
        {article.sections.map((section, index) => {
          if (section.type === "heading") {
            return <h2 key={index}>{section.content}</h2>;
          } else if (section.type === "paragraph") {
            return <p key={index}>{section.content}</p>;
          } 
          else if 
          (section.type === "image") {
            return <img key={index} src={section.src} alt={section.alt} className={section.className || ""}/>;
          } else if (section.type === "code") {
            return (
              <pre key={index}>
                <code>{section.content}</code>
              </pre>
            );
          } else return null;
        })}
        <br />
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>

    </div>
  );
};

export default ProjectDetail;
