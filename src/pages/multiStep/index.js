import * as React from "react";
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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddMultiUser } from "../../redux/action";
import { Grid } from "@mui/material";
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

export default function MultiStep() {
  const methods = useForm({
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

  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNext = (data) => {
    console.log(data, "datta");
    if (activeStep == steps.length - 1) {
      console.log("methods", methods.control._formValues);
      dispatch(AddMultiUser(methods.control._formValues));
      navigate("/");
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
    // style={{
    //   display: "grid",
    //   marginLeft: "11%",
    //   marginTop: "5%",
    //   width: "80%",
    // }}
    >
      {/* <Box sx={{ width: "90%" }}> */}
      <Grid container spacing={4} direction="row" alignSelf="center">
        <Grid item xs={12} ml={8} mr={8}>
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
        </Grid>
      </Grid>
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

              <Button type="submit">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </React.Fragment>
      )}
      {/* </Box> */}
    </div>
  );
}
