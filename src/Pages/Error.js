import React from "react";
import Layout from "../Component/Layout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <>
      <Layout>
        <div classsName="container">
          <div className="d-grid justify-content-center my-5 ">
            <div classsName="row">
              <h2 className="text-center">404 Error Occured</h2>
              <p>OOPS ! Error occured , Go back to home page </p>
              <Link to="/">
                <div className="text-center">
                  <Button variant="light" style={{ boxShadow: "none" }}>
                    Back to home page
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
