import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";

function MovieSortingForm({
  sorting,
  setSorting,
  direction,
  setDirection,
  options,
  defaultOption,
}) {
  const history = useHistory();

  // Sync query with form values.
  useEffect(() => {
    if (sorting == null) {
      setSorting(defaultOption);
      return;
    }

    if (direction == null) {
      setDirection("Ascending");
      return;
    }

    history.push({ search: `sorting=${sorting}&direction=${direction}` });
  }, [sorting, setSorting, defaultOption, direction, setDirection, history]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>
          <h5>Sort by</h5>
        </Form.Label>
        <Form.Control
          as="select"
          custom
          className="shadow-sm"
          size="lg"
          value={sorting}
          onChange={(event) => setSorting(event.target.value)}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="select"
          custom
          className="shadow-sm"
          size="lg"
          value={direction}
          onChange={(event) => setDirection(event.target.value)}
        >
          <option>Ascending</option>
          <option>Descending</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default MovieSortingForm;
