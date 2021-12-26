import React from 'react'
import { useParams } from 'react-router-dom'
import Form from '../Form/Form'
const EditWrapper = () => {
    const { id } = useParams()
    return <Form id={id} />
}

export default EditWrapper