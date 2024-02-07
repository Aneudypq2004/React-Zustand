import { StateCreator, create } from "zustand";
import { Task, TaskStatus } from "../../interfaces";
import {v4 as uuidv4} from 'uuid';

interface ITaskState {

    tasks: Record<string, Task>;

    draggingTaskId?: string;

    getTaskByStatus: (status: TaskStatus) => Task[];

    setDraggingTaskId: (taskId: string) => void;

    removeDraggingTaskId: () => void;

    changeProgress: (taskId: string, status: TaskStatus ) => void;

    onTaskDrop: (taskStatus: TaskStatus) => void;

    addTask: (title: string, status: TaskStatus) => void
}

const taskApi: StateCreator<ITaskState> = (set, get) => ({

    draggingTaskId: undefined,

    setDraggingTaskId(taskId) {
        return set({ draggingTaskId: taskId })
    },

    removeDraggingTaskId() {

        return set({draggingTaskId: undefined})    
    },

    tasks: {
        'ABC-1': { id: "ABC-1", title: "Task 1", status: 'in-progress' },
        'ABC-2': { id: "ABC-2", title: "Task 2", status: 'done' },
        'ABC-3': { id: "ABC-3", title: "Task 3", status: 'open' },
        'ABC-4': { id: "ABC-4", title: "Task 5", status: 'in-progress' }
    },

    getTaskByStatus: (status: TaskStatus) => {

        return Object.values(get().tasks).filter(task => task.status === status);
    },

    changeProgress: (taskId: string, status: TaskStatus ) => {

        const task = get().tasks[taskId];
        task.status = status;

        set(state => ({
            tasks: {...state.tasks, [taskId]: task}
        }));
    },

    onTaskDrop: (taskStatus: TaskStatus) => {

        const taskId = get().draggingTaskId;

        if( !taskId) return;

        get().changeProgress(taskId, taskStatus);
        get().removeDraggingTaskId();
    },

    addTask: (title: string, status: TaskStatus) => {

        const newTask = {id: uuidv4(), title, status};

        set(state =>({
            tasks: {
                ...state.tasks,
                [newTask.id]: newTask 
            }
        }))


    }    
}
);

export const useTaskStore = create<ITaskState>()(
    taskApi
)