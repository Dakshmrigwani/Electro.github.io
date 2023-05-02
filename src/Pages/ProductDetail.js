import React from "react";
import { useParams } from "react-router-dom";
import { bodyList } from "./Body";
import Layout from "../Component/Layout";

function ProductDetail() {
  const { productId } = useParams();
  const Body = bodyList.find((prod) => prod.id === productId);

  return (
    <>
      <Layout>
        <div>
          <p>{Body.ActPrice}</p>
          <img src={Body.image} alt=".." />
        </div>
      </Layout>
      ;
    </>
  );
}

export default ProductDetail;
