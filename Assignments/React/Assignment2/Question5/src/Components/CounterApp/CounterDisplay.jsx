
function counterDisplay({count}) {

  const getColor = () => {
    if (count > 0) return "green";
    if (count < 0) return "red";
    return "black";
  };

  return (
    <h1 style={{color: getColor()}}>
        {count}
    </h1>
  );
}

export default counterDisplay;