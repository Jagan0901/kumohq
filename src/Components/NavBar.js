import { BrandLogo } from "./BrandLogo";
import { BrandName } from "./BrandName"
import { Mailchimp } from "./Mailchimp"
import { QuickBooks } from "./QuickBooks"


export const NavBar = () => {
  return (
    <>
      <div className="nav-first-layer">
        <BrandName />
        <QuickBooks />
        <Mailchimp />
      </div>
      <div className="nav-second-layer">
        <p>Save 50% for 12 months</p>
        <p>
          - limited time offer.{" "}
          <span style={{ textDecoration: "underline" }}>Get started today</span>
        </p>
      </div>
      <div className="nav-third-layer">
        <div className="nav-third-layer-first-half">
          <BrandLogo />
          <span>Solutions and services </span>
          <span>Resources </span>
          <span>Switch to Mailchimp </span>
          <span>Pricing </span>
        </div>
        <div>
            <p>Hello</p>
        </div>
      </div>
    </>
  );
}
