import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { getCountries } from "@/graphql/getCountries";
import { Grid, Link } from "@mui/material";

export type Continent = {
  id: Number;
  name: String;
};

export type Country = {
  code: String;
  continent: Continent;
  emoji: String;
  id: Number;
  name: String;
};

export type Query = {
  countries: [Country];
};

export type CountriesType = Query & Country & Continent;

const countriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const { loading, error, data } = useQuery(getCountries);

  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        rowSpacing={6}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginLeft: "6rem" }}
      >
        {countries &&
          countries.map((country: Country) => (
            <Grid item sx={{ marginLeft: "6rem" }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 30 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {country.name}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={`/countries/${country.id}`}
                    style={{
                      fontSize: "15px",
                      color: "orange",
                      textDecoration: "none",
                      padding: "0.5rem",
                    }}
                  >
                    Learn more
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default countriesList;
