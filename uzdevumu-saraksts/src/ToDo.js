

function ToDo(props) {
//   const stundasJSX = props.stundas.map((stunda, i) => {
//     return <Stunda key={i} nosaukums={stunda} />
//   });

  return (
  <>
    <h2>{props.userId}</h2>
    <input type="radio" name="pencil" checked={props.checkedornoter}>{props.title}</input>
  </>
  )
};

export default ToDo;

// Kā uztaisīt stundas otrdienai?
// Trešdienai?