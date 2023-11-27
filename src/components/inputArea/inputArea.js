import react from 'react';
import { rows } from '../../constants/buttons';

const InputArea = () => {
    const buttons = [];

    rows.forEach(row => {
        {buttons.push(
            <p>
                {row.map(button => <button>{button}</button>)}
            </p>

        )};
    });
    return (
        // rows.forEach(row => (<p>1</p>))
        <div>{buttons}</div>
    );
};

export default InputArea;