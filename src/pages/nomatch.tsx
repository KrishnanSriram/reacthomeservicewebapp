import { useNavigate } from 'react-router-dom';

export const NoMatchPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>You are in Unknown section</h2>
      <p>Looks like you are lost. Page you are looking for does not exist</p>
      <button onClick={() => navigate(-1) }>Back</button>
    </div>
  )
}