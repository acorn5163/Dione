import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Index_Button from './Index_Button'

type Props_index = {
  chapters:Array<[string,string]>
}


function Index(props:Props_index) {
  console.log(props)
  return (
     <div className="card sticky-top">
      <div className='card body'>
        <p>目次</p>
         {props.chapters.map(([id,content]) => 
        (<Index_Button key = {id} id = {id} content = {content}/>))}
      </div>
    </div>
  )
}
export default Index