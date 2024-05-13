import Link from "next/link";

export default function Header() {
  return (
    <header
      className="header"
      style={{
        display: "flex",
        gap: "10rem",
        alignItems: "center",
        backgroundColor: "grey",
        boxShadow: "2px -1px 5px  black",
        backgroundImage: "url('/image.jpg')",
        backgroundSize: "cover",
      }}
    >
      <h1
        style={{
          color: "white",
          padding: "1rem",
        }}
      >
        Checkpoint : frontend
      </h1>

      <Link
        href="/countriesList"
        style={{
          fontSize: "25px",
          color: "white",
          textDecoration: "none",
          padding: "0.5rem",
        }}
      >
        Home
      </Link>
      <Link
        href="/createCountries"
        style={{
          fontSize: "25px",
          color: "white",
          textDecoration: "none",
          padding: "0.5rem",
        }}
      >
        add Countries
      </Link>
    </header>
  );
}
