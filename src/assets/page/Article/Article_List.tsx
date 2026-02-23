import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Card from '../../component/Article_List/Card'

const articles = [
    {"title":"a","subtitle":"A","description":"alpha","key":"a"},
    {"title":"b","subtitle":"B","description":"beta","key":"b"},
    {"title":"c","subtitle":"C","description":"gamma","key":"c"},
    {"title":"d","subtitle":"D","description":"delta","key":"d"}
]
function Article_List() {
  return (
    <div className="album py-5 bg-body-tertiary">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {articles.map((article) => (
                    <Card key={article.key} title={article.title} subtitle={article.subtitle} description={article.description} link={article.key}/>
                ))}
            </div>
        </div> 
    </div>
  )
}
export default Article_List