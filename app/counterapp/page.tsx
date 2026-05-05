"use client";
import { Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <Grid container direction="row" spacing={2}>
        <Grid>
          {" "}
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            Increase
          </Button>
        </Grid>
        <Grid>
          {" "}
          <Button
            variant="contained"
            color="info"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </Button>
        </Grid>
        <Grid>
          {" "}
          <Button variant="outlined" color="error" onClick={() => setCount(0)}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
