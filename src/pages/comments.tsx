import { useNavigate } from 'react-router-dom';

export const CommentsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Comments</h2>
      <p>Please share your comments here</p>
      <button onClick={ () => navigate(-1) }>Back</button>
    </div>
  )
}