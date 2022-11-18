import React, { useContext } from 'react'
import './Authentication.css'
import addphoto from '../images/addphoto.svg'
import { Link } from 'react-router-dom';
import { LoginContext } from './Contexts/LoginContext'


function Authentication() {
    const { setName, setImage, image, setNameEntered, setisUploaded, isUploaded, nameEntered, } = useContext(LoginContext)

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()

            reader.onload = function (e) {
                setImage(e.target.result)
                setisUploaded(true)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    function handleNameChange(e) {
        setName(e.target.value)
        setNameEntered(e.target.value.length >= 1 ? true : false)
    }

    return (
        <div className='authentication'>
            <h1>Get Started</h1>
            <p>add a photo</p>
            <div className='image-box'>
                {
                    isUploaded ? (
                        <img className='uploaded-img' src={image} alt='uploaded-img'></img>
                    ) : (
                        <>
                            <label htmlFor='upload-input'> <img alt='add-photo' src={addphoto}></img> </label>
                            <input id='upload-input' type='file' onChange={handleImageChange}></input>
                        </>
                    )
                }
            </div>
            <div className='name-input'>
                <label htmlFor='name'>fill in your name</label>
                <input placeholder='your name' type='text' name='name' id='name' onChange={handleNameChange}></input>
            </div>
            <div className='sign-in-container'>
                <Link className={isUploaded && nameEntered ? 'sign-in-enabled' : 'sign-in-disabled'} to={isUploaded && nameEntered ? 'todos' : null}> Sign In </Link >
            </div>
        </div>
    )
}

export default Authentication