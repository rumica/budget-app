export default (state, action) => {
    switch(action.type){
        case 'DELETE_ACTION':
        return {
            ...state,
            transactions: state.transactions.filter(item => item.id !== action.payload)
        }

        case 'ADD_EXPENSE':
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
        default:
            return state;
    }
}