
 export interface ICredentials{
  access:string;
  refresh:string;
}

export interface ITask {
  
    id: string; 
    is_pinned: boolean; 
    is_archived: boolean; 
    is_text: boolean; 
    reminder: string;
    is_reminder_seen:boolean; 
    title: string; color: string;
    todos: { id: string; content: string; is_completed: boolean; note_id: string }[];
  
  }

export interface IReminder 
{
  id : string;
  title : string;
  // reminder : string;
  reminder: string;
}


export interface Todo 
{
  id : string;
  content: string;
  is_completed : string;
  note_id : string
}

  // for(let task of this.taskList)
  //         {
  //           if(task.id === task_id)
  //           {
  //             task.color = changedcolor
  //           }
  //         }