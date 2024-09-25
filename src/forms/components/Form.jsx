import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import useUsers from "../../users/hooks/useUsers";

const Form = ({
  title = "",
  onSubmit,
  onReset,
  validateForm,
  to = "/",
  color = "inherit",
  spacing = 1,
  styles = {},
  children,
  showSubmitButton = true,
  isBlocked,
}) => {
  const { isLoading } = useUsers();
  const navigate = useNavigate();

  return (
    <Box
      component="form"
      color={color}
      sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
      onSubmit={onSubmit}
      autoComplete="off"
      noValidate
      zIndex={1}
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={1} my={2} direction="row" width="100">
        <Grid item xs={12} sm={6}>
          <FormButton
            node="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormButton
            node="Clear"
            color="warning"
            variant="outlined"
            component="div"
            onClick={onReset}
          />
        </Grid>

        {showSubmitButton && (
          <Grid item xs={12}>
            <FormButton
              node="Submit"
              variant="outlined"
              color="success"
              onClick={onSubmit}
              disabled={isBlocked || isLoading || !validateForm()}
              sx={{
                backgroundColor: 'transparent',
                color: 'black',
                borderColor: 'green',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'green',
                  borderColor: 'green',
                },
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Form;
