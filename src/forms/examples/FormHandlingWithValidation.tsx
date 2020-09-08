import React, {useState} from "react";
import {createUserAsync, newEmptyUserAttributes, User, UserAttributes} from "../../shared/user/UserService";
import {FormProvider, useForm} from "react-hook-form";
import {ExampleInfo} from "../../shared/ExampleInfo";
import {GenderSelectControl} from "../components/GenderSelectControl";
import {CreatedUsersList} from "../components/CreatedUsersList";
import {USER_VALIDATION_SCHEMA} from "../../shared/user/UserValidationSchema";
import {TextInput} from "../components/TextInput";
import {yupResolver} from "@hookform/resolvers";

export default function FormHandlingWithValidation() {

  const [createdUsers, setCreatedUsers] = useState<User[]>([]);

  const formMethods = useForm<UserAttributes>({
    defaultValues: newEmptyUserAttributes(),
    resolver: yupResolver(USER_VALIDATION_SCHEMA),
    mode: 'onTouched' // or use 'onBlur'
  });
  const { handleSubmit, formState, reset } = formMethods;
  const { isSubmitting } = formState;

  const createUser = async(values: UserAttributes) => {
    try {
      const result = await createUserAsync(values);
      setCreatedUsers(createdUsers.concat(result));
      reset();
    } catch (e) {
      alert(`Error: ${JSON.stringify(e)}`);
    }
  };

  return (
      <div>
        <ExampleInfo nr={2}>
          This example builds upon the above example, but includes also frontend validation using Yup, and shows how to create custom input elements.
        </ExampleInfo>

        <div style={{ padding: '15px', float: 'left'}}>
          <FormProvider {...formMethods}>
            <form>
              <TextInput name="name" label="Fullname"/>
              <TextInput name="email" label="Email" size={50}/>
              <GenderSelectControl name="gender"/>
              <div>
                <button onClick={handleSubmit(createUser)} disabled={isSubmitting}>Speichern</button>
              </div>
            </form>
          </FormProvider>
        </div>

        <div style={{ padding: '15px', float: 'right'}}>
          <CreatedUsersList users={createdUsers} />
        </div>

      </div>
  );
}