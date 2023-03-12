import { useParams } from 'react-router-dom'

export default function AboutPage() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>AboutPage</div>
  )
}
