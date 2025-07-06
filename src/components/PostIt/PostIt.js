import './PostIt.css';

const PostIt = ({
  title,
  children,
  color = '#fff176', 
  rotate = '-2deg',
  thumbtack = true,
  top = '0px'
}) => {
  return (
    <div className="postit-wrapper" style={{ transform: `rotate(${rotate})`, top: `${top}` }}>
      {thumbtack && <div className="postit-thumbtack">📌</div>}
      <div className="postit-note" style={{ backgroundColor: color }}>
        {title && <h2>{title}</h2>}
        <div className="postit-content">{children}</div>
      </div>
    </div>
  );
};

export default PostIt;
