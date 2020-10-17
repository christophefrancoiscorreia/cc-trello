const intitialState = [
    {
        title: "My first list",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we create a static list and a static text"
            },
            {
                id: 1,
                text: "another text card"
            },
        ]
    },
    {
        title: "Another list",
        id: 1,
        cards: [
            {
                id: 0,
                text: "we create a static list and a static text"
            },
            {
                id: 1,
                text: "another text card"
            },
        ]
    }
]

const listsReducer = (state = intitialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listsReducer;