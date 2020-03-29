export interface Message {
    text: string;
    person: 'guesser' | 'puzzler';
}

// Types of data storages for tasks output

interface Task {
    taskId: number;
    delay: {
      delayDuration: number;
      baseDate: Date;
    }
  }
  
  interface TaskTimeSlot {
    invokeIn: number; // string || date??
    tasks: Task[];
  }
  
  interface TaskByTime {
    today: TaskTimeSlot[];
    daily: TaskTimeSlot[];
    weekly: TaskTimeSlot[];
    monthly: TaskTimeSlot[];
    yearly: TaskTimeSlot[];
  }
  
  // Type for task storing
  
  interface TaskStorage {
    tasksById: {
      [key: number]: Task //not that task from tasks-output fix name collisions.
    }
  }