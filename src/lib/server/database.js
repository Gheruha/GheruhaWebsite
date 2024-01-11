const db = new Map();

// So now I need a function that will get my todos(will show them) and also verify if I have an userId or not.
// @ts-ignore
export function getTodos(userid){
    if(!db.get(userid)){
        db.set(userid , [{
            id: crypto.randomUUID() , 
            description : "make to-do website",
            done: false ,
        }])
    }
    return db.get(userid)
}

// Now I need to make a function that will actually make new todos
// @ts-ignore
export function createTodos(userid , description){
    const todos = db.get(userid);
    
    todos.push(
        {
            id: crypto.randomUUID() ,
            description: description ,
            done: false
        })
}