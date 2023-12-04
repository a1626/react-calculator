import react from 'react';
import { rows } from '../../constants/buttons';
import './inputArea.css';

const InputArea = () => {
    const buttons = [];

    rows.forEach(row => {
        {buttons.push(
            <>
                {row.map(button => <button className="button">{button}</button>)}
            </>

        )};
    });
    return (
        <div className="buttons_container">{buttons}</div>
    );
};

export default InputArea;