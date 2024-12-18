

function Map() {
  let arr = ["pavan", "sai", "bhargav","one","two","three"];

  return (
    <div>
      <h1>Map Concept in React</h1>
      <ol>
        {
            arr.map((Element,index)=>{
                return <li key={index}> {Element}</li>;
            })
        }
      </ol>
    </div>
  );
}

export default Map;
