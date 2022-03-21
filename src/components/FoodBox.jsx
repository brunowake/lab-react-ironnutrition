import { useState } from 'react';

function FoodBox(props) {
  const { name, calories, image, quantity } = props.food;

  const [counter, setCounter] = useState(0);

  function handleChange(event) {
    setCounter(Number(event.target.value));
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                type="number"
                className="input"
                min={0}
                value={counter}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={(event) => {
                  props.onFoodAdd({ ...props.food, quantity: counter });
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
