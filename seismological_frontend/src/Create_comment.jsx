import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Create_comment.css';

const CreateComment = () => {
    const { id } = useParams();
    const [text, setText] = useState('');
    const [commentSent, setCommentSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/features/create_comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            id: id, 
            body: text,
          },
        }),
      }); 
      if (response.ok) {
        console.log('Comentario creado exitosamente');
      } else {
       
        console.error('Error', response.statusText);
      } setCommentSent(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="general">
      <h2>Create comment</h2>
      {commentSent ? (
                <div className='general_container_successmessage'>
                  <div className='comment'>
                    <h3>¡Thank you for your comment!</h3>
                    <p>¡Bye!</p>
                    <Link to="/"><button className='button_return_hp'> Return to Homepage </button></Link></div>
                </div>
            ) : (
                <div>
                  <div className='test'>
                    <form className="form_container_comment" onSubmit={handleSubmit}>
                        <label className="form_label">Write here your comment</label><br/>
                        <textarea 
                            required
                            className="textarea_form"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        /><br />
                        <button className="button_form" type="submit">Send comment</button>
                    </form>
                  </div>
                </div>
            )}
    </div>
  );
};

export default CreateComment;
