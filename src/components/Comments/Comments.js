import React, {useEffect, useState} from 'react';

import '../../App.css';
import Comment from "../Comment/Comment";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(resolve => resolve.json())
            .then(comments => setComments(comments))
    }, [])
    return (
        <div className={'Comments'}>
            {comments.map(value => <Comment postId={value.postId}
                                            id={value.id}
                                            name={value.name}
                                            email={value.email}
                                            body={value.body}
                />
            )}
        </div>
    );
};

export default Comments;