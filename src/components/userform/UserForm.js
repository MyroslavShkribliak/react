import {useForm} from "react-hook-form";

import {userService} from "../../service";
const UserForm = ({setUsers}) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'all',
    });

    const submit = (obj) => {
        userService.create(obj).then(({data}) => setUsers(users => [...users, data]))
    };

    return (
        <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
            <input type="text" placeholder={'name'} {...register('name', {
                required: true,
                minLength: {value: 2, message: 'min 2 ch'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'surname'} {...register('surname', {valueAsNumber: true})}/>
            {errors.surname && <span>{errors.surname.message}</span>}
            <input type="text" placeholder={'email'} {...register('email', {valueAsNumber: true})}/>
            <button disabled={!isValid}>Click</button>
        </form>
    );
};

export {UserForm};