import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const MyDropzone = (props) => {
    const onDrop = useCallback(acceptedFiles => {
        props.setTouched(props.name);
        return props.setFieldValue(props.name, acceptedFiles[0])
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()}/>
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default MyDropzone;
