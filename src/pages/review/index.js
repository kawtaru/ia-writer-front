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
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
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


    // Make API calls with a delay to respect rate limits
  const makeApiCall = async (regex) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/check", { text: regex });
      return res.data.Text;
    } catch (error) {
      console.log("error", error);
      setError(error.message);
      setOpenError(true);
      return null;
    } finally {
      setLoading(false);
      await wait(20000); // Wait for 20 seconds before the next call
    }
  };

  setTitle(await makeApiCall(`Generate a title from this text: \n ${text} \n`));
  setAbstract(await makeApiCall(`Generate an abstract from this text: \n ${text} \n limit 100 words`));
  setKeywords(await makeApiCall(`Generate keywords from this text: \n ${text} \n`));
  setIntroduction(await makeApiCall(`Generate a detailed introduction from this text: \n ${text} \n limit 200 words`));
  setExistingWorks(await makeApiCall(`Provide an analysis and elaborate on the existing literature, offering more details and insights into the current body of work from this text: \n ${text} \n`));
  setComparaison(await makeApiCall(`Generate a detailed comparative of existing works that includes the following elements: reference of existing works, domain, utilized approach, target population, methodology, and results from this text: \n ${text} \n only formatted to an html code table to display it in html page. Only the html table as a result, without introduction. result must be between <table border="1"> and </table>`));
  setConclusion(await makeApiCall(`Generate a detailed conclusion from this text: \n ${text} \n limit 200 words`));
  setReferences(await makeApiCall(`Generate references from this text: \n ${text} \n and separate them with <br />`));

  // Calls end

  };

  
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={5}>
          <FormLayoutsReview
            loading={loading}
            onCheck={(text) => checkText(text)}
          />
        </Grid>
        <Grid item xs={12} md={7}>
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
