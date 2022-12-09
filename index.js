const Box = props => {
  //  Write your code here.
  const {name} = props;
  return { 
      <h1>
          {name}
      </h1>
  };
}; 
const Greetings = () => (
    <div>
      <Box />
    </div>
    <div>
      <Box/>
    </div> 
    <div>
      <Box/>
    </div>

    
)

const element = (
  //  Write your code here. 
  <div>
      <h1 Classname = greeting>
          Boxes 
      </h1>

  </div>
)

ReactDOM.render(element, document.getElementById("root"));
