import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom'

type Props = {
  title: string,
  subtitle: string,
  description: string,
  link: string
}

function Card({title,subtitle,description,link}:Props) {
  return (
    <div className='col'>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
                <p className="card-text">{description}</p>
                <Link to={link} href="#">この記事を開く</Link>
            </div>
        </div>
    </div>
  )
}
export default Card