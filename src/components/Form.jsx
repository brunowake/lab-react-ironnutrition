import { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleChangeNumber(event) {
    setFormData({
      ...formData,
      [event.target.name]: Number(event.target.value),
    });
  }

  return (
    <form>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={formData.name}
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Number of Calories</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            onChange={handleChangeNumber}
            name="calories"
            value={formData.calories}
          />
        </div>
      </div>
      <div className="field mb-5">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            value={formData.image}
            name="image"
            onChange={handleChange}
          />
        </div>
        <button
          className="button is-link"
          onClick={(event) => {
            event.preventDefault();
            props.onClick(formData);
          }}
        >
          {' '}
          +
        </button>
      </div>
    </form>
  );
}

export default Form;
