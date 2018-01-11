import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick}) =>(   
    <div>
        {Object.keys(contests).map(contestId =>
            <ContestPreview 
                key={contestId} 
                onClick={onContestClick}
                {...contests[contestId]} />
        )}   
    </div>
);

export default ContestList;