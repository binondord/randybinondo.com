import { useState, useEffect } from 'react';
import { app, database } from '@/services/firebase';
import signin from '@/services/firebase/facebook';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const dbInstance = collection(database, 'notes');

const Auth = ({ getSingleNote }) => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const [notesArray, setNotesArray] = useState([]);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'binondord@gmail.com', 'B0X42!!!')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('user: ', user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    /*createUserWithEmailAndPassword(auth, 'binondord@gmail.com', 'B0X42!!!')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log('user: ', user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  */

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;

      console.log('user is signed in.');
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

    const addDesc = (value: any) => {
        setNoteDesc(value)
    }

    const saveNote = () => {
        addDoc(dbInstance, {
            noteTitle: noteTitle,
            noteDesc: noteDesc
        })
            .then(() => {
                setNoteTitle('')
                setNoteDesc('')
                getNotes();
            })
    }

    const getNotes = () => {
        getDocs(dbInstance)
            .then((data: {docs: any}) => {
                console.log('data: ', data);
                setNotesArray(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }));
            })
    }

    useEffect(() => {
        //getNotes();
    }, [])

    return (
        <>Sample
            <input placeholder='Enter the Title..'
                    onChange={(e) => setNoteTitle(e.target.value)}
                    value={noteTitle}
                />
                <button
                    onClick={saveNote}>
                    Save Note
                </button>

                <button
                    onClick={() => signin()}>
                    Signin
                </button>

                <div>
                    {notesArray.map((note: {id: string, noteTitle: string}, idx) => {
                        return (
                            <div key={idx}
                                onClick={() => getSingleNote(note.id)}>
                                <h4>{note.noteTitle}</h4>
                            </div>
                        )
                    })}
                </div>
        </>
    );
};

export default Auth;