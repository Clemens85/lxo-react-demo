import {ExampleInfo} from "../../shared/ExampleInfo";
import React, {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {createUserAsync, newEmptyUserAttributes, User, UserAttributes} from "../../shared/user/UserService";
import {GenderSelectControl} from "../components/GenderSelectControl";
import {CreatedUsersList} from "../components/CreatedUsersList";
import {Callout} from "../../shared/Callout";
import {isStringEmpty} from "../../shared/Utils";

export function FormHandlingBasic() {

  const [createdUsers, setCreatedUsers] = useState<User[]>([]);
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string|null>(null);

  const formMethods = useForm<UserAttributes>({
    defaultValues: newEmptyUserAttributes(),
    mode: 'onBlur'
  });
  const { handleSubmit, register, formState, reset } = formMethods;
  const { isSubmitting } = formState;

  const createUser = async(values: UserAttributes) => {
    try {
      const result = await createUserAsync(values);
      setCreatedUsers(createdUsers.concat(result));
      reset();
      setSubmitErrorMessage(null);
    } catch (e) {
      setSubmitErrorMessage(JSON.stringify(e));
    }
  };

  return (
      <div>
        <ExampleInfo nr={1}>
          This example shows some very basic usage of react-hook-form library. <br/>
          If you try e.g. to save a user without name then a global error will be shown.
        </ExampleInfo>

        <div style={{ padding: '15px', float: 'left'}}>

          <Callout show={!isStringEmpty(submitErrorMessage)} severity="WARNING">{submitErrorMessage}</Callout>

          <FormProvider {...formMethods}>
            <form>
              <label htmlFor="name">Fullname</label>
              <input type="text" name="name" id="name" ref={register}/>

              <label htmlFor="name">Email</label>
              <input type="text" name="email" id="email" ref={register}/>

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