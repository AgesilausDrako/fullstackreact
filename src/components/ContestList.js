import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick}) =>(   
    <div>
        {contests.map(contest =>
            <ContestPreview 
                key={contest.id} 
                onClick={onContestClick}
                {...contest} />
        )}   
    </div>
);

export default ContestList;