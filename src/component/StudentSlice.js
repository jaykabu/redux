import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
    name: 'student',
    initialState: {
        student: null,
    },
    reducers: {
        studentForm: (state, action) => {
            state.student = action.payload;
        },
    },
});
export default slice.reducer
// Actions
const { studentForm } = slice.actions
export const login = ({ username, password }) => async dispatch => {
    try {
        dispatch(studentForm({username}));
    } catch (e) {
        return console.error(e.message);
    }
}
export const logout = () => async dispatch => {
    try {
        // const res = await api.post('/api/auth/logout/')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}