function TodayFoods(props) {
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.todayFoods.map((element, index) => (
          <li key={index}>
            {element.quantity} {element.name} ={' '}
            {element.quantity * element.calories} cal
            <button
              className="ml-3 button is-danger"
              onClick={(event) => {
                props.trashFood(index);
              }}
            >
              trash
            </button>
          </li>
        ))}
      </ul>
      <strong>
        Total:{' '}
        {props.todayFoods.reduce((acc, current) => {
          return acc + current.quantity * current.calories;
        }, 0)}{' '}
        cal
      </strong>
    </div>
  );
}

export default TodayFoods;
