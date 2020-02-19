import React from 'react';

export const Input = ({input, meta, ...props}) => {

const hasError = meta.touched && meta.error;

return (
<>
    <input {...input} {...props} className={"form-control" + ' ' + 
        (hasError ? "is-invalid" : "" )} />
    { hasError &&
    <div className="invalid-feedback">
        Required field
    </div> }
</>

)
}