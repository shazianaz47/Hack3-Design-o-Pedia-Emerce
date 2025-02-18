"use client"
import React, {useState} from 'react'

const CommentBox = () => {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<string[]>([]);

    const addComments = () => {
          if(comment.trim() !==''){
            setComments([...comments, comment]);
            setComment('');
          }
        }

  return (
    <div>
        <h1 className=' mx-10 text-2xl font-bold mt-4 text-blue-700'>
           CommentBox 
        </h1> 
        <input 
            type='text'
            value={comment}
            onChange={(f) => setComment(f.target.value)} 
            placeholder='write your comment here'
            className=' mx-8 w-80 border border-gray-700 p-3 rounded-lg mt-4 hover:bg-pink-300 '
            />
            <br/>
            <button className='bg-blue-200 text-gray-500 mt-3 mx-10 p-2 rounded-lg '
                onClick={addComments}>
                Add Comment
            </button> 
            <div className=' text-blue-700 mt-3 mx-10 p-2 rounded-lg '>
                <h2>
                    All comment:
                </h2>
                {comments.length === 0? (<p>No comment yet.Add your comment Hammad Janjoa</p>):
                <ul>
                {comments.map((data, index)=>(
                <li key = {index}>{data}</li>
                )
                )}
                </ul>
            }
             </div>
    </div>
  )
}

export default CommentBox