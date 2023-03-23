import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => { 
    return {
    type: POPULATE,
    produce: produceData
}}

export default function produceReducer( state = {}, action) {
    const newState = {...state}
    
    switch (action.type) {
        case POPULATE:
            action.produce.forEach(produce => {
                newState[produce.id] = produce
            })
            return newState
        default: 
            return state;
    }
}

