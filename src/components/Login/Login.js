
// import React, { useState, useEffect, useReducer } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";
// import Input from "../UI/Input.js";

// const emailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   }
//   return { value: "", isValid: false };
// };

// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   return { value: "", isValid: false };
// };

// const Login = (props) => {
//   const [formIsValid, setFormIsValid] = useState(false);

//   const [emailState, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isValid: null,
//   });

//   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//     value: "",
//     isValid: null,
//   });

//   const { isValid: emailIsValid } = emailState;
//   const { isValid: passwordIsValid } = passwordState;

//   useEffect(() => {
//     const identifier = setTimeout(() => {
//       console.log("Checking form validity!");
//       setFormIsValid(emailIsValid && passwordIsValid);
//     }, 500);

//     return () => {
//       console.log("CLEANUP");
//       clearTimeout(identifier);
//     };
//   }, [emailIsValid, passwordIsValid]);

//   const emailChangeHandler = (event) => {
//     dispatchEmail({ type: "USER_INPUT", val: event.target.value });
//   };

//   const passwordChangeHandler = (event) => {
//     dispatchPassword({ type: "USER_INPUT", val: event.target.value });
//   };

//   const validateEmailHandler = () => {
//     dispatchEmail({ type: "USER_INPUT", val: emailState.value });
//   };

//   const validatePasswordHandler = () => {
//     dispatchPassword({ type: "USER_INPUT", val: passwordState.value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <Input
//           id="email"
//           label="E-Mail"
//           type="email"
//           isValid={emailIsValid}
//           value={emailState.value}
//           onchange={emailChangeHandler}
//           onBlur={validateEmailHandler}
//         />
//         <Input
//           id="password"
//           label="Password"
//           type="password"
//           isValid={passwordIsValid}
//           value={passwordState.value}
//           onchange={passwordChangeHandler}
//           onBlur={validatePasswordHandler}
//         />
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input"; // Assuming Input component is exported correctly

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "USER_INPUT", val: emailState.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "USER_INPUT", val: passwordState.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
