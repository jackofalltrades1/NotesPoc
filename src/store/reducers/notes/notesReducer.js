const initialState = {
    notesList : []
};

const UserReducer = (state, action) => {
    state = state || initialState;
    switch (action.type) {
        case "addNotes":
            return {
                ...state,
                notesList: [...state.notesList, action.objNote]
            };
            break;

        case "editNote":
            return {
                ...state,
                notesList: state.notesList.map(
                    (note, i) => note.id === action.objNote.id ? {
                        ...note, title: action.objNote.title,
                        descrip: action.objNote.descrip
                    }
                        : note)
            };
            break;
        case "deleteNote":
            return {
                ...state,
                notesList: state.notesList.filter(s => s.id !== action.id)
            };
            break;
    }

    return state;
};

export default UserReducer;