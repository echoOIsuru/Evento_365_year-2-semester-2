import React, { Component } from 'react';
import PaymentService from '../PaymentHandlingServices/PaymentService';
import "../PaymentHandlingStyles/searchbar.css";
import back from "../Images/back.png";
//import PromoService from '../PaymentHandlingServices/PromoService';
//import { Chart } from "react-google-charts";
import ApexCharts from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';



class PaymentReport1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            report: [],
            //report2: [],
            //CalculateDis:0
            flag: true,

            series: [{
                name: 'Promo Codes Usage',
                data: []
              }],
              options: {
                chart: {
                  type: 'bar',
                  height: 350
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '40%',
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: true
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                yaxis: {
                  title: {
                    text: 'Usage Count'
                  }
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return "Used by Customers " + val + " Times"
                    }
                  }
                }
              },

        }

        this.backward = this.backward.bind(this);
        this.print = this.print.bind(this);


    }
    componentDidMount() {

        PaymentService.getreport1().then((res) => {

            this.setState({ report: res.data });
            console.log(this.state.report, "Main Report Data");

            //this.ReportCalculate();

        });

        PaymentService.getreport2().then((res) => {

            //this.setState({ report2: res.data });
            //console.log(this.state.report2, "Report 2 Data");

            //code
            //countpromo

            var code = []
            var count = []

            var i = 0
            var j = 0

            res.data.forEach(element => {

                count[i] = element.countpromo;
                i++;
            });

            this.setState(temp => ({
                series: [{
                    data: count
                }]
            }))

            res.data.forEach(element => {

                code[j] = element.code;
                j++;
            });

            this.setState(temp => ({

                options: { xaxis: {
                        categories: code
                    }
                }
                

        }))

    })
    

    } 

    /* ReportCalculate(){

        var leng = this.state.report.length;
        //console.log(this.state.report[0], "cusid");
        for(var n = 0; n < leng; n++){

            this.state.CalculateDis = 0;

            var SetTotalwithDis = this.state.report[n].sumtotal;
            console.log(SetTotalwithDis, "withdiscount");
            var sessionCal = 0;

                PaymentService.getPaymentsByCus(this.state.report[n].cusid).then( (res) =>{
                    //console.log(this.state.report[n].cusid, "cusid");
                    let Pay = res.data;
                    var leng = Pay.length;
                    console.log(leng, "length xx");
                    console.log(Pay, "payments details by cusid");
                
                    
                    for (var i = 0; i < leng; i++) 
                    {
                        if(Pay[i].status == "Verified"){

                         PromoService.getPromocodeById(Pay[i].promoID).then( (res) =>{

                            let promo = res.data;
                            //console.log(promo, "promo details for payment");
                            this.state.CalculateDis = this.state.CalculateDis + promo.amount;
                            console.log(this.state.CalculateDis, "discount cal");
                            //set session
                            
                            sessionStorage.setItem('totdiscount', this.state.CalculateDis);

                        });
                        }
                    }     
                            // //set session1
                            // sessionStorage.setItem('paydetails', JSON.stringify(Pay));

                });
                            
                            

                            sessionCal = sessionStorage.getItem('totdiscount');
                            console.log(sessionCal, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
                            
                            console.log(n, "n value");
                            
                            //calculation part

                            var TotalDisAmount = this.state.CalculateDis;
                            var GetTotalwithDis = SetTotalwithDis;
                            console.log(GetTotalwithDis, "GetTotal");
                            var TotalwithOutDis = GetTotalwithDis - TotalDisAmount;

                            console.log(TotalwithOutDis, "TotalwithOutDis");

                    //return
                       var DiscountPercent = (TotalDisAmount/TotalwithOutDis)*100; //precentage for sum of all applied discount amounts from sum of total payment
                                                                                   //(the precentage that deducted from the sum of payment for the user by the system)

                       var Otherpercent = 100 - DiscountPercent; //the precentage user paid of the sum of his/her payments

            

        }

    }*/


    backward() {

        this.props.history.push('/payadmin');

    }

    print() {

        window.print();

    }



    render() {
        return (
            <div className="container">
                <div style={{ marginTop: 120, marginBottom: 700 }}>

                    <div className="row" >
                        <button className="my-button" onClick={this.backward} style={{ marginLeft: 10, marginBottom: 20, width: "9%", color: 'white', borderRadius: 9 }}><img style={{ width: 30, height: 25 }} src={back} alt="edit" /> <div style={{ marginLeft: 10, color: 'white' }}>Back</div></button>
                    </div>

                    <h2 className="text-center">Payment Report</h2> <br /><br />


                    <div className="containert">
                        <table className="table table-striped table-bordered" style={{ backgroundColor: 'white' }}>

                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Total Amount(Rs)</th>
                                    <th>Total Discount Amount(Rs)</th>
                                    <th>Percentage of Total Discount</th>
                                    <th>Percentage of Total Payment</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.report.map(
                                        rpt =>
                                            <tr>
                                                <td>{rpt.cusid}</td>
                                                <td>{rpt.customerName}</td>
                                                <td>{rpt.email}</td>
                                                <td>{rpt.sumtotal}</td>
                                                <td>{rpt.distotal}</td>
                                                <td>{rpt.discountPercent} %</td>
                                                <td>{rpt.otherpercent} %</td>
                                            </tr>
                                    )
                                }


                            </tbody>
                        </table>

                        <br /><br /> <br />

                        <h2 className="text-center">Promo Codes Usage Report</h2> <br /><br />

                        <div style={{ marginBottom: 25 }} >

                            <div id="chart">
                                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                            </div>


                            <br /><br /> <br />


                        </div>
                        <button className="btn btn-success" style={{ marginLeft: 600, width: "8%", textAlign: 'center', color: 'white' }} onClick={this.print}>Print</button>
                    </div>


                    <br /> <br /><br /> <br />
                </div>

            </div>
        );
    }
}

export default PaymentReport1;