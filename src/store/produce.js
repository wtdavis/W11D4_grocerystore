import produceData from '../mockData/produce.json'

export default function produceReducer( state = {}, action) {
    switch (action.type) {
        default: 
            return state;
    }
}

const POPULATE = 'produce/POPULATE';

export const populateProduce = produce => { 
    return {
    type: POPULATE,
    produce: produceData
}}