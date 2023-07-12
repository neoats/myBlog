import React, { useRef, useState, useEffect } from "react";
import {submitComment} from '../services';
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  
  useEffect(() => {
  
      nameEl.current.value = window.localStorage.getItem('name');
      emailEl.current.value = window.localStorage.getItem('email');
    
  }, []);
  
  const handleCommentSubmission=()=>{
    setError(false);
    const{value:comment}=commentEl.current;
    const{value:name} = nameEl.current;
    const{value:email} = emailEl.current;
    const{checked:storeData} = storeDataEl.current;
    if(!comment|| !nameEl ||!emailEl){
      setError(true);
      return ;
    } 
    const commentObj = {name,email,comment,slug};
    if(storeData){
      window.localStorage.setItem('name',name);
      window.localStorage.setItem('email',email);
    }
    else {
      window.localStorage.setItem('name',name);
      window.localStorage.setItem('email',email);
  }
  submitComment(commentObj)
  .then((res) => {
    if (res.createComment) {
      if (!storeData) {
        formData.name = '';
        formData.email = '';
      }
      formData.comment = '';
      setFormData((prevState) => ({
        ...prevState,
        ...formData,
      }));
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  });
};
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-300 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input
          ref={nameEl}
          className="py-2 pl-2 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-300 text-gray-700"
          placeholder="Name"
          name="name"
        />
          <input
          ref={emailEl}
          className="py-2 pl-2 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-300 text-gray-700"
          placeholder="Email"
          name="name"
        />

      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">   
      <div>
        <input ref={storeDataEl} type="checkbox" id="storedData" name="storeData"/>
        <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Mail Adresimi kayıt et</label>
      
      </div>
      </div>

         {error && <p className="text-xs text-red-500">Bütün alanlar doldurulmalı</p>}
      <div className="mt-8">
        <button 
        type="button"
         onClick={handleCommentSubmission}
         className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
         >
          Yorum Ekle
        </button>
        {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Yorum eklendi</span>}
      </div>
    </div>
  );
  }

export default CommentsForm;
