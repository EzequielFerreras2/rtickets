import React from 'react';
import { getTypeDataBase } from '../../store/slices/cases/thunks';

const Cases = () => {

    getTypeDataBase();

    return (
        <div>
            <h1>Cases</h1>
        </div>
    );
}

export default Cases;
