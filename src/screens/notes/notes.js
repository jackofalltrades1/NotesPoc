import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ModalNotification from '../../shared/components/ModalNotification';
import { addNote, editNote, deleteNote } from '../../store/actions/notes/notesAction';
import NotesList from '../notes/components/NotesList';

export default function Notes(props) {

    var isAuth = useSelector(state => state.LoginReducer.isAuth);
    useEffect(() => {
        if (!isAuth)
            props.history.push("/");
    });

    const objReducer = useSelector(state => state.NotesReducer);
    let objNotesList = objReducer.notesList;

    const dispatch = useDispatch();

    const [formValidated, setFormValidated] = useState(false);
    var newNote = {
        id: '',
        title: '',
        descrip: '',
        isNew: true
    };

    const [objNote, setObjNote] = useState(newNote);
    const [objAlert, setObjAlert] = useState({
        show: false,
        title: "",
        msg: "",
    });

    const saveNotes = (event) => {
        debugger;
        event.preventDefault();
        setFormValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            var alertMsg = "";
            if (objNote.isNew) {
                alertMsg = "Note added successfully";

                if (objNotesList.length > 0)
                    objNote.id = objNotesList[objNotesList.length - 1].id + 1;
                else
                    objNote.id = 1;

                dispatch(addNote(objNote));
            }
            else {
                alertMsg = "Note updated successfully";
                dispatch(editNote(objNote));
            }
            setObjNote(newNote);
            setFormValidated(false);
            setObjAlert({
                ...objAlert,
                show: true,
                msg: alertMsg,
                title: "Success"
            });
        }
        event.preventDefault();
    };

    const loadNote = (id) => {
        setFormValidated(true);
        var objNoteIndiv = objNotesList.filter(s => s.id === id)[0];
        objNoteIndiv.isNew = false;
        setObjNote(objNoteIndiv);
    }

    const deleteNotes = (id) => {
        dispatch(deleteNote(id));
        if (id === objNote.id) {
            setObjNote(newNote);
            setFormValidated(false);
        }

        setObjAlert({
            ...objAlert,
            show: true,
            msg: "Note deleted successfully",
            title: "Success"
        });
    }

    const loadNew = () => {
        setObjNote(newNote);
        setFormValidated(false);
    }

    return (
        <div className="main-wrp container-fluid">
            <div className="row notes-block">
                
                <NotesList objNotesList={objNotesList} loadNote={loadNote} deleteNotes={deleteNotes} />
                <div className="col-md-8 right-col notes-form">
                    <div className="col-md-12 form-btn-wrp">
                        <Button variant="primary" type="button" onClick={() => loadNew()}>
                            + Add Note
                            </Button>
                    </div>
                    <div className="col-md-12 form-wrp">
                        <Form autocomplete="off"
                            noValidate
                            validated={formValidated}
                            onSubmit={saveNotes}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Notes Title"
                                    value={objNote.title}
                                    required
                                    min={3}
                                    onChange={(e) => {
                                        if (!formValidated)
                                            setFormValidated(true);
                                        setObjNote({ ...objNote, title: e.target.value });
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please enter notes title
            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Body</Form.Label>
                                <Form.Control type="text" placeholder="Notes description"
                                    as="textarea" rows={8}
                                    value={objNote.descrip}
                                    required
                                    minLength="3"
                                    onChange={(e) => {
                                        setObjNote({ ...objNote, descrip: e.target.value });
                                    }} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter notes description
            </Form.Control.Feedback>
                            </Form.Group>
                            <div className="form-footer">
                                <Button variant="primary" type="submit">Save</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            <ModalNotification
                show={objAlert.show}
                title={objAlert.title}
                msg={objAlert.msg}
                handleClose={() => {
                    setObjAlert({ ...objAlert, show: false })
                }}
            />
        </div>
    );
}