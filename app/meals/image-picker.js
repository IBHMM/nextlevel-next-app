"use client";
import classes from './image-picker.module.css'
import { useRef, useState } from 'react';
import Image from "next/image";

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event) {
        const image = event.target.files[0];

        if (!image) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(image); 
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {
                        pickedImage && 
                        <Image 
                            src={pickedImage}
                            alt="The image selected by user"
                            fill
                        />
                    }
                </div>
                <input 
                    className={classes.input}
                    type='file'
                    id={name} 
                    accept='image/png, image/jpeg' 
                    name={name} 
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button onClick={handlePickClick} type="button" className={classes.button}>
                    Pick an image
                </button>
            </div>
        </div>
    )
}
