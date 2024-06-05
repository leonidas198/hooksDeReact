import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);

  return (
    <>
      <section style={{ height: 200 }}>
        <h2 ref={pRef} className="text-capitalize">
          #{id}-{name}{" "}
        </h2>

        {/* imagenes  */}
        <div>
          {sprites.map((sprites) => (
            <img key={sprites} src={sprites} alt={name} />
          ))}
        </div>
      </section>
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
