import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";
import Button from "react-bootstrap/Button";

const Card = ({title, description, backgroundSrc, className, handleClick, isAvailable}) => {
    return (
        <div
            className={cn({
                [styles.cardWrapper]: true,
                [className]: !!className,
            })}
        >
            <div className={styles.card}>
                <h4
                    className={cn({
                        [styles.title]: true,
                    })}
                >
                    {title}
                </h4>
                <p
                    className={cn({
                        [styles.description]: true,
                    })}
                >
                    {description}
                </p>
            </div>

            <div className={styles.footer}>
                <Button variant="primary" onClick={handleClick} disabled={!isAvailable}>
                    {isAvailable ? "Присоединиться" : "В разработке"}
                </Button>
            </div>
        </div>
    );
};

export default Card;
