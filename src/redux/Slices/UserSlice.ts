import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { addDoc, collection } from 'firebase/firestore';
import swal from "sweetalert";

type CounterState = {
  userID: string;
};

const initialState: CounterState = {
  userID: ''
};

const tbl = collection(db, 'users');

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      const { email, password, username, navigate } = action.payload;
      
      if (!email || !password || !username) {
        swal('Please fill in all fields',"","warning")
        return;
      }

      createUserWithEmailAndPassword(auth, email, password).then(() => {
          addDoc(tbl, {
            email,
            displayName: username
          });
          navigate('/');
        })
        .catch(error => {
          swal("Already register user", "Invalid", "error");
        });
    },
    loginUser: (state, action) => {
      const { email, password, navigate } = action.payload;
      
      if (!email || !password) {
        swal('Please fill in all fields',"","warning")
        return;
      }

      signInWithEmailAndPassword(auth, email, password).then(() => {navigate('/layout')}).catch(error => {
         swal("Please enter valid email and password", "Invalid", "error");
        });
        const data:any = auth.currentUser?.uid;
        localStorage.setItem('Uid', data)
    },
    setData: (state, action) => {
      state.userID = action.payload;
    }
  }
});

export default UserSlice.reducer;

export const { register, loginUser, setData } = UserSlice.actions;
