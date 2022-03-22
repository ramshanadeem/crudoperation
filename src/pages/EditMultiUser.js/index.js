import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstForm from "../../components/firstForm,";
import SecondForm from "../../components/secondForm";
import ThirdForm from "../../components/ThirdForm";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddMultiUser, EditedUser, GetSingleUser } from "../../redux/action";
import { useParams } from "react-router";

const steps = ["personal info", "Address info", "Contact info"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FirstForm />;
    case 1:
      return <SecondForm />;
    case 2:
      return <ThirdForm />;
    default:
      return "unknown step";
  }
}

export default function EditMultiUser() {
  let methods = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      street: "",
      city: "",
      zipCode: "",
      phoneNumber: "",
      website: "",
    },
  });
  const { user } = useSelector((state) => state.data);
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    dispatch(GetSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      methods = { ...user };
      console.log(user, "save");
    }
  }, [user]);
  const handleNext = (data) => {
    console.log(data, "datta");
    if (activeStep == steps.length - 1) {
      console.log("methods", methods.control._formValues);
      dispatch(EditedUser(methods.control._formValues, id));
      navigate("/");
      //   dispatch(AddMultiUser(methods.control._formValues));
      //   navigate("/");
      setActiveStep(activeStep + 1);
      // });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div
      style={{
        display: "grid",
        marginLeft: "11%",
        marginTop: "5%",
        width: "80%",
      }}
    >
      <Box sx={{ width: "90%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={methods.handleSubmit(handleNext)}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </form>
            </FormProvider>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
