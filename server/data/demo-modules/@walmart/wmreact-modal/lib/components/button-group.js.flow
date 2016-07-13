/* eslint-disable func-style */
import React, {PropTypes, Children} from "react";

const scope = "modal_button-group";

const styles = {
  container: `${scope}_container`,
  arrange: `${scope}_arrange`,
  arrangeFill: `${scope}_arrange-fill`
};

export default function ModalButtonGroup({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.arrange}>
        {Children.toArray(children).map((button, i) => (
          <div className={styles.arrangeFill} key={i}>{button}</div>
        ))}
      </div>
    </div>
  );
}

ModalButtonGroup.propTypes = {
  children: PropTypes.node
};
