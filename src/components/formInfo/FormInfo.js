import './formInfo.css';
import React, { useContext } from 'react';
import { AppContext } from '../../server/AppContext';
import ContainerButtons from '../containerButtons/ContainerButtons';

function FormInfo() {
    const { formFields, setFormData, handleInputChange, handleSave } = useContext(AppContext);
    return (
        <>
            <div className='forms'>
                <div className="form-container form-content">
                    <form className="form-elements" onSubmit={handleSave}>
                        {formFields.map((field) => (
                            <div key={field.name} className={`form-field form-field-${field.name}`}>
                                <label htmlFor={field.name} className={`form-label  form-label-${field.name}`}>
                                    {field.label}
                                </label>
                                {
                                    field.type === 'checkbox' ? (
                                        <input
                                            type="checkbox"
                                            id={field.name}
                                            name={field.name}
                                            className="form-input form-input-checkbox"
                                            checked={setFormData[field.name]}
                                            onChange={handleInputChange}
                                        />
                                    ) : field.type === 'radio' ? (
                                        field.options.map((option) => (
                                            <div key={option} className={`form-radio-group${field.name}`}>
                                                <input
                                                    type="radio"
                                                    id={`${field.name}${option}`}
                                                    name={field.name}
                                                    value={option}
                                                    className="form-input form-input-radio"
                                                    checked={setFormData[field.name] === option}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor={`${field.name}${option}`} className={`form-label  form-label-${field.name}`}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))
                                    ) : field.type === 'select' ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            className={`form-input-select form-input-${field.name}`}
                                            value={setFormData[field.name]}
                                            onChange={handleInputChange}
                                        >
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            id={field.name}
                                            name={field.name}
                                            className={`form-input form-input-${field.name}`}
                                            value={setFormData[field.name]}
                                            onChange={handleInputChange}
                                        />
                                    )
                                }
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <ContainerButtons />
        </>
    );
}
export default FormInfo;
