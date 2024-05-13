// import { AdType } from "../../../components/AdCard";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getCountry } from "@/graphql/getCountry";
import { Country } from "@/components/CountriesList";

export default function country() {
  const router = useRouter();
  const countryId = router.query.id;

  console.log(countryId);

  const { data, error, loading } = useQuery<Country>(getCountry, {
    variables: {
      id: countryId,
    },
    skip: countryId === null || countryId === undefined,
  });

  console.log(error);

  const country = data ? data : null;

  console.log(country);

  const [expanded, setExpanded] = useState(false);

  return (
    <Layout title="AdById">
      {country ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Card
            sx={{
              minWidth: 400,
              maxWidth: 400,
              minHeight: 380,
              boxShadow: "0.5px 0.5px 5px grey",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#ad7a99"
              >
                {country.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {country.emoji}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </Layout>
  );
}
