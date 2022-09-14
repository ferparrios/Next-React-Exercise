import type { NextPage } from "next";
import { SideMenu } from "../components/SideMenu/SideMenu";
import { CardsContainer } from "../components/CardsContainer/CardsContainer";
import { Layout } from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { callApi } from "./api/hello";


const Home: NextPage = () => {
  const [info, setInfo] = useState([]);
  const [dataFilter, setDataFilter] = useState(null)

  useEffect(() => {
    const dataCall = async () => {
      const data = await callApi();
      setInfo(data);
    };
    dataCall();
  }, []);


  return (
    <>
      <Layout>
        <SideMenu data={info} setData={setInfo} />
        <CardsContainer data={info} setData={setInfo} /> 
      </Layout>
    </>
  );
};

export default Home;
