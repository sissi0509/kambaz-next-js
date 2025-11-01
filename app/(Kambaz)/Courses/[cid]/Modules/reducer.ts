import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}
export interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
  editing?: boolean;
}

const initialState = {
  modules: modules,
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules.push(newModule);
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
