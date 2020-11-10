export const addNote = (objNote) => {
    return { type: "addNotes", objNote: objNote };
};

export const editNote = (objNote) => {
    return { type: "editNote", objNote: objNote };
};

export const deleteNote = (noteId) => {
    return { type: "deleteNote", id: noteId };
};