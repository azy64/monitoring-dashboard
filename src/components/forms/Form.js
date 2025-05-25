import React, { useCallback, useState } from "react";

const Form = React.memo(({ subject, onChangeHandler, objectFormType, saveHandler, title }) => {
    const [errors, setErrors] = useState({});
    const validate = useCallback(() => {
        let isValid = true;
        const newErrors = {};
        Object.keys(subject).map(field => {
            if (objectFormType[field]?.required && !subject[field]) {
                newErrors[field] = `${objectFormType[field] ? objectFormType[field]?.label : field} is required`;
                isValid = false;
            }
        });
        setErrors(newErrors);
        return isValid;
    })
    const submitHandler = useCallback((e) => {
        e.preventDefault();
        if (validate()) {
            saveHandler()
        }
    })
    return (

        <div>
            <h3>{title}</h3>
            <form className="md-8 m-3" onSubmit={submitHandler}>
                {
                    Object.keys(subject).map((element,indice) => (
                        subject[element] === null ? null :
                            <div key={objectFormType[`${element}`]?objectFormType[`${element}`]?.id:(indice+1+Math.random()+(new Date).getTime())} className="md-12 text-start">
                                <label className="form- md-12 p-1 text-capitalize fw-medium" htmlFor={element}>
                                    {objectFormType[element] ? objectFormType[element]?.label : element}
                                </label>
                                <div className="">
                                    {
                                        objectFormType[`${element}`]?.type === "select" ?
                                            (<>
                                                <select onChange={onChangeHandler} className="form-control" data-source={element}>

                                                    {subject[`${element}`].map((option, indice) => (
                                                        <option key={option.value + indice} value={option.id}> {option.value}</option>
                                                    ))}
                                                </select>
                                            </>)
                                            :
                                            (
                                                <>
                                                    <input type={objectFormType[element] ? objectFormType[element]?.type : "text"} data-source={element}
                                                        id={element}
                                                        className="form-control"
                                                        checked={objectFormType[element]?.type === "radio" && subject[element] === "true" ? true : false}
                                                        disabled={objectFormType[element] ? objectFormType[element]?.disable : false}
                                                        value={subject[element] ? subject[element] : ""}
                                                        onChange={onChangeHandler}
                                                        title={objectFormType[element] ? objectFormType[element]?.title : element}
                                                        required={objectFormType[element] ? objectFormType[element]?.required : element}
                                                    />
                                                    {errors[element] && <span style={style.error}>{errors[element]}</span>}
                                                </>
                                            )

                                    }

                                </div>
                            </div>

                    ))
                }
                <div className="m-3">
                    <button className="btn btn-danger">Enregister</button>
                </div>
            </form>
        </div>
    )
});
const style = {
    error: {
        color: "red"
    }
}
export default Form;