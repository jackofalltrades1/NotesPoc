import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

export default function NotesList(props) {
    let objNotesList = props.objNotesList;

    return (
        <div className="col-md-4 left-col notesList">
            {(objNotesList === undefined || objNotesList.length < 1) && <p className="no-list">No Notes found</p>}
            {objNotesList !== undefined && objNotesList.map((note, id) => (
                <ListGroup>
                    <ListGroup.Item action onClick={() => props.loadNote(note.id)}>
                        <h3>{note.title}</h3>
                        <p>{note.descrip}</p>
                    </ListGroup.Item>
                    <Button className="list-remove-btn" onClick={() => props.deleteNotes(note.id)}>X</Button>
                </ListGroup>
            ))
            }
        </div>
    );
}