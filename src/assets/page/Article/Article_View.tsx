import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Index from '../../component/Article_View/Index'

type Params = {
  id: string;
};

function Article_View() {
  const { id } = useParams<Params>();
  const [html, setHtml] = useState("");
  const [headers, setHeaders] = useState<Array<[string, string]>>([]);

  useEffect(() => {
    if (!id) return;

    fetch(`/${id}.html`)
      .then((res) => res.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        const rawheaders = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

        const newHeaders: Array<[string, string]> = [];

        rawheaders.forEach((el) => {
          const text = el.textContent ?? "";
          const headerId = `${el.localName}_${text}`;
          el.id = headerId;
          newHeaders.push([headerId, text]);
        });

        setHeaders(newHeaders);
        setHtml(doc.body.innerHTML);
      });
  }, [id]);

  return (
    <>
    <div className='row'>
      <div className='col-3'>
        <Index chapters={headers} />
      </div>
      <div className='col-9'>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
    </>

  );
}
export default Article_View