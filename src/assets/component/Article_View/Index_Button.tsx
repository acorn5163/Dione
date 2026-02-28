import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

type Props_button = {
  id:string,
  content:string
}

function Index_Button(props:Props_button){
  return(
    <div className='row-py1'>
      <div className='btn btn-link' id={`${props.id}_button`} onClick={() => Jump_to_header(props.id)}>{props.content}</div>
    </div>
  )
}

function Jump_to_header(id:string){
  const target = document.getElementById(id);
  if (!target) {
    console.error("IDの要素が存在しません:", id);
    return;
  }
  target.scrollIntoView({  
  behavior: 'smooth'  
});
}

export default Index_Button