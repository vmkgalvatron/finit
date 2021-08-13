import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Collapse
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import grp1 from '../graphs/1.png';
import grp2 from '../graphs/2.png';
import grp3 from '../graphs/3.png';
import grp4 from '../graphs/4.png';
import grp5 from '../graphs/5.png';
import grp6 from '../graphs/6.png';
import grp7 from '../graphs/7.png';
import grp8 from '../graphs/8.png';
import grp9 from '../graphs/9.png';



class Accordian extends Component {

  constructor(){
    super();
    this.state={
      toggleQuestion:1,
      images:[],
      graphs:[],
    }
  }

  componentDidMount(){
    if(this.props.userName === 'Unknown'){
      const {history} = this.props;
      history.push("/intro");
  }
    let temp = [];
    temp.push(img1);
    temp.push(img2);
    temp.push(img3);
    temp.push(img4);
    temp.push(img5);
    temp.push(img6);
    temp.push(img7);
    temp.push(img8);
    temp.push(img9);
    let temp_graphs = [];
    temp_graphs.push(grp1);
    temp_graphs.push(grp2);
    temp_graphs.push(grp3);
    temp_graphs.push(grp4);
    temp_graphs.push(grp5);
    temp_graphs.push(grp6);
    temp_graphs.push(grp7);
    temp_graphs.push(grp8);
    temp_graphs.push(grp9);

    this.setState({images:temp,graphs:temp_graphs});
    window.addEventListener("beforeunload", this.alertUser);
        return () => {
          window.removeEventListener("beforeunload", this.alertUser);
    };
    
    

  }


  note_object = [
    {
      title: "bank savings",
      "title-text" : "Once we put our money in the bank accounts, the bank gives us certain interest rate on saving. The phenomenon is used in the investment in saving.",
      suggestions: [
        "Saving in the bank is considerd as most safe and risk free option of the investment.",
        "The interest rates in the banks may vary countrywise and bankwise also.",
        "Since there is very less risk invloved in this investment, returns might not be much invigorating."
      ],
      facts: [
        "Venezuela is the country having highest interest rate among all other countries.(57%)",
        "Switzerland is the county having lowest interest rate among all other countries. (-0.75%)"
      ],
      links: ["https://www.wishfin.com/savings-account-interest-rates/"],
      notes: [
        "The figures given here are of the February 2021 and may change in the future.",
        "The figures given above are of the central bank of respective nations."
      ]
    },
    {
      title: "Real Estate",
      "title-text" : "Buying and owning real estate is an investment strategy that can be both satisfying and lucrative. Unlike stock and bond investors, prospective real estate owners can use leverage to buy a property by paying a portion of the total cost upfront, then paying off the balance, plus interest, over time.",
      suggestions: [
        "repair and update. With this approach, you buy a property that you think will increase in value with certain repairs and updates. Ideally, you complete the work as quickly as possible and then sell at a price that exceeds your total investment (including the renovations).",
        "Hold and resell. This type of flipping works differently. Instead of buying a property and fixing it up, you buy in a rapidly rising market, hold for a few months, and then sell at a profit.",
        "You can depreciate the cost of buildings but not the land.",
        "both real estate and stocks can take a big hit during economic recessions."
      ],
      facts: [
        "Real estate sector is one of the most globally recognized sectors. It comprises of four sub sectors - housing, retail, hospitality, and commercial.",
        "Indian real estate Market is expected to increase by 5% in next year.",
        "You can depreciate the cost of buildings but not the land.",
        "both real estate and stocks can take a big hit during economic recessions."
      ],
      links: ["https://www.magicbricks.com/"],
      notes: [
        "Conventionally real estate market was offline now a days online sites for finding real estate are popular. Ex. magicbricks.",
      ]
    },
  
    {
      title: "Share Market",
      "title-text" : "Buying and owning real estate is an investment strategy that can be both satisfying and lucrative. Unlike stock and bond investors, prospective real estate owners can use leverage to buy a property by paying a portion of the total cost upfront, then paying off the balance, plus interest, over time.",
      suggestions: [
        "The stock market refers to the collection of markets and exchanges where regular activities of buying, selling, and issuance of shares of publicly-held companies take place. Such financial activities are conducted through institutionalized formal exchanges or over-the-counter (OTC) marketplaces which operate under a defined set of regulations. There can be multiple stock trading venues in a country or a region which allow transactions in stocks and other forms of securities.",
      ],
      facts: [
        "Most people realize that owning a stock means buying a percentage of ownership in the company, but many new investors have misconceptions about the benefits and responsibilities of being a shareholder. Many of these misconceptions stem from a lack of understanding of the amount of ownership that each stock represents.",
        "A stock exchange is where different financial instruments are traded, including equities, commodities, and bonds. Exchanges bring corporations and governments, together with investors. Exchanges help provide liquidity in the market, meaning there are enough buyers and sellers so that trades can be processed efficiently without delays.",
      ],
      links: ["https://groww.in/"],
      notes: [
        "Some sites for investing in share market : groww, zerodha",
      ]
    },
    {
      title:"Fixed Deposit",
      "title-text":"A fixed deposit is a financial instrument provided by banks or NBFCs which provides investors a higher rate of interest than a regular savings account, until the given maturity date. It may or may not require the creation of a separate account.",
      suggestions:["The Reserve Bank of India has announced repo rate cuts which may induce banks to reduce the interest rates on fixed deposits in the future. So investors should carefully invest."],
      facts:["If a customer places money in a term deposit, the bank can invest the money in other financial products that pay a higher rate of return (RoR) than what the bank is paying the customer for the use of their funds. ",
             "The bank can also lend the money out to its other clients, thereby receiving a higher interest rate from the borrowers as compared to what the bank is paying in interest for the term deposit."],
      links:["https://groww.in/fixed-deposit"],
      notes:["Factors that Affect FD Interest Rates",
      "There are many factors that affect FD interest rates, some of which are given below:",
      "1] Deposit Tenure: The lower the tenure, the lower will be the interest rate and the higher or medium range the tenure, the higher the interest rate will be.",
      "2] Deposit Amount: Higher deposit amounts will fetch you higher interest rates, especially bulk deposits exceeding Rs.1 crore.",
      "3] Depositor type: Senior citizens typically get 0.25% to 0.50% additional interest rate on fixed deposits."
      ]
  },{
      title:"Mutual Funds",
      "title-text":"A mutual fund is a type of investment where more than one investor pools their money together in order to purchase securities.",
      suggestions:["There are also many mutual funds that are actively managed, meaning they are updated by portfolio managers who carefully track and adjust their allocations within the fund. However, these funds generally have greater costs—such as yearly management fees and front-end charges—which can cut into an investor's returns."],
      facts:["Mutual funds are valued at the end of the trading day, and all buy and sell transactions are likewise executed after the market closes."],
      links:["https://groww.in/mutual-funds"],
      notes:["Currently mutual fund interest rates are predicted to fall."]
  },{
      title:"Gold",
      "title-text":"From the time of ancient civilizations to the modern era, gold has been the world's currency of choice. Today, investors buy gold mainly as a hedge against political unrest and inflation.",
      suggestions:["Many top investment advisors recommend a portfolio allocation in commodities, including gold, in order to lower overall portfolio risk."],
      facts:["Gold is considered a safe investment. It is supposed to act as a safety net when markets are in decline since the price of gold doesn't typically move with market prices. Because of this, it can be considered a risky investment as well, as history has shown that the price of gold does not always go up, particularly when markets are soaring. Investors typically turn to gold when there is fear in the market and they expect prices of stocks to go down.",
      "As with any investment, it's important to consider the time frame of investing, as well as to study market research to gauge an understanding of how markets are expected to perform. Gold is not a foolproof investment, as with stocks and bonds, its price fluctuates depending on a multitude of factors in the global economy. With all investment portfolios, diversification is important, and investing in gold can help diversify a portfolio, typically in market declines, when the price of gold tends to increase."],
      links:["https://paytm.com/digitalgold"],
      notes:["Traditionally gold market and investments were done in store but these days investment in gold can be done online with digital gold.",
      "The value of gold is determined by the market 24 hours a day, seven days a week. Gold trades predominantly as a function of sentiment—its price is less affected by the laws of supply and demand. This is because the new mine supply is vastly outweighed by the sheer size of above-ground, hoarded gold. To put it simply, when hoarders feel like selling, the price drops. When they want to buy, a new supply is quickly absorbed and gold prices are driven higher."]
  },
  {
    title: "Currency Exchange",
    "title-text" : "The value of currencies fluctuate from time to time according too each other. The same fluctuation is used to invest money.",
    suggestions: [
      "Currency trading is also similar to any derivative trading, but done in the pairs of currencies.",
      "The royalties are used in areas of venture financing, entertainment income, intellectual properties.",
      "Factors impacting stock market also deviates the ForEx market, hence stock investors invest in both simultaneously",
	"Among all the greatness of ForEx, there are very few currencies at core, which drive this huge investment(USD, EUR, CNY, GBP, JPY).",
    ],
    facts: [
      "The currency exchange/ Forex is the largest investment market in the world and continues to grow",
      "The ForEx has volume more than any stock exchange in the world. The stock exchange having highest volume NYSE, has volume of 25 million of daily trading. Not even comparable to ForEX.",
	"On April 2010, the forex market reached $4 trillion in daily average turnover, an increase of 20% since 2007",
    ],
    links: ["https://www.forex.com/en/markets/forex/"],
    notes: [
      "The figures given here are of the February 2021 and may change in the future.",
      "The figures have been directly taken from the official website of ForEx"
    ]
  },
  {
    title: "Crypto Currencies.",
    "title-text" : "Crypto currency is decentralised digital currency based on the blockchain phenomena. There are tokens issued by various companies called as cryptocurrencies. We can invest in cryptocurrency (buy and sell) on the various platforms. Each cryptocurrency has volatile value, which depends on various factors like global economy, performance of parent company, adoption rate etc.",
    suggestions: [
      "The investment in cryptocurrency is similar to investment in any derivative, trading in done based on the indices.",
      "The transactions of cryptocurrencies is totally secure and anonymous.",
      "Cryptocurrency market is considered as most volatile way of investment. But as we know, high risk, high gains.",
	"Giants like Paypal, Visa, Tesla, Fb, MasterCard etc. are adopting cryptocurrencies which is impacting positively in overall adoption which helps to increase the market cap.",
    ],
    facts: [
      "Since release of Bitcoin, the market cap of bitcoin has grown to $858.9 billion.",
	". The crypto market in last 6 moths has seen surge like never before.(Sept 2020 - March 2021 👈🏻",
	"You can even expect 200-300% of returns, and more surprising thing is, that is perfectly normal in crypto-world."
    ],
    links: ["https://coinmarketcap.com"],
    notes: [
      "The figures given here are of the February 2021 and may change in the future.",
    ]
  },
  {
    title: "Royalties",
    "title-text" : "A royalty is a monetary compensation paid to the owner of an asset (often an intellectual property). The owner may license the asset to be used by another party, and will be paid a percentage of the net revenues of the asset based on its usage. Royalties can also be used to allow investors in a company to have a percentage ownership of future production or revenue.",
    suggestions: [
      "Royalties can be considered as greatest source of passive income",
      "The royalties are used in areas of venture financing, entertainment income, intellectual properties.",
      "Investing in royalties is safer way of investment that unpredictable stock markets, currency exchanges, commodities and exemplary derivatives.",
	"Not only with the currencies, but also with your cryptocurrencies, we can stand in the royalties auction or exchanges.",
	".The dividend from stocks can be considered as the royalties from stock."
    ],
    facts: [
      "According to Goldman-Sachs analyst, 14% of smartphone users will subscribe to music service, which will directly reflect to royalty incomes in music industry.",
      "Industries with highest royalties income : Software - 9.6% energy and environment - 8% healthcare - 6.4%",
	"ndustries with lowest royalties income - Automotive - 3.3 Aerospace - 4 Chemicals - 4.3",
	"Royalty exchange has reported annual 12+% of returns over the average investments over sold catalogs."
    ],
    links: ["https://www.royaltyexchange.com"],
    notes: [
      "The figures given here are of the February 2021 and may change in the future.",
      "The figures have been directly taken from the official website of Royalties Exchange."
    ]
  },

  ]

  render() {
    return (
      <>
      <div style={{height:'100vh'}} className="container-fluid">
      <div style={{height:'20%'}} className="my-3">
        <img alt="" style={{width:'100%',height:'100%',}} src = {this.state.images[this.props.location.state.id]} /> 
        </div>
        <Row className="my-3">
          <div className="col-md mx-2">
            <img alt=""  style={{width:'100%',}} src = {this.state.graphs[this.props.location.state.id]} /> 
          </div> 
          <div className="col-md mx-2">
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:1})}>
                <span className="font-weight-bold">
                  What you are investing in?
                </span>
              </CardHeader>
              <Collapse isOpen={true}>
                <CardBody>{this.note_object[this.props.location.state.id]["title-text"]}</CardBody>
              </Collapse>
            </Card>

            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:2})}>
                <span className="font-weight-bold">Some Suggestions!!!</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.note_object[this.props.location.state.id]["suggestions"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={true}>
                <CardBody>
                  <ul>
                    {this.note_object[this.props.location.state.id]["suggestions"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:3})}>
                <span className="font-weight-bold">Why not some Facts!!!</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.note_object[this.props.location.state.id]["facts"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={true}>
                <CardBody>
                  <ul>
                    {this.note_object[this.props.location.state.id]["facts"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:4})}>
                <span className="font-weight-bold">
                  Head over for starting investment and exploration👇🏼
                </span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.note_object[this.props.location.state.id]["links"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={true}>
                <CardBody>
                  <ul>
                    {this.note_object[this.props.location.state.id]["links"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <a
                            href={i}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#4cc70d" }}
                          >
                            Link#{itr+1}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader onClick={() => this.setState({toggleQuestion:5})}>
                <span className="font-weight-bold">Note</span>
                <span
                  style={{ float: "right", backgroundColor: "#4cc70d" }}
                  className="badge badge-primary badge-pill"
                >
                  {this.note_object[this.props.location.state.id]["notes"].length}
                </span>
              </CardHeader>
              <Collapse isOpen={true}>
                <CardBody>
                  <ul>
                    {this.note_object[this.props.location.state.id]["notes"].map((i,itr) => {
                      return (
                        <li key={itr}>
                          <p>{i}</p>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </Row>
      </div>
        
    </>
    );
  }
}


export default withRouter(Accordian);
