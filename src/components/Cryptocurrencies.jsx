import millify from "millify"
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import {Card,Row,Col,Input} from "antd";
import { useState,useEffect } from "react";
import Loader from "./Loader";


const Cryptocurrencies = ({simplified}) => {

  const {data:cryptosList,isFetching}=useGetCryptosQuery();
  const [cryptos,setCryptos]=useState([]);
  console.log(cryptos);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if(isFetching) return <Loader/>;
  return (
    
    <div className="inside-box">
    <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
    <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}
export default Cryptocurrencies