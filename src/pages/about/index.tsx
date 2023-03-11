import { Button } from "@mui/material";
import Link from "next/link";

export default function About() {
  return (
    <>
      This is truly about
      <Link href={"/about/contact"} style={{ textDecoration: "none" }}>
        <Button variant="contained">Contact</Button>
      </Link>
    </>
  );
}
