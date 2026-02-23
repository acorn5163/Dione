import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

type Params = {
  id: string;
};

function Article_View() {
    const { id } = useParams<Params>();
    const [html, setHtml] = useState("");

    useEffect(() => {
        fetch(`/public/${id}.html`)
        .then((res) => res.text())
        .then((data) => {
            setHtml(data);
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            let headers:Array<[string,string]> = [];
            let rawheaders = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
            rawheaders.forEach((el) => {
                headers.push([el.localName,el.textContent])
            })
            headers.map(([a,b]) => console.log(a,b)
        )
        });
    }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );

}
export default Article_View