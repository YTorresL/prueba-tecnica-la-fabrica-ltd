import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAyW6zak79bN60RM4aNJdvWIUeknHk59vw',
  authDomain: 'engineering-app-3b28f.firebaseapp.com',
  projectId: 'engineering-app-3b28f',
  storageBucket: 'engineering-app-3b28f.appspot.com',
  messagingSenderId: '931513374421',
  appId: '1:931513374421:web:f87902ee28abb37eb8b45c',
  measurementId: 'G-TDP7KEBLNS'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const addQr = ({
  type,
  file,
  backgroundColor,
  buttonColor,
  company,
  pdfTitle,
  description,
  website,
  button
}) => {
  try {
    return db.collection('qr').add({
      type,
      file,
      backgroundColor,
      buttonColor,
      company,
      pdfTitle,
      description,
      website,
      button,
      createAt: firebase.firestore.Timestamp.fromDate(new Date())
    })
  } catch (error) {
    console.error('Error adding document: ', error)
  }
}

export const uploadFile = (file) => {
  const storageRef = firebase.storage().ref(`qr/${file.name}`)
  const task = storageRef.put(file)
  return task
}

export const updateQr = (id, data) => {
  try {
    return db.collection('qr').doc(id).update(data)
  } catch (error) {
    console.error('Error updating document: ', error)
  }
}
