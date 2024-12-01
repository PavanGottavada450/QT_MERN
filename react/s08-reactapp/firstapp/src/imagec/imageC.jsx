import "./ImageC.css"
import {useState} from "react"

function ImageC(){

    var [State,setState] = useState("https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png")

    function node(){
        setState("https://www.gartner.com/imagesrv/peer-insights/vendors/logos/node.png");

    }
    function reactj(){
        setState("https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png");

    }

    return(
        <div className="image">
            <img 
            src= {State} 
            alt="ReactJs"
            width= "300px"
            height="300px"
            />
            <br />
            <button onClick={node}>NodeJs</button>
            <button onClick={reactj}>ReactJs</button>
        </div>
    )
}

export default ImageC;