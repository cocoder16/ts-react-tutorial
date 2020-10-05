import React, { useState, useRef } from 'react';

type MyFormProps = {
    onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    const firstInputRef = useRef<HTMLInputElement>(null);

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        });
        if (!firstInputRef.current) {
            return
        } else {
            firstInputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            name: <input name="name" value={name} onChange={onChange} ref={firstInputRef} /><br/>
            description: <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;