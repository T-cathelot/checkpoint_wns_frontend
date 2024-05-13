import CountriesList from "@/components/CountriesList";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="home">
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CountriesList />
      </div>
    </Layout>
  );
}
