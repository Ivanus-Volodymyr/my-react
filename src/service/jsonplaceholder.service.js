const getUsers=()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(resolve=>resolve.json())
}

const getUserById = (id)=>{
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(resolve=>resolve.json())
}

const getPosts = ()=>{
   return  fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resolve=>resolve.json())
}
export const jsonPlaceholder={
    getUsers,
    getUserById,
    getPosts
}