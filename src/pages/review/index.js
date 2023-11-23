import { forwardRef, useState } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import axios from "axios";
// ** Styled Component
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Demo Components Imports
import FormLayoutsReview from "src/views/form-layouts/FormLayoutsReview";
import Result from "./Result";

// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";

const FormLayouts = ({}) => {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [Keywords, setKeywords] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [existingWorks, setExistingWorks] = useState("");
  const [comparaison, setComparaison] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [references, setReferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [openError, setOpenError] = useState(false);

  const checkText = async (text) => {
    // Call start
    setAbstract(null)
    setKeywords(null)
    setIntroduction(null)
    setExistingWorks(null)
    setComparaison(null)
    setConclusion(null)
    setReferences(null)
    setTitle(null)


    // First call
    const regex1 = `Genrate a title from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex1 })
      .then((res) => {
        setTitle(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // second Call
    const regex2 = `Genrate an abstract from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex2 })
      .then((res) => {
        setAbstract(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 3rd call
    const regex3 = `Genrate keywords from this text: \n ${text} \n`;
    setLoading(true);

    await axios
      .post("http://localhost:8000/check", { text: regex3 })
      .then((res) => {
        setKeywords(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 4th call
    const regex4 = `Genrate a detailed introduction from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex4 })
      .then((res) => {
        setIntroduction(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 5th call
    const regex5 = `Provide an analysis and elaborate on the existing literature, offering more details and insights into the current body of work from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex5 })
      .then((res) => {
        setExistingWorks(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 6th call
    const regex6 = `Conduct a comparison with another piece of work, offering a detailed examination of similarities, differences, and notable aspects from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex6 })
      .then((res) => {
        setComparaison(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 7th call
    const regex7 = `Genrate a detailed conclusion from this text: \n ${text} \n`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex7 })
      .then((res) => {
        setConclusion(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // 8th call
    const regex8 = `generate the references from this text: \n ${text} \n and separate them with <br />`;
    setLoading(true);
    await axios
      .post("http://localhost:8000/check", { text: regex8 })
      .then((res) => {
        setReferences(res.data.Text);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error.message);
        setOpenError(true);
        setLoading(false);
      });

    // Calls end
  };

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsReview
            loading={loading}
            onCheck={(text) => checkText(text)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Snackbar
            open={openError}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3000}
          >
            <Alert severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          </Snackbar>
          <Result
            title={title}
            abstract={abstract}
            Keywords={Keywords}
            introduction={introduction}
            existingWorks={existingWorks}
            comparaison={comparaison}
            conclusion={conclusion}
            references={references}
          />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  );
};

export default FormLayouts;
