// // app/Enrollments/reducer.ts
// "use client";
// import { createSlice } from "@reduxjs/toolkit";
// import * as db from "../Database";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   enrollments: db.enrollments,
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollmentsReducer",
//   initialState,
//   reducers: {
//     enroll: (state, { payload }) => {
//       const { user, course } = payload;
//       const already = state.enrollments.some(
//         (e: any) => e.user === user && e.course === course
//       );
//       if (!already) {
//         state.enrollments.push({
//           _id: uuidv4(),
//           user,
//           course,
//         });
//       }
//     },
//     unenroll: (state, { payload }) => {
//       const { user, course } = payload;
//       state.enrollments = state.enrollments.filter(
//         (e: any) => !(e.user === user && e.course === course)
//       );
//     },
//   },
// });

// export const { enroll, unenroll } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;
